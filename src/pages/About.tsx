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
        <Skills/>
      </div>
    </div>
  );
}
export default About;