import { useState, useEffect } from "react";

const Trainings = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch("src/data/trainings.json")
            .then((response) => response.json())
            .then((data) => setTrainings(data))
            .catch((err) => console.error("Erreur de chargement JSON :", err));
    }, []);

    return (
        <section id="formations">
            <h2>Formations</h2>
            {trainings.map((training, index) => (
                <div key={index} className="formation">
                    <h3>{training.titre}</h3>
                    <p>{training.annee}</p>
                </div>
            ))}
        </section>
    );
};

export default Trainings;
