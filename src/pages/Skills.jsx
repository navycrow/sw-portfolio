import { useState, useEffect } from "react";

const Skills = () => {
    const [skills, setTrainings] = useState({});

    useEffect(() => {
        fetch("/data/skills.json")
            .then((response) => response.json())
            .then((data) => setTrainings(data))
            .catch((err) => console.error("Erreur de chargement JSON :", err));
    }, []);

    return (
        <>
            <section id="competences-web">
                <h2>Compétences web</h2>
                <div className="container">
                    {skills?.web?.map((el, idx) => (
                        <div key={idx} className="card">
                            <h3>{el.nom}</h3>
                            <img className="icon" src={el.logo} alt={el.nom} />
                        </div>
                    ))}
                </div>
            </section>

            <section id="competences-web-design">
                <h2>Compétences web-design</h2>
                <div className="container">
                    {skills?.webDesign?.map((el, idx) => (
                        <div key={idx} className="card">
                            <h3>{el.nom}</h3>
                            <img className="icon" src={el.logo} alt={el.nom} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Skills;
