import usbImg from '../../assets/image/Stylos/pen_4.jpg'
import Hero from '../../components/hero/Hero'

function ClefsUsb() {
  return (
    <>
    <Hero
      img={usbImg}
      title={"Clés USB recyclées Krysto"}
      text={
        "Un geste pour la planète, un outil pour votre entreprise"
      }
    />
    <section className="container">
      <p>
      Les clés USB sont des outils indispensables pour le stockage de données, que ce soit pour les entreprises ou les particuliers. Chez Krysto, nous avons décidé de donner une seconde vie aux déchets plastiques en les transformant en clés USB écologiques et durables.
      </p>
      <p>
      Nos clés USB recyclées sont disponibles en trois capacités différentes : 32 Go, 64 Go et 128 Go, pour répondre à tous vos besoins de stockage. En choisissant nos clés USB recyclées, vous faites un geste pour la planète tout en utilisant un outil de qualité.
      </p>
      <p>
      En utilisant nos clés USB recyclées, vous montrez votre engagement envers l'environnement et incitez vos employés à faire de même. De plus, pour les comités d'entreprise, nous proposons la possibilité de personnaliser les clés USB avec le logo de votre entreprise gravé dessus à partir d'un minimum de commande.
      </p>
      <p>
      En optant pour les clés USB recyclées Krysto, vous contribuez à réduire votre empreinte écologique tout en disposant d'un outil de stockage de qualité et personnalisable.
      </p>
    </section>
  </>
  )
}

export default ClefsUsb