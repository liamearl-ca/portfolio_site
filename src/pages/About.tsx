import Skills from "../components/Skills";

function About() {
  return (
    <div className="about-page" style={{ 
      display: "flex", 
      justifyContent: "center", 
      margin: "25px" 
    }}>
      <div className="about-page-container" style={{
        width: "950px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
      }}>
        <div style={{fontSize:"40px"}}>
          <span>Hey, I'm </span><span style = {{color: "#0d5d30",}}>Liam Earl</span>
        </div>
        <p style={{
          maxWidth: "700px",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: "15px 0 30px 0",
        }}>
          I'm an aspiring software engineer with a habit of building things from scratch just to
          see how they work. I'm always interested in learning more in the field of software engineering. 
          Right now I'm a Software Engineering Intern at Commerce Architects, working across the stack and
          picking up as much as I can along the way. Here's what I've been building with:
        </p>
        <Skills/>
      </div>
    </div>
  );
}
export default About;