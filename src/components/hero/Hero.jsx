import './hero.css'

function Hero({title, titleSpan, text, img}) {
  return (
    <section className="hero">
        <img className="hero-img" src={img} alt="" />
        <div className="hero-filter"></div>
        <div className="hero-content">
          <h1>
            {title} <span>{titleSpan}</span>
          </h1>
          <p>
           {text}
          </p>
        </div>
      </section>
  )
}

export default Hero