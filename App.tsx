import './App.css'
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx"
import Header from './header/Header.tsx';
import HorizontalScroll from './scroll/HorizontalScroll.tsx'
function App() {
  return (
    <>
      <Header/>
      <HorizontalScroll className="horizontal-scroll">
        <Home/>
        <About/>
        <Projects/>
      </HorizontalScroll>
    </>
   
  )
}

export default App
