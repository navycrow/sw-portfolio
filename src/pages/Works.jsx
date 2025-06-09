import { useState, useEffect } from "react";
import "./Works.css";
import works from '../data/works.json'

const Works = () => {
    // const [works, setTrainings] = useState([]);

    // useEffect(() => {
    //     fetch("/data/works.json")
    //         .then((response) => response.json())
    //         .then((data) => setTrainings(data))
    //         .catch((err) => console.error("Erreur de chargement JSON :", err));
    // }, []);

    return (
        <>
            <section id="works">
                <h2>Mes réalisations</h2>
                <p>Ci-dessous, quelques exemples de réalisations effectuées notamment durant ma formation.</p>
                <div className="container">
                    {works.map((work, index) => (
                        <div key={index} className="card">
                            <h3>{work.titre}</h3>
                            <a href={work.lien} target="_blank">
                                <img
                                    className="screenshot"
                                    src={work.image}
                                    alt={work.titre}
                                />
                            </a>
                            <p>{work.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Works;
