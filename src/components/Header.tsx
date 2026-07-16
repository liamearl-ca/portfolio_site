import './Header.css';
import { Link } from "react-router-dom";

interface HeaderProps {
    title?: string;
    subtext?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Liam Earl', subtext = 'Prospective Software Engineer' }) => {
    return (
        <header className="header">
            <div className="header-container">
                <div>
                    <h1 className="header-title">{title}</h1>
                    <h3 className="header-subtext">{subtext}</h3>
                </div>
                <nav className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </nav>

            </div>
        </header>
    );
};

export default Header;
