import LightVirtualMachine from "../assets/LightVirtualMachine.webp";
import DarkForestGame from "../assets/DarkForestGame.webp";
import MultiplayerPlatformer from "../assets/MultiplayerPlatformer.webp";

interface Project {
  title: string;
  image?: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  { 
    title: "Multiplayer Platformer", 
    description: "A Java-based multiplayer platformer. Jump, chat, and make fun of each other as you try to make it to the final level.",
    image: MultiplayerPlatformer,
    link: "https://github.com/LiamEarl/MultiplayerPlatformer/"
  },
  { 
    title: "Dark Forest Game", 
    description: "A Stellaris-like multiplayer web-based strategy game. The game is all about hiding your capital star system and destroying your enemies.", 
    image: DarkForestGame,
    link: "https://darkforestgame.io"
  },
  { 
    title: "Light Virtual Machine", 
    description: "Simplistic computer hardware inside of a Java program creating a light virtual machine that can execute machine code. Currently configured to run bytecode for a simple pong game.", 
    image: LightVirtualMachine,
    link: "https://github.com/LiamEarl/LightVirtualMachine"

  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid var(--border-color)",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed var(--border-color)",
            boxSizing: "border-box",
            color: "var(--text-muted)",
          }}
        >
          Add image
        </div>
      )}
      <div style={{ padding: "16px" }}>
        <a target="_blank" href={project.link}>
          <h3 style={{ margin: "0 0 8px 0", color: "var(--text-link)" }}>{project.title}</h3>
        </a>

        <p style={{ margin: 0, color: "var(--text-muted)" }}>{project.description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-page" style={{ display: "flex", justifyContent: "center", margin: "25px" }}>
      <div
        className="projects-page-container"
        style={{ width: "950px", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <h1 style={{ fontWeight: 100, marginBottom: "0" }}>My Projects</h1>
        <p style={{
          maxWidth: "700px",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: "10px 0 30px 0",
        }}>
          A few things I've built in my free time, always with an
          excuse to learn something new. Click a title to check out the code.
        </p>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
