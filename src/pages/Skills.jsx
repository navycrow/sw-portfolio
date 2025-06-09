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
            <SkillsSection
                skills={skills.frontEnd}
                title="Front-end"
            />
            <SkillsSection
                skills={skills.backEnd}
                title="Back-end"
            />
            <SkillsSection
                skills={skills.UiUxDesign}
                title="Design UI/UX"
            />
            <SkillsSection skills={skills.DevTools} title="Dev Tools" />
        </>
    );
};

export default Skills;
