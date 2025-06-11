import { Link } from "react-router-dom";
import DarkModeBtn from "./DarkModeBtn/DarkModeBtn";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import "./Header.css";
import about from "../data/about.json";

function Header() {
    return (
        <header>
            <Link to="/">
                <img
                    id="photo"
                    src={about.photo}
                    width="65" // pour réserver la place au chargement de la page
                    height="65"
                    alt={`${about.prenom} ${about.nom}`}
                    className="rounded-full"
                />
            </Link>

            <div id="titre">
                <h1>{`${about.prenom} ${about.nom}`}</h1>
                <p>{about.poste}</p>
            </div>

            {/* <!-- Bouton mode sombre et menu burger --> */}
            <div id="buttons">
                <DarkModeBtn />
                <BurgerBtn />
            </div>

            {/* <!-- Navbar --> */}
            <nav id="menu">
                <ul>
                    <li>
                        <Link to="/about">A propos de moi</Link>
                    </li>
                    <li>
                        <Link to="/works">Mes réalisations</Link>
                    </li>
                    <li>
                        <Link to="/skills">Mes compétences</Link>
                    </li>
                    <li>
                        <Link to="/experiences">Expériences professionnelles</Link>
                    </li>
                    <li>
                        <Link to="trainings">Etudes & Formations</Link>
                    </li>
                    <li>
                        <Link to="/cv">CV</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
