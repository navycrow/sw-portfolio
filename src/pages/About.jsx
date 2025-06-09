import "./About.css";
import about from '../data/about.json'
import SocialNetworks from "../components/SocialNetworks";
import CurriculumVitae from "../components/CurriculumVitae/CurriculumVitae";

function About() {
    return (
        <section id="a-propos">
            <h2>A propos de moi</h2>

            <div id="a-propos-photo">
                <img
                    src={about.photo}
                    alt={`${about.prenom} ${about.nom}`}
                    width="280" // pour réserver la place au chargement de la page
                    height="280"
                    className="rounded-full photo-profil"
                />
                <h3>
                    {about.prenom} {about.nom}
                </h3>
                <h4>{about.poste}</h4>
            </div>

            <div id="a-propos-descriptif">
                <p>{about.presentation}</p>
                <SocialNetworks />
            </div>
        </section>
    );
}

export default About;
