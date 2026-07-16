import { useState } from "react";

import JavaLogo from "../assets/tech_logos/Java.svg";
import TypeScriptLogo from "../assets/tech_logos/TypeScript.svg";
import CSharpLogo from "../assets/tech_logos/CSharp.svg";
import PythonLogo from "../assets/tech_logos/Python.svg";

import ReactLogo from "../assets/tech_logos/React.svg";
import SpringLogo from "../assets/tech_logos/Spring.svg";
import PytestLogo from "../assets/tech_logos/Pytest.svg";
import PydanticLogo from "../assets/tech_logos/Pydantic.svg";

import GitLogo from "../assets/tech_logos/Git.svg";
import ViteLogo from "../assets/tech_logos/Vite.svg";
import DockerLogo from "../assets/tech_logos/Docker.svg";
import AWSLogo from "../assets/tech_logos/AWS.svg";
import TerraformLogo from "../assets/tech_logos/Terraform.svg";

interface SkillDetail {
  name: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  skills: SkillDetail[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {name: "Java", logo: JavaLogo}, 
      {name: "TypeScript", logo: TypeScriptLogo},
      {name: "C#", logo: CSharpLogo}, 
      {name: "Python", logo: PythonLogo}, 
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {name: "React", logo: ReactLogo}, 
      {name: "Spring", logo: SpringLogo},
      {name: "Mockito", logo: JavaLogo}, 
      {name: "Pytest", logo: PytestLogo}, 
      {name: "Pydantic", logo: PydanticLogo},
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      {name: "Git", logo: GitLogo}, 
      {name: "Vite", logo: ViteLogo},
      {name: "Docker", logo: DockerLogo}, 
      {name: "AWS", logo: AWSLogo}, 
      {name: "Terraform", logo: TerraformLogo}, 
    ]
  },
];

const sectionStyle: React.CSSProperties = {
  width: "100%",
  padding: "40px 0",  
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
};

const headingStyle: React.CSSProperties = {
  fontSize: "28px",
  color: "var(--text-main)",
  margin: "0 0 24px 0",
};

const categoryStyle: React.CSSProperties = {
  backgroundColor: "var(--bg-surface)",
  border: "2px solid var(--border-color)",
  borderRadius: "12px",
  padding: "20px 24px",
  flex: 1,
};

const categoryTitleStyle: React.CSSProperties = {
  margin: "0 0 12px 0",
  fontSize: "16px",
  fontWeight: 600,
  color: "var(--text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const pillListStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const basePillStyle: React.CSSProperties = {
  padding: "6px 14px",
  borderRadius: "999px",
  fontSize: "14px",
  border: "1px solid var(--border-color)",
  width: "100%",
  height: "100",
  fontWeight: 500,
  transition: "background-color 0.15s ease",
  cursor: "default",
  display: "flex",
  alignItems: "center",
  gap: "5px"
};

function useIsWideScreen(breakpoint = 700) {
  const [isWide, setIsWide] = useState(window.innerWidth >= breakpoint);

  useState(() => {
    function handleResize() {
      setIsWide(window.innerWidth >= breakpoint);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return isWide;
}

function SkillPill({ skill }: { skill : SkillDetail }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...basePillStyle,
        display:"flex",
        justifyContent:"center",
        width: "100%",
        backgroundColor: hovered ? "var(--primary-hover)" : "var(--bg-main)",
        }}>
      <img src={skill.logo} alt={`${skill.name} Logo`} style={{width: "30px", height: "auto", float:"left"}}/>
    
      <span
        style={{
          padding: "6px 14px",
          borderRadius: "999px",
        }}>
        {skill.name}
      </span>
    </div>
    
  );
}

function Skills() {
  const isWide = useIsWideScreen();

  const gridStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isWide ? "row" : "column",
    gap: "24px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Here Are My Skills:</h2>
      <div style={gridStyle}>
        {skillCategories.map((category) => (
          <div key={category.title} style={categoryStyle}>
            <h3 style={categoryTitleStyle}>{category.title}</h3>
            <div style={pillListStyle}>
              {category.skills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
                
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
