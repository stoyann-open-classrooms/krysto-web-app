import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_krysto.png";
import { logout, reset } from "../../features/auth/authSlice";
import "./header.css";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const token = JSON.parse(localStorage.getItem("userToken"));
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      {toggleMenu ? <div onClick={toggleNav} className="overlay"></div> : ""}

      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          {(toggleMenu || width > 1104) && (
            <ul>
              <li>
                <div className="dropdown">
                  <div className="drop-btn">
                    <MdArrowDropDown size="40px" />
                    Vous êtes{" "}
                  </div>
                  <div className="dropdown-content">
                    <Link to={"/recycler-entreprises"}>Bureau</Link>
                    <Link to={"/recycler-bar-restaurant"}>
                      Bar / Restaurant
                    </Link>
                    <Link to={"/recycler-hotel"}>Hôtel</Link>
                    <Link to={"/recycler-commerce"}>Commerce</Link>
                    <Link to={"/recycler-dans-vos-evenements"}>Evénement</Link>
                    <Link to={"/recycler-collectivite"}>Collectivité</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <div className="drop-btn">
                    <MdArrowDropDown size="40px" />
                    Nos services{" "}
                  </div>
                  <div className="dropdown-content">
                    <Link to={"/service-collecte"}>Collecte</Link>
                    <Link to={"/service-reporting"}>Reporting</Link>
                    <Link to={"/service-sensibilisation"}>Sensibilisation</Link>
              
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <div className="drop-btn">
                    <MdArrowDropDown size="40px" />
                    Nos Produits{" "}
                  </div>
                  <div className="dropdown-content">
                    <Link to={"/nos-produits-stylos"}>Stylos</Link>
                    <Link to={"/nos-produits-menuiseries"}>
                      Poutres et planches
                    </Link>
                    <Link to={"/nos-produits-tommete"}>Tomettes</Link>
                    <Link to={"/nos-produits-devenir-revendeur"}>
                      Devenir revendeur
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <div className="drop-btn">
                    {" "}
                    <MdArrowDropDown size="40px" />
                    Nous découvrir
                  </div>
                  <div className="dropdown-content">
                    <Link to={"/nous-decouvrir-qui-sommes-nous"}>
                      Qui sommes nous
                    </Link>
                    <Link to={"/nous-decouvrir-notre-engagement"}>
                      Notre engagement
                    </Link>
                    <Link
                      to={"/nous-decouvrir-notre-monnaie-local-et-solidaire"}
                    >
                      Monnaie locale et solidaire
                    </Link>
                    <Link to={"/nous-decouvrir-notre-site-de-troc"}>
                      Notre site de troc
                    </Link>
                    <Link to={"/nous-decouvrir-on-parle-de-nous"}>
                      On parle de nous
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <div className="drop-btn">
                    {" "}
                    <MdArrowDropDown size="40px" />
                    En savoir +
                  </div>
                  <div className="dropdown-content">
                    <Link to={"/en-savoir-plus-pourquoi-trier"}>
                      Pourquoi trier
                    </Link>
                    <Link to={"/en-savoir-plus-comment-trier"}>
                      Comment trier
                    </Link>
                    <Link to={"/en-savoir-la-rse-en-entreprise"}>
                      RSE en entreprise
                    </Link>
                  </div>
                </div>
              </li>

              {user ? (
                <>
                  <li>
                    <div className="dropdown">
                      <div className="drop-btn">
                        {" "}
                        <MdArrowDropDown size="40px" />
                        Mon profil
                      </div>
                      <div className="dropdown-content">
                        <Link to={"/private/home"}>Mon profil</Link>
                        <Link to={"/private/mes-points-de-collectes"}>
                          Mes points de collectes
                        </Link>
                        <Link to={"/private/rapport"}>
                          Rapport
                        </Link>
                        <Link to={"/private/parametre"}>
                          paramétres
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={onLogout}
                        >
                          Déconection
                        </button>
                      </div>
                    </div>
                  </li>
                </>
              ) : (
                <Link to={"/login"} className="btn-connect">
                  Espace Client
                </Link>
              )}
            </ul>
          )}

          <button onClick={toggleNav} className="toggle-nav">
            {toggleMenu ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
