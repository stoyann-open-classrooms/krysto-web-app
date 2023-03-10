import React from "react";

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="container">
      <section className="headings">
        <h2>Nous contacter</h2>
        <p>
          Vous souhaiter mettre un point de collecte devenir revendeur ou
          simplement nous dire bonjour? Envoyer nous un message.
        </p>
      </section>
      <div className="container">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <select name="user" id="user">
              <option value="">Objet de la demande</option>
              <option value="">Réclamation</option>
              <option value="">Devenir revendeur</option>
              <option value="">devis collecte de déchets</option>
              <option value="">Animation commerciale</option>
              <option value="">Team bulding</option>
              <option value="">Atelier pédagogique</option>
              <option value="">Autre</option>
            </select>
          </div>
          <div className="form-group">
            <select name="user" id="user">
              <option value="">
                Comment avez-vous connu notre entreprise ?
              </option>
              <option value="">Facebook</option>
              <option value="">Bouche à oreille</option>
              <option value="">Autre</option>
            </select>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              id="name"
              // value={email}
              // onChange={onChange}
              placeholder="Entrer votre nom"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="lastname"
              type="text"
              id="password"
              // value={password}
              // onChange={onChange}
              placeholder="Entrer votre mot de prénom"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="compagny"
              type="text"
              id="compagny"
              // value={password}
              // onChange={onChange}
              placeholder="Votre entreprise"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="function"
              type="text"
              id="function"
              // value={password}
              // onChange={onChange}
              placeholder="Votre fonction dans l'entreprise"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              type="mail"
              id="email"
              // value={password}
              // onChange={onChange}
              placeholder="Votre email"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              placeholder="Votre message"
            ></textarea>
          </div>
          <div className="form-group">
            <button className=" btn btn-block btn-danger">Envoyer</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
