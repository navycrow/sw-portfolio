import { useState, useEffect } from "react";
import "./About.css";
import SocialNetworks from "../components/SocialNetworks";

function About() {
    const [about, setAbout] = useState({});

    useEffect(() => {
        fetch("/data/about.json")
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
                        width="300"  // pour réserver la place au chargement de la page
                        height="auto"
                        className="rounded-full photo-profil"
                    />
                    <h3>
                        {about.prenom} {about.nom}
                    </h3>
                    <h4>{about.poste}</h4>
                </div>
                <div>
                    <p>{about.presentation}</p>
                    <SocialNetworks />
                </div>

        </section>
    );
}

export default About;
