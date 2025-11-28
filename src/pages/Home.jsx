// Components
import Card from "../components/Card";

export default function Home() {
   return (
      <section className="background-page">
         <div className="overlay">
            <Card
               textColor={"white"}
               title={"You got the travel plans, we got the travel vans."}
               descriptionTop={
                  "Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip."
               }
               buttonText={"Find your van"}
            />
         </div>
      </section>
   );
}
