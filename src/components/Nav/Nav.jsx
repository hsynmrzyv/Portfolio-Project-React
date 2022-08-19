import "./Nav.css";

// React Icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

// Hooks
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const routeHandler = (tag) => {
    setActiveNav(`#${tag}`);
  };

  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => routeHandler("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => routeHandler("about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => routeHandler("experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => routeHandler("services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => routeHandler("contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
