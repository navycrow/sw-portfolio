import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeBtn from "./DarkModeBtn";
import BurgerBtn from "./BurgerBtn";
import "./Header.css";

function Header() {
    const [about, setAbout] = useState({});

    useEffect(() => {
        fetch("/data/about.json")
            .then((response) => response.json())
            .then((data) => setAbout(data))
            .catch((err) => console.error("Erreur de chargement JSON :", err));
    }, []);

    return (
        <header>
            <img
                id="photo"
                src={about.photo}
                alt={`${about.prenom} ${about.nom}`}
                className="rounded-full"
            />

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
                        <Link to="/skills">Mes compétences</Link>
                    </li>
                    <li>
                        <Link to="/works">Mes réalisations</Link>
                    </li>
                    <li>
                        <Link to="/experiences">
                            Expériences professionnelles
                        </Link>
                    </li>
                    <li>
                        <Link to="trainings">Etudes & Formations</Link>
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
