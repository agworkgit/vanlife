import React from "react";
import { Link } from "react-router-dom";

export default function About() {
   return (
      <div className="about-page-container">
         <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="about-hero-image"
         />
         <div className="about-page-content">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>
               Our mission is to enliven your road trip with the perfect travel
               van rental. Our vans are recertified before each trip to ensure
               your travel plans can go off without a hitch. (Hitch costs extra
               😉)
            </p>
            <p>
               Our team is full of vanlife enthusiasts who know firsthand the
               magic of touring the world on 4 wheels.
            </p>
         </div>
         <div className="about-page-cta">
            <h2>
               Your destination is waiting.
               <br />
               Your van is ready.
            </h2>
            <Link className="link-button" to="/vans">
               Explore our vans
            </Link>
         </div>
      </div>
   );
}
