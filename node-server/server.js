const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const express = require('express');

// Replace with your actual Google Place ID and API Key
const PLACE_ID = 'ChIJ70lyEEZZpjsRrOCvQj4O1RE';
const API_KEY = 'AIzaSyDku-8QHu2RnkNGsAjpqnRA-z6fEfqTFDE';

// Function to fetch reviews from Google
async function fetchGoogleReviews() {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${API_KEY}`
    );

    // Check if reviews are present in the response
    const reviews = response.data.result?.reviews?.filter(
      (review) => review.rating === 5 && review.text.split(' ').length >= 7
    ) || [];

    // Save the reviews to a file
    const filePath = path.resolve(__dirname, 'reviews.json');
    fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));

    console.log('Reviews fetched and saved successfully.');
    return reviews; // Return reviews for further use if needed
  } catch (error) {
    console.error('Error fetching Google reviews:', error.message);
    return []; // Return an empty array in case of error
  }
}

// Schedule the job to run every day at midnight
cron.schedule('0 0 * * *', fetchGoogleReviews);

// Manually trigger the function to fetch reviews at server start
fetchGoogleReviews();

// Start the server
const app = express();

app.get('/reviews', (req, res) => {
  const filePath = path.resolve(__dirname, 'reviews.json');
  if (fs.existsSync(filePath)) {
    const reviews = fs.readFileSync(filePath);
    res.json(JSON.parse(reviews));
  } else {
    res.status(404).send('Reviews not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
