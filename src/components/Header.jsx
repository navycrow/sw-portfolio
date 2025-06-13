import DarkModeBtn from "./DarkModeBtn/DarkModeBtn";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import "./Header.css";
import about from "../data/about.json";

function Header() {
    return (
        <header>
            <a href="/">
                <img
                    id="photo"
                    src={about.photo}
                    width="65" // pour réserver la place au chargement de la page
                    height="65"
                    alt={`${about.prenom} ${about.nom}`}
                    className="rounded-full"
                />
            </a>

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
                        <a href="#a-propos">Présentation</a>
                    </li>
                    <li>
                        <a href="#works">Mes réalisations</a>
                    </li>
                    <li>
                        <a href="#experiences">Mon parcours</a>
                    </li>
                    <li>
                        <a href="#skills">Mes compétences</a>
                    </li>
                    {/* <li>
                        <a href="trainings">Etudes & Formations</a>
                    </li>
                    <li>
                        <a href="background">Parcours et Compétences</a>
                    </li>
                    <li>
                        <a href="/cv">CV</a>
                    </li> */}
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
