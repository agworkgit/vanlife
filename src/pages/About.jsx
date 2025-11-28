// Components
import Card from "../components/Card";
import CTA from "../components/CTA";

export default function About() {
   return (
      <section className="standard-page">
         <div className="grid">
            <Card
               textColor={"black"}
               img={
                  "https://images.unsplash.com/photo-1761839257661-c2392c65ea72?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
               }
               title={"Don’t squeeze in a sedan when you could relax in a van."}
               descriptionTop={`Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                  (Hitch costs extra 😉)`}
               descriptionBottom={`
                  Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.`}
            />
            <CTA
               title={"Your destination is waiting. Your van is ready."}
               buttonText={"Explore our vans"}
               buttonColor={"black"}
               buttonTextColor={"white"}
            />
         </div>
      </section>
   );
}
