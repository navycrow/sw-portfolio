const SkillsSection = ({skills, title}) => {
  return (
                <section>
                <h2>{title}</h2>
                <div className="container">
                    {skills.map((el, idx) => (
                        <div key={idx} className="card">
                            <h3>{el.nom}</h3>
                            <img className="icon svg" src={el.logo} alt={el.nom} />
                        </div>
                    ))}
                </div>
            </section>
  )
}

export default SkillsSection