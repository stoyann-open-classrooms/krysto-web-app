import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sensibilisation from "./components/home/Sensibilisation";


import ScrollToTop from "./components/ScrollToTop.";
import "./index.css";
import About from "./pages/about/About";
import Atelier from "./pages/Atelier/Atelier";
import AtelierCommercial from "./pages/atelierCommercial/AtelierCommercial";
import AtelierPedagogic from "./pages/atelierPedagogic/AtelierPedagogic";
import AtelierPublic from "./pages/atelierPublic/AtelierPublic";
import Bureaux from "./pages/bureaux/Bureaux";
import Cgu from "./pages/cgu/Cgu";
import Cgv from "./pages/cgv/Cgv";

import CollectDemande from "./pages/collectDemande/CollectDemande";
import Collectivite from "./pages/collectivite/Collectivite";
import CommentTrier from "./pages/commentTrier/CommentTrier";
import Contact from "./pages/contact/Contact";
import Engagement from "./pages/engagement/Engagement";
import Event from "./pages/evenement/Event";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login.jsx";
import Magasin from "./pages/magasin/Magasin";
import Menuiserie from "./pages/Menuiserie/Menuiserie";
import Money from "./pages/money/Money";
import PourquoiTrier from "./pages/pourquoiTrier/PourquoiTrier";
import Private from "./pages/private/Private";
import PrivateCollectPoint from "./pages/private/privateCollectPoint/PrivateCollectPoint";
import PrivateCollectPointDetails from "./pages/private/privateCollectPointDetails/PrivateCollectPointDetails";
import PrivateHome from "./pages/private/privateHome/PrivateHome";
import PrivateParametre from "./pages/private/privateParametre/PrivateParametre";
import PrivateRapport from "./pages/private/privateRapport/PrivateRapport";
import Restaurant from "./pages/restaurant/Restaurant";
import Revendeur from "./pages/revendeur/Revendeur";
import Rse from "./pages/rse/Rse";
import Stylos from "./pages/Stylos/Stylos";
import TeamBulding from "./pages/teamBulding/TeamBulding";
import Testimonial from "./pages/testimonial/Testimonial";
import Tommet from "./pages/tommet/Tommet";
import Troc from "./pages/troc/Troc";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
          <Header />
     
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/demande-collecte/:id" element={<CollectDemande/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recycler-entreprises" element={<Bureaux/>}/>
            <Route path="/recycler-dans-vos-evenements" element={<Event/>}/>
            <Route path="/recycler-collectivite" element={<Collectivite/>}/>
            <Route path="/recycler-bar-restaurant" element={<Restaurant/>}/>
            <Route path="/recycler-hotel" element={<Hotel/>}/>
            <Route path="/service-sensibilisation" element={<Atelier/>}/>
            <Route path="/service-sensibilisation-team-bulding" element={<TeamBulding/>}/>
            <Route path="/service-sensibilisation-atelier-commercial" element={<AtelierCommercial/>}/>
            <Route path="/service-sensibilisation-atelier-pedagogique" element={<AtelierPedagogic/>}/>
            <Route path="/service-sensibilisation-atelier-publique" element={<AtelierPublic/>}/>
            <Route path="/recycler-commerce" element={<Magasin/>}/>
            <Route path="/nos-produits-stylos" element={<Stylos/>}/>
            <Route path="/nos-produits-menuiseries" element={<Menuiserie/>}/>
            <Route path="/nos-produits-tommete" element={<Tommet/>}/>
            <Route path="/nos-produits-devenir-revendeur" element={<Revendeur/>}/>
            <Route path="/nous-decouvrir-qui-sommes-nous" element={<About/>}/>
            <Route path="/nous-decouvrir-notre-engagement" element={<Engagement/>}/>
            <Route path="/nous-decouvrir-notre-monnaie-local-et-solidaire" element={<Money/>}/>
            <Route path="/nous-decouvrir-on-parle-de-nous" element={<Testimonial/>}/>
            <Route path="/nous-decouvrir-notre-site-de-troc" element={<Troc/>}/>
            <Route path="/en-savoir-plus-pourquoi-trier" element={<PourquoiTrier/>}/>
            <Route path="/en-savoir-plus-comment-trier" element={<CommentTrier/>}/>
            <Route path="/en-savoir-la-rse-en-entreprise" element={<Rse/>}/>
            <Route path="/conditions-generale-utilisation" element={<Cgu/>}/>
            <Route path="/conditions-generale-ventes" element={<Cgv/>}/>
              <Route path="/mot-de-passe-oublier" element={<ForgotPassword />} />
            <Route path="/nous-contacter" element={<Contact/>}/>
            <Route path="/private" element={<Private />}>
              <Route path="/private/home" element={<PrivateHome />} />
              <Route path="/private/rapport" element={<PrivateRapport />} />
              <Route path="/private/mes-points-de-collectes" element={<PrivateCollectPoint />} />
              <Route path="/private/details-point-de-collecte/:id" element={<PrivateCollectPointDetails />} />
              <Route path="/private/parametre" element={<PrivateParametre />} />
    
            </Route>
        
          </Routes>
        
     
        <Footer/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
