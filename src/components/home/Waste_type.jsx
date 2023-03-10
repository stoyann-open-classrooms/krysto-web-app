import plasticIcon from "../../assets/icones/waste_type/plastic_waste.svg";
import paperIcon from "../../assets/icones/waste_type/papier_carton.svg";
import capsuleIcon from "../../assets/icones/waste_type/capsule.svg";
import huileIcon from "../../assets/icones/waste_type/huile.svg";
import aluIcon from "../../assets/icones/waste_type/aluminium.svg";
import organicIcon from "../../assets/icones/waste_type/organic_waste.svg";

function Waste_type() {
  return (
    <>
      <section className="waste-type">
        <div className="waste-left">
          <div className="text-section">
            <h2>Les déchets que nous collectons</h2>
            <p>
              Chez Krysto, nous croyons que chaque déchet peut devenir une
              ressource. C'est pourquoi nous collectons et valorisons les
              déchets de nos clients pour les transformer en nouveaux produits
              recyclables. Avec notre approche circulaire, nous aidons les
              entreprises à réduire leur empreinte écologique et à contribuer à
              un avenir plus propre et plus durable.
            </p>
            <p>
              Nous travaillons avec des recycleurs locaux pour amener vos
              déchets là où ils peuvent être revalorisée efficacement. Et pour nos déchets plastique, nous avons notre propre
              atelier où nous les recyclons directement pour en faire des
              produits durables et recyclables. Avec Krysto, vous pouvez être
              sûr que vos déchets sont collectés et valorisés de manière
              responsable.
            </p>
          </div>
        </div>

        <div className="waste-right">
          <div className="waste-box-container">
            <div className="waste-box">
              <p>Plastique</p>
              <div className="waste-box-icone">
                <img src={plasticIcon} alt="" />
              </div>
            </div>
            <div className="waste-box">
              <p>Papier</p>
              <div className="waste-box-icone">
                <img src={paperIcon} alt="" />
              </div>
            </div>
            <div className="waste-box">
              <p>Capsule</p>
              <div className="waste-box-icone">
                <img src={capsuleIcon} alt="" />
              </div>
            </div>
            <div className="waste-box">
              <p>Organiques</p>
              <div className="waste-box-icone">
                <img src={organicIcon} alt="" />
              </div>
            </div>
            <div className="waste-box">
              <p>Aluminium</p>
              <div className="waste-box-icone">
                <img src={aluIcon} alt="" />
              </div>
            </div>
            <div className="waste-box">
              <p>Huile</p>
              <div className="waste-box-icone">
                <img src={huileIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Waste_type;
