import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx"
import Layout from './components/Layout.tsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
