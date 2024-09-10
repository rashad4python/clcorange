import React from "react";
import "../styles/style.css";
// src/App.js
import Header from '../components/header'; // Ensure casing matches
import TopPortion from "../components/TopPortion";
// import Welcome from "../components/welcome";
import Course from "../components/course";
import Review from "../components/review";
import Joinnow from "../components/joinnow";
import LeadForm from "../components/leadform";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Whycourse from "../components/whycourse";




const IndexPage = () => (
  <div>
    <Header />
    <main className="content">
      <TopPortion />
      <Course/>
      <Review/>
      <Joinnow/>
      {/* <LeadForm/> */}
    
      <Footer/>  
    </main>

    
  </div>
);

export default IndexPage;
