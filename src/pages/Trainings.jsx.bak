import "./Trainings.css";
import trainings from "../data/trainings.json";

const Trainings = () => {
    return (
        <>
            <section id="formations">
                <h2>Formations</h2>
                <div className="container">
                    {trainings?.formations
                        ?.filter((el) => el.visible)
                        .map((el, idx) => (
                            <div key={idx} className="card">
                                <h3>{el.titre}</h3>
                                <p>{el.etablissement}</p>
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
                            <img
                                className="flag"
                                src={el.flag}
                                alt={el.langue}
                            />
                            <p>{el.niveau}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Trainings;
