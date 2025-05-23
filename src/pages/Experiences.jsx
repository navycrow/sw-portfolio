import { useState, useEffect } from "react";

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch("src/data/experiences.json")
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
                        {/* <ul>
                            {experience.fonctions.map((fonction, i) => (
                                <li key={i}>{fonction}</li>
                            ))}
                        </ul> */}
                        <p>{experience.periode}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
