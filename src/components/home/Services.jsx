import reportingIcon from '../../assets/icones/services/reporting.svg'
import sensibilisationIcon from '../../assets/icones/services/sensi.svg'
import collectIcon from '../../assets/icones/services/collecte.svg'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <section className="services">
        <div className="heading">

        <h1>Nos services</h1>
        <p>
        Chez Krysto, nous offrons une gamme de services pour répondre aux besoins de collecte et de valorisation des déchets de votre entreprise. Notre audit personnalisé gratuit vous permettra de mieux comprendre vos déchets et de mettre en place un système de tri efficace et adapté à vos besoins. Nous proposons également un système de collecte flexible, avec des horaires de collecte adaptés à votre entreprise. Avec notre rapport interactif, vous pouvez suivre l'évolution de votre bilan RSE et communiquer sur votre engagement environnemental auprès de vos clients et partenaires. Nous sommes là pour vous aider à gérer efficacement vos déchets et à contribuer à un avenir plus propre et plus durable.
        </p>
        </div>

        <div className="services-container-card">
            <div className="services-card">
                <h4>Collecte</h4>
                 <div className="services-card-icon">
                    <img src={collectIcon} alt="" />
                 </div>
                <div className="services-card-txt">


                 <p>Collecte de déchets auprés d'entreprise</p>
                </div>
                <Link to={"/service-collecte"} className='btn btn-block btn-sm'> Découvrir</Link>
            </div>
            <div className="services-card">
                <h4>Reporting</h4>
                <div className="services-card-icon">
                <img src={reportingIcon} alt="" />

                </div>
                <div className="services-card-txt">
                    
                <p>Reporting détaillée et interactif de la collecte de vos déchets</p>
                </div>
                <Link to={"/service-reporting"} className='btn btn-block btn-sm'> Découvrir</Link>

            </div>
            <div className="services-card">
                    <h4>Sensibilisation</h4>
                 <div className="services-card-icon">
                <img src={sensibilisationIcon} alt="" />

                 </div>
                 <div className="services-card-txt">

   
                 <p>Sensibilisation au tri des déchets et au recyclage</p>
                 </div>
                 <Link to={"/service-sensibilisation"} className='btn btn-block btn-sm'> Découvrir</Link>


            </div>
        </div>

    </section>
  )
}

export default Services