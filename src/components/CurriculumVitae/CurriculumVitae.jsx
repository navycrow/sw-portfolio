import { useState, useEffect } from "react";
import "./CurriculumVitae.css";

const CurriculumVitae = () => {
    const [cvData, setCvData] = useState(null);

    // Récupère les données
    useEffect(() => {
        Promise.all([
            fetch("/data/about.json").then((response) => response.json()),
            fetch("/data/experiences.json").then((response) => response.json()),
            fetch("/data/skills.json").then((response) => response.json()),
            fetch("/data/socialNetworks.json").then((response) =>
                response.json()
            ),
            fetch("/data/trainings.json").then((response) => response.json()),
            fetch("/data/works.json").then((response) => response.json()),
        ]).then(
            ([
                about,
                experiences,
                skills,
                socialNetworks,
                trainings,
                works,
            ]) => {
                setCvData({
                    about,
                    experiences,
                    skills,
                    socialNetworks,
                    trainings,
                    works,
                });
            }
        );
    }, []);

    return cvData ? (
        <div className="cv">
            {/* Entete */}
            <div className="cv-header">
                <h1>
                    {cvData.about.prenom} {cvData.about.nom}
                </h1>
                <p>{cvData.about.poste}</p>
            </div>

            {/* Aside */}
            <div className="cv-aside" style={{ backgroundColor: "#f4f4f4" }}>
                <img
                    src={cvData.about.photo}
                    alt={cvData.about.prenom}
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%" }}
                />
                <h3 className="cv-title">Coordonnées</h3>
                <h4>Email</h4>
                <p></p>
                <h4>Téléphone</h4>
                <p></p>
                <h4>{cvData.socialNetworks[0].alt}</h4>
                <p>{cvData.socialNetworks[0].href}</p>
            </div>

            {/* Main */}
            <div className="cv-main">
                <p>{cvData.about.presentation}</p>

                {/* Expérience */}
                <div className="cv-section">
                    <h3 className="cv-title">Expérience</h3>
                    {cvData.experiences.map((experience, idx) => (
                        <div key={idx}>
                            <h4>{experience.poste}</h4>
                            <p>{experience.etablissement}</p>
                            <p>{experience.periode}</p>
                        </div>
                    ))}
                </div>

                {/* Diplômes */}
                <div className="cv-section">
                    <h3 className="cv-title">Diplômes</h3>
                    {cvData.trainings.diplomes.map((diplome, idx) => (
                        <div key={idx}>
                            <h4>{diplome.titre}</h4>
                            <p>{diplome.etablissement}</p>
                            <p>{diplome.annee}</p>
                        </div>
                    ))}
                </div>

                {/* Formations professionnelles */}
                <div className="cv-section">
                    <h3 className="cv-title">Formations professionnelles</h3>
                    {cvData.trainings.formations.map((formation, idx) => (
                        <div key={idx}>
                            <h4>{formation.titre}</h4>
                            <p>{formation.etablissement}</p>
                            <p>{formation.annee}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        ""
    );
};

export default CurriculumVitae;
