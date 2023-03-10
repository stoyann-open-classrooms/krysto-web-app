import { Link } from "react-router-dom";
import reportingImg from "../../assets/image/space/reporting.jpg";

function Reporting() {
  return (
    <section className="reporting-section">
        <div className="reporting-img">
      <img src={reportingImg} alt="" />
        </div>
        <div className="reporting-content">

      <div className="heading">
        <h1>Reporting</h1>
        <p>
          Communiquez efficacement sur votre engagement RSE avec Krysto : des
          rapports interactifs personnalisés sur vos déchets collectés, pour une
          transparence totale et une meilleure visibilité de votre impact
          environnemental auprès de vos partenaires et clients."
        </p>

      </div>
        <Link to={"/service-reporting"} className="btn btn-block btn-reverse"  >En savoir +</Link>
        <a className="btn btn-block btn-reverse" href="https://app.powerbi.com/view?r=eyJrIjoiOWJjZDFiNzktMzM0Ny00ZDFlLTgwNzEtZDk3MmMxYWE0ZWQ3IiwidCI6ImI0Mjk1ZmNmLTk3MmItNDFjMC05OGYzLTNkNzU4NmIyZTdkYiIsImMiOjEwfQ%3D%3D">Voir un exemple</a>
        </div>
    </section>
  );
}

export default Reporting;
