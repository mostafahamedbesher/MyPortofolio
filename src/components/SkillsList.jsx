import Skill from "./Skill";

const skillsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function SkillsList() {
  return (
    <div className="skills-list grid">
      {skillsNumbers.map((skillNum) => (
        <Skill skillNo={skillNum} key={skillNum} />
      ))}
    </div>
  );
}

export default SkillsList;
