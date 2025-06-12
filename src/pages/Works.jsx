import "./Works.css";
import works from "../data/works.json";

const Works = () => {
    return (
        <>
            <section id="works">
                <h2>Mes réalisations</h2>
                <p>
                    Au fil de ma formation, j'ai eu l'occasion de concevoir et
                    de développer plusieurs projets mettant en pratique les
                    compétences acquises. Cette section présente quelques-unes
                    de ces réalisations, illustrant ma progression et mon
                    implication dans l'apprentissage des technologies web.
                </p>
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
