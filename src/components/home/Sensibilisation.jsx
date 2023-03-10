import pedagogiqueImg from "../../assets/image/atelier/pedagogique.PNG";
import commercialImg from "../../assets/image/atelier/commercial.PNG";
import teamImg from "../../assets/image/atelier/team.PNG";
import publicImg from "../../assets/image/atelier/shred_plastic_bar.jpeg";
import { Link } from "react-router-dom";

function Sensibilisation() {
  return (
    <section className="sensibilisation-section">
      <div className="heading">
        <h1>Des ateliers de sensibilisation pour tous les publics</h1>

        <p>
          Chez Krysto, nous croyons que la sensibilisation est la première étape
          vers un monde plus propre et plus durable. C'est pourquoi nous
          proposons des ateliers de sensibilisation adaptés à tous les publics :
          entreprises, écoles, collectivités, événements et plus encore. Nos
          ateliers vous aideront à comprendre les enjeux environnementaux
          actuels et à adopter des pratiques éco-responsables dans votre
          quotidien. Nous pouvons personnaliser nos ateliers pour répondre aux
          besoins spécifiques de votre entreprise ou de votre public.    </p>
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
    </section>
  );
}

export default Sensibilisation;
