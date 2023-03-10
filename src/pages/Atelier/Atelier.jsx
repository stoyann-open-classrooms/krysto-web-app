import pedagogiqueImg from "../../assets/image/atelier/pedagogique.PNG";
import commercialImg from "../../assets/image/atelier/commercial.PNG";
import teamImg from "../../assets/image/atelier/team.PNG";
import publicImg from "../../assets/image/atelier/shred_plastic_bar.jpeg";
import './atelier.css'
import { Link } from "react-router-dom";

function Atelier() {
  return (
    <>
      <div className="heading">
        <h1>
          Prenez part à la transition écologique avec nos ateliers de
          sensibilisation
        </h1>
        <p>
          Chez Krysto, nous sommes convaincus que chacun peut contribuer à un
          avenir plus propre et plus durable en adoptant des pratiques
          éco-responsables. C'est pourquoi nous proposons des ateliers de
          sensibilisation pour tous les publics, afin de mieux comprendre les
          enjeux environnementaux et les solutions pour les relever. 
        </p>
        <p>
        Nos
          ateliers abordent notamment les différents types de déchets, leur
          impact sur l'environnement et les solutions pour les trier et les
          valoriser. Nous offrons des ateliers sur mesure pour les entreprises,
          les écoles, les collectivités, les événements et les particuliers,
          pour répondre aux besoins spécifiques de chaque public. Rejoignez-nous
          dans notre engagement pour un avenir plus propre et plus durable, et
          prenez part à la transition écologique !
        </p>
      </div>
      <div className="card-atelier-container">
        <Link to={"/service-sensibilisation-atelier-commercial"}  className="atelier-card">
          <div className="atelier-card-img">
            <img src={commercialImg} alt="" />
          </div>
          <div className="atelier-card-txt">
            <h3>Atelier commerciale</h3>
            <p>
              Idéale pour les lancements de produit, notre animation permet de
              montrer l’engagement de votre marque tout en mettant en avant vos
              produits.
            </p>
          </div>
        </Link>
        <Link to={"/service-sensibilisation-atelier-publique"} className="atelier-card">
          <div className="atelier-card-img">
            <img src={publicImg} alt="" />
          </div>
          <div className="atelier-card-txt">
            <h3>Atelier publique</h3>
            <p>
              Notre atelier permet de sensibiliser des profils variés aux enjeux
              du recyclage et à l’importance du tri des déchets.
            </p>
          </div>
        </Link>
        <Link to={"/service-sensibilisation-team-bulding"} className="atelier-card">
          <div className="atelier-card-img">
            <img src={teamImg} alt="" />
          </div>
          <div className="atelier-card-txt">
            <h3>Atelier team bulding</h3>
            <p>
              Sensibilisez vos équipes au développement durable, à vos
              engagements RSE et au recyclage avec une formule team-building
              complète.
            </p>
          </div>
        </Link>
        <Link to={"/service-sensibilisation-atelier-pedagogique"} className="atelier-card">
          <div className="atelier-card-img">
            <img src={pedagogiqueImg} alt="" />
          </div>
          <div className="atelier-card-txt">
            <h3>Atelier pédagogiques</h3>
            <p>
              Cette formule clé en main est dédiée à la sensibilisation des
              enfants de 6 à 12 ans autour des conséquences de la pollution
              plastique sur notre environnement.
            </p>
          </div>
        </Link>
   
        </div>
      
    </>
  );
}

export default Atelier;
