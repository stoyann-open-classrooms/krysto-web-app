import './menuiserie.css'
import imputrecibleIcone from "../../assets/icones/product/imputrecible.svg";
import durableIcone from "../../assets/icones/product/durable.svg";
import recyclableIcone from "../../assets/icones/product/recyclable.svg";

function Menuiserie() {
  return (
    <>
      <div className="heading">
        <h1>Les poutres et planches Krysto</h1>
        <p></p>
      </div>
      <section className="container">
        <p>
          Chez Krysto, nous sommes convaincus que les déchets plastiques ne
          doivent pas être considérés comme une simple nuisance à éliminer, mais
          plutôt comme une opportunité de créer de nouveaux matériaux durables
          et écologiques. C'est pourquoi nous avons développé une technologie
          innovante pour transformer les déchets plastiques en planches et
          poutres imputrescibles, étanches qui peuvent être utilisées pour créer
          du mobilier intérieur et extérieur.
        </p>
        <p>
          Notre poutres et planches éco-responsables, sont idéales pour vos
          projets de construction et d'aménagement. Fabriquées à partir de
          plastiques triés, nettoyés et broyés, sans ajout de produits
          chimiques. Elles ont les mêmes propriétés que le bois, mais avec un
          avantage majeur : elles sont 100% recyclables à la fin de leur vie
          utile. Vous pouvez ainsi réaliser tous vos projets tout en contribuant
          à la protection de l'environnement. Disponibles en différentes tailles
          et couleurs pour répondre à tous vos besoins.
        </p>
        <p>
          En choisissant nos produits, vous participez activement à la
          préservation de l'environnement, tout en bénéficiant d'une solution
          durable et esthétique pour vos projets de mobilier. Nous travaillons
          avec les professionnels de la construction, les architectes, les
          designers, les collectivités et les particuliers pour proposer des
          solutions sur-mesure, adaptées à leurs besoins et à leur budget.
        </p>
        <p>
          Nous sommes également fiers de dire que tous nos produits sont
          fabriqués à partir de déchets plastiques collectés localement. En
          choisissant Krysto, vous contribuez à la création d'une économie
          circulaire locale et à la lutte contre la pollution plastique
        </p>

        <div className="icon-beams-container">
        <div className="icon-beam">
          <img src={imputrecibleIcone} alt="" />
          <p>Imputrecible</p>
        </div>
        <div className="icon-beam">
          <img src={durableIcone} alt="" />
          <p>Durable</p>
        </div>
        <div className="icon-beam">
          <img src={recyclableIcone} alt="" />
          <p>Recyclable</p>
        </div>
      </div>
      </section>
     
    </>
  );
}

export default Menuiserie;
