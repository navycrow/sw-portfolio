const CVSkills = ({ skills, title }) => {
    return (
        <div>
            <h4>{title}</h4>
            {skills.map((skill, idx) => (
                <div key={idx}>
                    <p>
                        <img src={skill.logo} alt={skill.nom} width={16} />{" "}
                        {skill.nom}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CVSkills;
