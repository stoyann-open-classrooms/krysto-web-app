import bureauxImg from "../../assets/image/space/recycler_bureaux.webp";
import hotelerieImg from "../../assets/image/space/recycler-hotel.webp";
import collectiveImg from "../../assets/image/space/recyclage_collectivite.webp";
import restaurationImg from "../../assets/image/space/recycler_restauration.jfif";
import commerceImg from "../../assets/image/space/recycler_commerce.jfif";
import eventImg from "../../assets/image/space/recycler_event.jfif";
import { Link } from "react-router-dom";
function Collect() {
  return (
    <section className="collect-section">
      <div className="heading">
        <h1>Notre service de collecte</h1>

        <p>
          Transformez vos déchets en ressources avec Krysto : une collecte
          professionnelle, transparente et responsable de tous vos déchets, pour
          une planète plus propre et plus durable.
        </p>
      </div>
      <h2 className="section-subtitle">Krysto pour tous vos espaces</h2>
      <div className="space-card-container">
        <Link to={"/recycler-entreprises"} className="space-card">
          <div className="space-card-img">
            <div className="filter"></div>
            <img src={bureauxImg} alt="" />
          </div>
          <div className="space-card-txt">
            <h3>Bureaux</h3>
            <p>Réduisez vos déchets de bureau avec Krysto.</p>
          </div>
        </Link>
        <Link to={"/recycler-bar-restaurant"} className="space-card">
          <div className="space-card-img">
            <div className="filter"></div>
            <img src={restaurationImg} alt="" />
          </div>
          <div className="space-card-txt">
            <h3>Restauration</h3>
            <p>Simplifiez le tri de vos déchets alimentaires.</p>
          </div>
        </Link>
        <Link to={"/recycler-hotel"} className="space-card">
          <div className="space-card-img">
            <div className="filter"></div>
            <img src={hotelerieImg} alt="" />
          </div>
          <div className="space-card-txt">
            <h3>Hotelerie</h3>
            <p>Collectez et valorisez vos déchets en toute simplicité</p>
          </div>
        </Link>
        <Link to={"/recycler-collectivite"} className="space-card">
          <div className="space-card-img">
            <div className="filter"></div>
            <img src={collectiveImg} alt="" />
          </div>
          <div className="space-card-txt">
            <h3>Collectivités</h3>
            <p>Soutenez le développement durable de votre ville.</p>
          </div>
        </Link>
      
        <Link to={"/recycler-commerce"} className="space-card">
          <div className="space-card-img">
            <div className="filter"></div>
            <img src={commerceImg} alt="" />
          </div>
          <div className="space-card-txt">
            <h3>Commerce</h3>
            <p>Adoptez des solutions responsables pour votre entreprise.</p>
          </div>
        </Link>
        <Link to={"/recycler-dans-vos-evenements"} className="space-card">
          <div className="space-card-img">
            <div className="filter"></div>
            <img src={eventImg} alt="" />
          </div>
          <div className="space-card-txt">
            <h3>Evenements</h3>
            <p>Tri et collecte de vos déchets adaptée a votre évènement.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Collect;
