import { useState, useEffect } from "react";

const Trainings = () => {
    const [trainings, setTrainings] = useState({});

    useEffect(() => {
        fetch("src/data/trainings.json")
            .then((response) => response.json())
            .then((data) => setTrainings(data))
            .catch((err) => console.error("Erreur de chargement JSON :", err));
    }, []);

    return (
        <>
            <section id="formations">
                <h2>Formations</h2>
                <div className="container">
                    {trainings?.formations?.map((el, idx) => (
                        <div key={idx} className="card">
                            <h3>{el.titre}</h3>
                            <p>{el.annee}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="diplomes">
                <h2>Diplômes</h2>
                <div className="container">
                    {trainings?.diplomes?.map((el, idx) => (
                        <div key={idx} className="card">
                            <h3>{el.titre}</h3>
                            <p>{el.etablissement}</p>
                            <p>{el.annee}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="langues">
                <h2>Langues</h2>
                <div className="container">
                    {trainings?.langues?.map((el, idx) => (
                        <div key={idx} className="card">
                            <h3>{el.langue}</h3>
                            <p>{el.niveau}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Trainings;
