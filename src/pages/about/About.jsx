import "./about.css";

function About() {
  return (
    <>
      <section className="heading">
        <h1>Qui sommes nous ?</h1>
      </section>
      <main className="container">
        <div className="about-container">
          <div className="about-card">
            <div className="about-card-pics"></div>
            <div className="about-card-txt">
              <h3>Stoyann</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis laudantium velit est perferendis vero voluptatibus, nemo
                odit iure ab tenetur possimus provident fuga alias! Ullam fuga
                sed consequatur numquam corrupti.
              </p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-pics"></div>

            <div className="about-card-txt">
              <h3>Nathanaelle</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis laudantium velit est perferendis vero voluptatibus, nemo
                odit iure ab tenetur possimus provident fuga alias! Ullam fuga
                sed consequatur numquam corrupti.
              </p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-pics"></div>

            <div className="about-card-txt">
              <h3>Tristan</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis laudantium velit est perferendis vero voluptatibus, nemo
                odit iure ab tenetur possimus provident fuga alias! Ullam fuga
                sed consequatur numquam corrupti.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
