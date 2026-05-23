import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/works">Works</Link>
        <Link to="/gamejams">Game Jams</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
