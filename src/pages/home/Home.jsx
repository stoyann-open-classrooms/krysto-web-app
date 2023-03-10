import "./home.css";

import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Waste_type from "../../components/home/Waste_type";
import Services from "../../components/home/Services";
import Recycle from "../../components/home/Recycle";
import Sensibilisation from "../../components/home/Sensibilisation";
import Reporting from "../../components/home/Reporting";
import Collect from "../../components/home/Collect";

function Home() {
  return (
    <>
      <div className="hero hero-img">
        <div className="hero-filter"></div>
        <div className="content">
          <h1>
            Bienvenue chez <span>KRYSTO</span>
          </h1>
          <p>
            Réduisez votre empreinte environnementale grâce à notre service de
            collecte de déchets personnalisé
          </p>
          <Link to={"/nous-contacter"} className=" btn btn-cta">
            {" "}
            <FaChevronRight /> Nous contacter
          </Link>
        </div>
      </div>
      <Services />
      <Recycle />
      <Collect />
      <Reporting />
      <Waste_type />
      <Sensibilisation />
    </>
  );
}

export default Home;
