import styloImg from '../../assets/image/photos/Stylos/pen_1.jpg'
import beamImg from '../../assets/image/photos/Poutres et planches/beam_1.jpg'
import tileImg from '../../assets/image/photos/dessous_de_verres/tiles_3.jpg'
import { Link } from 'react-router-dom'



function Recycle() {
  return (
    <section className="recycle-section">
        <div className="heading">

     
        <h1>Recyclage des déchets plastiques</h1>
        <p>
          Chez Krysto, nous sommes engagés dans la lutte contre la pollution
          plastique en collectant et recyclant les déchets plastiques. Nous
          avons investi dans des équipements de pointe pour le recyclage des
          plastiques. Nous transformons les déchets plastiques collectés en
          nouveaux objets durables, tels que des poutres et des planches,
          stylos, peignes de plage et dessous de verres.
        </p>
     
      </div>
      <div className="recycle-product-card-container">
        <Link to={"/nos-produits-stylos"} className="recycle-product-card">
        <div className="product-card-img">
           <img src={styloImg} alt="" />
          </div>
          <div className="product-card-txt">
            <h3>Stylos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
        </Link>
        <Link to={"/nos-produits-menuiseries"} className="recycle-product-card">
        <div className="product-card-txt">
            <h3>Poutres & planches</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="product-card-img">
           <img src={beamImg} alt="" />
          </div>
        </Link>
        <Link to={"/nos-produits-tommete"} className="recycle-product-card">
        <div className="product-card-txt">
            <h3>Tomettes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="product-card-img">
           <img src={tileImg} alt="" />
          </div>
        </Link>
      </div>
     
    </section>
  );
}

export default Recycle;
