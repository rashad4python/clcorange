import React, { useState, useEffect } from 'react';
import './review.css';
import { StaticImage } from 'gatsby-plugin-image';
const reviewsData = [
  {
    "author_name": "Jithin P",
    "author_url": "https://www.google.com/maps/contrib/108255111751814802421/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjVvIaYu8MNK8NBO76Nlu9HeBsur3ii7xS96asfRTapg1pZdJTuz=s128-c0x00000000-cc-rp-mo",
    "rating": 5,
    "relative_time_description": "3 weeks ago",
    "text": "One of the best institutions for improving linguistic skills. Faculties are supportive and the campus environment fosters the curiosity towards learning. Daily essay writing and one on one speaking sessions helps a great. I could refine my English and was able to score an overall 7 band in IELTS exam.",
    "time": 1723184447,
    "translated": false
  },
  {
    "author_name": "Goutham k leons",
    "author_url": "https://www.google.com/maps/contrib/113161269087984700610/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjVMd-g_i95utwrwSfUS4MxFurE6cgGzMZ4u78sQ7fCGgUyuMe4=s128-c0x00000000-cc-rp-mo",
    "rating": 5,
    "relative_time_description": "a month ago",
    "text": "I came across CLC through the internet when I was looking for German coaching centres. I did skim through the results to choose CLC which has proven to be the right decision. Not only was the classes flexible but also, the individual attention for every student in every class is noteworthy. The Tutors I had being young, was easy to converse with and as friendly as you can imagine. The overall positive atmosphere, attitude and tests in the Institute made the learning experience exceptionally fun and informative.",
    "time": 1722240898,
    "translated": false
  },
  {
    "author_name": "Rehan Vh",
    "author_url": "https://www.google.com/maps/contrib/106884222542858364262/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLohVIdiMrVL__P_JXlXFTNXbQo26UJlkZBwowcME6NIfB9qw=s128-c0x00000000-cc-rp-mo",
    "rating": 5,
    "relative_time_description": "a month ago",
    "text": "I've completed my IELTS coaching at CLC.The tutors have a very nice approach towards the students. CLC have helped me a lot to devolop my english and i had trouble when speaking english, but i was able to resolve the problems with the help of the tutors. After a week of continuous classes my confidence when speaking english has increased. For someone who is trying to clear IELTS i would recommend CLC as the most suitable option.",
    "time": 1722085792,
    "translated": false
  },
  {
    "author_name": "Abhishek Parameswaran",
    "author_url": "https://www.google.com/maps/contrib/108194647510665298483/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocKKtz79ANQg8Y8_LMro7jr82_xfuPbqYeQuTWksishVaHVJFg=s128-c0x00000000-cc-rp-mo",
    "rating": 5,
    "relative_time_description": "2 months ago",
    "text": "Going for A1 level german classes currently, and clc has a positive classroom atmosphere with friendly teaching staff providing individual attention. Tests are repeatedly taken to enhance our understanding and class hours are flexible as well. Overall a very good experience!",
    "time": 1718175563,
    "translated": false
  }
]

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(1); // Default to 1 for mobile

  // Function to calculate the number of visible reviews based on screen size
  const updateVisibleReviewsCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 670) {
      setVisibleReviewsCount(1); // Show 1 card for mobile
    } else if (screenWidth <= 1024) {
      setVisibleReviewsCount(2); // Show 2 cards for tablets
    } else {
      setVisibleReviewsCount(3); // Show 3 cards for desktops
    }
  };

  // Function to automatically move to the next review every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 10000); // 30 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() =>{
    if (typeof window !== 'undefined') {
    // Update the number of visible reviews when the component mounts
    updateVisibleReviewsCount();

    // Add an event listener for window resize to dynamically update visible reviews count
    window.addEventListener('resize', updateVisibleReviewsCount);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVisibleReviewsCount);
    };
    }
  }, []);

  // Move to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  // Move to the previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + reviewsData.length) % reviewsData.length
    );
  };

  if (reviewsData.length === 0) {
    return <div>No reviews available.</div>;
  }

  // Slice the data to show only the number of reviews based on the screen size
  const visibleReviews = reviewsData.slice(currentIndex, currentIndex + visibleReviewsCount);

  return (
    <section className="review-section">
      <div className="review-container">
        {/* Static Review Info */}
        <div className="static-review-container">
          <h2 className="static-review-title"><span className='highlightt'>കിട്ടും ഉറപ്പാണ്,</span> <br/>ഞങ്ങളുടെ students സാക്ഷ്യം </h2>
          <p className="static-review-text">
            Listen to what our students say about us.
          </p>
          <div className='google-rating-total'>
            <div className='google-image-star'>
              <div className='google-image-container'> <StaticImage
                      src="../images/google-image.png"
                      alt="goole image"
                      className="google-image"
                    />
              </div>      
              <div className="star-rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star half">&#9733;</span>
              </div>    
            </div>
            <div className='rating'>
            <h2 className="rating-out-of">4.7 ratings out of <span className='grey'>520 reviews</span></h2>
            </div> 

            


          </div>
        </div>
        {/* Review Carousel */}
        <div className="carousel-container">
          {visibleReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className='name-foto-date'>
                <img src={review.profile_photo_url} alt="Profile" className="profile-photo" />
                <div className='name-date'>
                  <p className='name'>{review.author_name}</p>
                  <p className="date">{review.relative_time_description}</p>
                </div>
              </div>
              <div>
                ⭐⭐⭐⭐⭐
              </div>
              <p className='text'>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
