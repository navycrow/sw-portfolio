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
                    {cvData.about.prenom} {cvData.about.nom}{" "}
                </h1>
                <p>{cvData.about.poste}</p>
            </div>

            {/* Aside */}
            <div className="cv-aside">
                {/* Photo */}
                <img
                    src={cvData.about.photo}
                    alt={cvData.about.prenom}
                    width={150}
                    height={150}
                    style={{ borderRadius: "50%" }}
                />

                {/* Coordonnées */}
                <div className="cv-section">
                    <h3 className="cv-title">Coordonnées</h3>
                    <p>
                        <strong>Email</strong>
                    </p>
                    <p>{cvData.about.email}</p>

                    <p>
                        <strong>Téléphone</strong>
                    </p>
                    <p>{cvData.about.tel}</p>

                    <p>
                        <strong>Site web</strong>
                    </p>
                    <p>{cvData.about.siteWeb}</p>

                    <p>
                        <strong>{cvData.socialNetworks[0].alt}</strong>
                    </p>
                    <p>{cvData.socialNetworks[0].href}</p>
                </div>

                {/* Langues */}
                <div className="cv-section">
                    <h3 className="cv-title">Langues</h3>
                    {cvData.trainings.langues.map((langue, idx) => (
                        <div key={idx}>
                            <p>
                                <strong>
                                    <img
                                        src={langue.flag}
                                        alt={langue.langue}
                                        width={16}
                                    />{" "}
                                    {langue.langue}
                                </strong>
                            </p>
                            <p>{langue.niveau}</p>
                        </div>
                    ))}
                </div>

                {/* Compétences web */}
                <div className="cv-section">
                    <h3 className="cv-title">Compétences</h3>

                    <h4>Web</h4>
                    {cvData.skills.web.map((skill, idx) => (
                        <div key={idx}>
                            <p>
                                <strong>
                                    <img
                                        src={skill.logo}
                                        alt={skill.nom}
                                        width={16}
                                    />{" "}
                                    {skill.nom}
                                </strong>
                            </p>
                        </div>
                    ))}

                    <h4>Webdesign</h4>
                    {cvData.skills.webDesign.map((skill, idx) => (
                        <div key={idx}>
                            <p>
                                <strong>
                                    <img
                                        src={skill.logo}
                                        alt={skill.nom}
                                        width={16}
                                    />{" "}
                                    {skill.nom}
                                </strong>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main */}
            <div className="cv-main">
                <p>{cvData.about.presentation}</p>

                {/* Expérience professionnelle */}
                <div className="cv-section">
                    <h3 className="cv-title">Expérience professionnelle</h3>
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
