import { useState, useEffect } from "react";
import PopupCard from "../components/PopupCard";

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [experienceDetail, setExperienceDetail] = useState({});

    // Récupération des données
    useEffect(() => {
        fetch("/data/experiences.json")
            .then((response) => response.json())
            .then((data) => setExperiences(data))
            .catch((err) => console.error("Erreur de chargement JSON :", err));
    }, []);

    return (
        <section id="experiences">
            <h2>Expériences professionnelles</h2>
            <div className="container">
                {experiences.map((experience, index) => (
                    <div key={index} className="card">
                        <h3>{experience.poste}</h3>
                        <p>{experience.etablissement}</p>
                        <p>{experience.periode}</p>
                        <p
                            className="see-more"
                            onClick={() => setExperienceDetail(experience)}
                        >
                            En savoir plus...
                        </p>
                    </div>
                ))}
            </div>
            <PopupCard experience={experienceDetail} />
        </section>
    );
};

export default Experiences;
