import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
   const { currentVan } = useOutletContext();

   return (
      <section>
         <p>Name: {currentVan.name}</p>
         <p>Category: {currentVan.type}</p>
         <p>Description: {currentVan.description}</p>
         <p>Visibility: public</p>
      </section>
   );
}
