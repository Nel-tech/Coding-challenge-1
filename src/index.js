import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         {/* Should contain one Skill component
//         for each web dev skill that you have,
//         customized with props */}
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return (
//     <div className="card">
//       <img src="pictures/favour.jpeg" alt="favour.jpeg" className="avatar" />
//     </div>
//   );
// }

// function Intro() {
//   return (
//     <div className="data">
//       <h1>Favour Lee</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugiat
//         neque harum eos vitae sunt voluptatum, dicta eveniet magni facere quia
//         iusto corrupti tenetur perferendis similique dignissimos maxime, veniam
//         blanditiis quod quis ipsa, cupiditate ut temporibus. Nisi maxime nostrum
//         sit.
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} color={skill.color} level={skill.level} />
//       ))}
//     </div>
//   );
// }

// function Skill({ skill, color, level }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <h4>{skill}</h4>
//       <span>
//         {level === "beginner" && "👶"}
//         {level === "intermediate" && "👍"}
//         {level === "advanced" && "💪"}
//       </span>
//     </div>
//   );
// }

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="images/Ghost.png" alt="" className="avatar" />;
}
function Intro() {
  return (
    <div className="data">
      <h1>FAVOUR LEE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe
        tempora eius sint in dolor repudiandae nulla possimus molestias
        similique, perspiciatis suscipit eos illo accusamus illum! Animi
        sapiente similique autem.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </div>
  );
}
// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="React" emoji="" color="#123456" />
//       <Skill skill="HTML + CSS " emoji="" color="orangered" />
//       <Skill skill="SVELTE " emoji="" color="yellow" />
//       <Skill skill="GIT AND GITHUB " emoji="" color="blue" />
//       <Skill skill="JAVASCRIPT" emoji="" color="black" />
//     </div>
//   );
// }

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>

      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
