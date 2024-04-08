function Navlinks({ closeNav, isOpen }) {
  return (
    <ul className={`navlinks ${isOpen ? "nav-open" : "nav-close"}`}>
      <li>
        <a
          className="navlink"
          href="#about"
          onClick={() => {
            closeNav(false);
          }}
        >
          About
        </a>
      </li>
      <li>
        <a
          className="navlink"
          href="#projects"
          onClick={() => {
            closeNav(false);
          }}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="navlink"
          href="#skills"
          onClick={() => {
            closeNav(false);
          }}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="navlink"
          href="#contact"
          onClick={() => {
            closeNav(false);
          }}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navlinks;
