import CALogo from "../assets/commerce_architects_logo.webp";
import LiamImg from "../assets/liam_earl.webp";

function Home() {
  return (
    <div className="home-page" style={{ 
      display: "flex", 
      justifyContent: "center" 
    }}>
      <div className="home-page-container" style={{
        width: "950px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
      }}>
        <div style=
          {{
            width: "100%",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "20px",
          }}>
          <h1 style={{padding: "0px", fontWeight:"100"}}>Software Engineering Intern,</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "35px",
              fontWeight: "100",
              gap: "20px",
            }}>
            <span style = {{
              color: "#0d5d30",

            }}>
            Commerce 
            </span>
            <span style = {{
              color: "#484f59",
            }}>
            Architects 
            </span>
              <img src={CALogo} alt="CA Logo" style={{
                borderRadius: "30%",
                width: "100px",
                height: "auto",
              }}/>

          </div>
        </div>
        
        <img src={LiamImg} alt="Image Of Liam Earl" style={{
          border: "2px solid var(--border-color)",
          borderRadius: "50px", 
          width: "600px", 
          aspectRatio: "4 / 3",
          marginTop: "25px"
        }}/>
      </div>
    </div>
  );
}
export default Home;