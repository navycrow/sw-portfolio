import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './About.css'

function About() {
    const [about, setAbout] = useState({});

    useEffect(() => {
        fetch("src/data/about.json")
            .then((response) => response.json())
            .then((data) => setAbout(data))
            .catch((err) => console.error("Erreur de chargement JSON :", err));
    }, []);

    return (
        <section id="a-propos">
            <h2>A propos de moi</h2>
            <div>
                <img
                    src={about.photo}
                    alt={`${about.prenom} ${about.nom}`}
                    className="rounded-full photo-profil" />
                <h3>
                    {about.prenom} {about.nom}
                </h3>
                <h4>{about.poste}</h4>
            </div>
            <div>
                <p>{about.presentation}</p>
                <p>Suivez-moi</p>
                <div className="social-networks">
                    <Link to={about.linkedin}>
                        <img
                            src="src/assets/img/linkedin/linkedin-black.png"
                            width="25"
                            alt="linkedIn" />
                    </Link>
                    <Link to={about.github}>
                        <img
                            src="src/assets/img/github/github-mark-black.png"
                            width="25"
                            alt="Github" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;
