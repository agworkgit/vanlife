// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";

// Pages
// Defaults
import NotFound from "./pages/NotFound";
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
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
// Van Info
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";

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
                  <Route path="vans" element={<HostVans />} />
                  <Route path="vans/:id" element={<HostVanDetail />}>
                     <Route index element={<HostVanInfo />} />
                     <Route path="pricing" element={<HostVanPricing />} />
                     <Route path="photos" element={<HostVanPhotos />} />
                  </Route>
               </Route>

               {/* Catch-all route*/}
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
