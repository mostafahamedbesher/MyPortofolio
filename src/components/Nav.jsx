import { useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import SocialIcons from "./SocialIcons";
import Hamburger from "hamburger-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Logo />

      <span className="mobile-menu-icon">
        <Hamburger
          color={`${isOpen ? "#0f1624" : "#f4f4f4"}`}
          size="28"
          toggled={isOpen}
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              setIsOpen(true);
            } else {
              // close a menu
              setIsOpen(false);
            }
          }}
        />
      </span>

      {/* closeNav={setIsOpen} display={isOpen ? "flex" : "none"} */}

      <Navlinks closeNav={setIsOpen} isOpen={isOpen} />

      <span className="social-box">
        <SocialIcons iconSize={"small"} />
      </span>
    </nav>
  );
}

export default Nav;
