import styloImage from '../../assets/image/photos/Stylos/pen_1.jpg'
import Hero from '../../components/hero/Hero'

function Stylos() {
  return (
    <>
      <Hero
        img={styloImage}
        title={"Création de stylos rechargeables à partir de déchets plastique"}
        text={
          "Contribuez à la protection de l'environnement tout en valorisant votre entreprise"
        }
      />
      <section className="container">
        <p>
        Chez Krysto, nous sommes convaincus que chaque entreprise doit contribuer à la protection de l'environnement en adoptant des pratiques responsables. C'est pourquoi nous avons mis en place un processus de valorisation des déchets plastique que nous collectons, en les transformant en stylos rechargeables.
        </p>
        <p>
        Nos stylos rechargeables sont disponibles en trois couleurs d'encre différentes : bleu, noir et rouge, et sont conçus pour offrir une expérience d'écriture confortable et fluide. En utilisant ces stylos, les employés de votre entreprise pourront constater la transformation de vos déchets en objets utiles et ainsi prendre conscience de l'importance de trier les déchets.
        </p>
        <p>
        Nous proposons également aux comités d'entreprise la possibilité de personnaliser les stylos avec les couleurs et le logo de leur entreprise, pour renforcer l'image de marque et l'identité visuelle.
        </p>
        <p>
        En choisissant nos stylos rechargeables, vous faites le choix d'un produit respectueux de l'environnement et de qualité, tout en valorisant votre entreprise. Contactez-nous pour plus d'informations sur notre processus de production et pour créer des stylos à l'image de votre entreprise.
        </p>
      </section>
    </>
  )
}

export default Stylos