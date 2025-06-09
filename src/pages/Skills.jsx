import SkillsSection from "../components/SkillsSection/SkillsSection";
import skills from "../data/skills.json";

const Skills = () => {
    // const [skills, setSkills] = useState({});

    // useEffect(() => {
    //     fetch("/data/skills.json")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setSkills(data);
    //         })
    //         .catch((err) => console.error("Erreur de chargement JSON :", err));
    // }, []);

    return (
        <>
            <SkillsSection skills={skills.frontEnd} title="Compétences web (front-end)" />
            <SkillsSection skills={skills.backEnd} title="Compétences web (back-end)" />
            <SkillsSection
                skills={skills.UiUxDesign}
                title="Compétences design UI/UX"
            />
        </>
    );
};

export default Skills;
