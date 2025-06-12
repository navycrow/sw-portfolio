import SkillsSection from "../components/SkillsSection/SkillsSection";
import skills from "../data/skills.json";

const Skills = () => {
    return (
        <>
            <section id="skills">
                <h2>Mes compétences</h2>
                <p>
                    Tout au long de mon parcours, j'ai acquis un ensemble de
                    compétences techniques et humaines que je mets en œuvre au
                    service de chaque projet. Cette section présente les
                    savoir-faire que je maîtrise et que je continue à enrichir
                    pour répondre aux exigences des missions qui me sont
                    confiées.
                </p>
                <br />
                {/* Ajouter un filtre */}

                <div className="container">
                    <SkillsSection skills={skills.frontEnd} title="Front-end" />
                    <SkillsSection skills={skills.backEnd} title="Back-end" />
                    <SkillsSection
                        skills={skills.UiUxDesign}
                        title="UI/UX Design"
                    />
                    <SkillsSection
                        skills={skills.tools}
                        title="Gestion de projet & Collaboration"
                    />
                </div>
            </section>
        </>
    );
};

export default Skills;
