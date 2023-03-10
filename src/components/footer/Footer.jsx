import { Link } from "react-router-dom";
import "./footer.css";
import { FaDiscord, FaFacebook, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
       <section className="confiance">
     <h3>Ils nous font confiance...</h3>
      <div className="confiance-container">
        <div className="confiance-item">
          <h4>Bio qualité service</h4>
        </div>
        <div className="confiance-item">
          <h4>Le Froid</h4>
        </div>
        <div className="confiance-item">
          <h4>Square</h4>
        </div>
        <div className="confiance-item">
          <h4>Malongo café store</h4>
        </div>
      </div>
      </section>
      <div className="list-container">
        <div className="list">
          <h3>Voir aussi</h3>
          <ul>
             <Link className="list-link"><li>Témoignages</li></Link>
             <Link className="list-link"><li>Boites à idées</li></Link>
        
          </ul>
        </div>
        <div className="list">
          <h3>A propos</h3>
          <ul>
          <Link to={"/nous-decouvrir-qui-sommes-nous"} className="list-link"><li>Qui sommes nous?</li></Link>
          <Link className="list-link"><li>Mention légales</li></Link>
          <Link to={'/conditions-generale-utilisation'} className="list-link"><li>CGU</li></Link>
          <Link to={"/conditions-generale-ventes"} className="list-link"><li>CGV</li></Link>
          </ul>
        </div>
        <div className="list">
          <h3>presse</h3>
          <ul>
          <Link className="list-link"><li>On parle de nous</li></Link>
          <Link className="list-link"><li>Kit de presse</li></Link>
          <Link className="list-link"><li>Flyers/Affiches/Visuels</li></Link>
        
          </ul>
        </div>
      </div>
      <div className="social">
        Rejoignez nous sur les réseaux sociaux
        <div className="social-container">
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100090092092395" className="social-item">
           <FaFacebook/>
          </a>
          <a href="" className="social-item">
           <FaDiscord/>
          </a>
          <a href="" className="social-item">
         <FaLinkedin/>
          </a>
          
        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
