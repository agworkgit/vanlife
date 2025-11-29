// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";

// Pages
// Defaults
import Home from "./pages/Home";
import About from "./pages/About";
// Vans
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
// Host
import Dashboard from "./pages/host/Dasboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";

// App
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               {/* Child routes*/}
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/vans" element={<Vans />} />
               {/* :id represents a variable inside our path (see useParams() to access the variable),
                  we can also add multiple variables if we want i.e. :id/:type etc.. */}
               <Route path="/vans/:id" element={<VanDetail />} />

               <Route path="/host" element={<Dashboard />} />
               <Route path="/host/income" element={<Income />} />
               <Route path="/host/reviews" element={<Reviews />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
