import "./About.css";
import about from "../data/about.json";
import SocialNetworks from "../components/SocialNetworks";
import CurriculumVitae from "../components/CurriculumVitae/CurriculumVitae";

function About() {
    return (
        <section id="a-propos">
            <h2>Présentation</h2>

            <div id="a-propos-photo">
                <img
                    src={about.photo}
                    alt={`${about.prenom} ${about.nom}`}
                    width="280" // pour réserver la place au chargement de la page
                    height="280"
                    className="rounded-full photo-profil"
                />
            </div>

            <div id="a-propos-descriptif">
                {/* Hello world animé */}
                <h3 className="terminal">
                    {"<h3>Hello world !</h3>"} <span className="cursor"></span>
                </h3>

                {/* Présentation */}
                <p>
                    Je suis <strong>Hervé GONZALEZ</strong>, développeur web à Bayonne,
                    passionné par la création d'applications modernes et
                    performantes. Rigoureux, curieux et motivé, je construis
                    progressivement mes compétences en{" "}
                    <strong> développement front-end et back-end</strong>, avec
                    une attention particulière portée à la qualité du code, à
                    l’expérience utilisateur et à l’adaptabilité des solutions.
                </p>
                <p>
                    Actuellement en formation, je suis à la recherche de
                    projets, de stages ou de collaborations pour mettre en
                    pratique mes compétences, relever de nouveaux défis et
                    continuer à progresser.
                </p>
            </div>
        </section>
    );
}

export default About;
