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

    // Lance l'impression
    const handlePrint = () => {
        window.print();
    };

    return cvData ? (
        <>
            <div className="cv-print no-print">
                <button onClick={handlePrint}>Imprimer</button>
            </div>

            <div id="cv">
                {/* Entete */}
                <div id="cv-header">
                    <div>
                        <h1>
                            {cvData.about.prenom} {cvData.about.nom}{" "}
                        </h1>
                        <p>{cvData.about.poste}</p>
                    </div>

                    <div style={{textAlign:"center"}}>
                        <img
                            src={cvData.about.qrcode}
                            alt="QR Code"
                            width={64}
                            height={64}
                        />
                        {/* <p>Scannez-moi</p> */}
                    </div>
                </div>

                {/* Aside */}
                <div id="cv-aside">
                    {/* Photo */}
                    <div className="cv-section">
                        <img
                            src={cvData.about.photo}
                            alt={cvData.about.prenom}
                            width={150}
                            height={150}
                            style={{
                                borderRadius: "50%",
                                display: "block",
                                margin: "auto",
                                padding: "1em",
                            }}
                        />
                    </div>

                    {/* Coordonnées */}
                    <div className="cv-section">
                        <h3 className="cv-title">Coordonnées</h3>
                        <div>
                            <p>
                                <strong>Email</strong>
                            </p>
                            <p>{cvData.about.email}</p>
                        </div>

                        <div>
                            <p>
                                <strong>Téléphone</strong>
                            </p>
                            <p>{cvData.about.tel}</p>
                        </div>

                        <div>
                            <p>
                                <strong>Site web</strong>
                            </p>
                            <p>{cvData.about.siteWeb}</p>
                        </div>

                        <div>
                            <p>
                                <strong>{cvData.socialNetworks[0].alt}</strong>
                            </p>
                            <p>{cvData.socialNetworks[0].href}</p>
                        </div>
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
                        <div>
                            <h4>Web</h4>
                            {cvData.skills.web.map((skill, idx) => (
                                <div key={idx}>
                                    <p>
                                        <img
                                            src={skill.logo}
                                            alt={skill.nom}
                                            width={16}
                                        />{" "}
                                        {skill.nom}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h4>Web design</h4>
                            {cvData.skills.webDesign.map((skill, idx) => (
                                <div key={idx}>
                                    <p>
                                        <img
                                            src={skill.logo}
                                            alt={skill.nom}
                                            width={16}
                                        />{" "}
                                        {skill.nom}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main */}
                <div id="cv-main">
                    {/* Présentation */}
                    <div className="cv-section">
                        <p style={{ textAlign: "justify" }}>
                            {cvData.about.presentationCV}
                        </p>
                        <br />
                    </div>

                    {/* Parcours professionnel */}
                    <div className="cv-section">
                        <h3 className="cv-title">Parcours professionnel</h3>
                        {cvData.experiences.map((experience, idx) => (
                            <div key={idx}>
                                <h4>{experience.poste}</h4>
                                <p>
                                    <em>{experience.etablissement}</em>
                                </p>
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
                                <p>
                                    <em>{diplome.etablissement}</em>
                                </p>
                                <p>{diplome.annee}</p>
                            </div>
                        ))}
                    </div>

                    {/* Formations */}
                    <div className="cv-section">
                        <h3 className="cv-title">Formations</h3>
                        {cvData.trainings.formations.map((formation, idx) => (
                            <div key={idx}>
                                <h4>{formation.titre}</h4>
                                <p>
                                    <em>{formation.etablissement}</em>
                                </p>
                                <p>{formation.annee}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    ) : (
        ""
    );
};

export default CurriculumVitae;
