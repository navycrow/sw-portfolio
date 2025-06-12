import './SkillsSection.css'

const SkillsSection = ({ skills, title }) => {
    return (
        <section className="subsection">
            <h3>{title}</h3>
            <div className="skill container">
                {skills.map((skill, idx) => (
                    // <div key={idx} className="skill card">
                        <h4 key={idx}>
                            <img
                                className="logo svg"
                                src={skill.logo}
                                alt={skill.nom}
                            />
                            {skill.nom}
                        </h4>
                    // </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
