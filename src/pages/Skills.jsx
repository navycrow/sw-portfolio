import SkillsSection from "../components/SkillsSection/SkillsSection";
import skills from "../data/skills.json";

const Skills = () => {
    return (
        <>
            <SkillsSection skills={skills.frontEnd} title="Front-end" />
            <SkillsSection skills={skills.backEnd} title="Back-end" />
            <SkillsSection skills={skills.UiUxDesign} title="UI/UX Design" />
            <SkillsSection skills={skills.tools} title="Gestion de projet & Collaboration" />
        </>
    );
};

export default Skills;
