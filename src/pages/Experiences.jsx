import { useState, useEffect } from "react";

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [selectedItem, selectItem] = useState(-1); /* pour l'affichage de la popup */

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
                {experiences.map((experience, idx) => (
                    <div key={idx} className="card">
                        <h3>{experience.poste}</h3>
                        <p>{experience.etablissement}</p>
                        <p>{experience.periode}</p>

                        {/* Affiche le détail lorsqu'on clique */}
                        <p className="popup-call" onClick={() => selectItem(idx)}>
                            En savoir plus...
                        </p>
                    </div>
                ))}
            </div>

            {/* Popup pour le détail d'une carte */}
            {selectedItem >= 0 ? (
                <div className="popup">
                    <div className="popup-overlay"></div>
                    <div className="popup-card">
                        <p className="popup-close" onClick={() => selectItem(-1)}>
                            <strong>X</strong>
                        </p>
                        <h3>{experiences[selectedItem].poste}</h3>
                        <p>{experiences[selectedItem].etablissement}</p>
                        <ul>
                            {experiences[selectedItem].fonctions.map(
                                (fonction, i) => (
                                    <li key={i}>{fonction}</li>
                                )
                            )}
                        </ul>
                        <p>{experiences[selectedItem].periode}</p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
};

export default Experiences;
