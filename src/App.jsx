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
import HostLayout from "./pages/host/HostLayout";
import Dashboard from "./pages/host/Dasboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";

// App
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               {/* Child routes*/}

               {/* Home, About pages routes*/}
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />

               {/* Vans routes, a nested setup is not required here due to no shared UI */}
               <Route path="vans" element={<Vans />} />
               {/* :id represents a variable inside our path (see useParams() to access the variable), we can also add multiple variables if we want i.e. :id/:type etc.. */}
               <Route path="vans/:id" element={<VanDetail />} />

               {/* Host routes*/}
               <Route path="host" element={<HostLayout />}>
                  {/* 'index' is a workaround in Router and it replaces "/" absolute path */}
                  <Route index element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
