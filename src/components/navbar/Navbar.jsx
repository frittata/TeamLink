import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from "../../assets/svg/icon-out-full.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#chi">Chi siamo</a>
    </p>
    <p>
      <a href="#servizi">Servizi</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="frit__navbar">
      <div className="frit__navbar-links">
        <div className="frit__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="frit__navbar-links_container">
          <Menu />
        </div>
        <div className="frit__navbar-sign">
        <a href="mailto:info@teamlink.it"><button>Contattaci</button></a>
          <a>
            <BsInstagram className="icon" />
          </a>
          <a>
            <BsLinkedin className="icon" />
          </a>
        </div>
      </div>
      <div className="frit__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine className="icon" onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line className="icon" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="frit__navbar-menu_container shadow-pop-tr">
            <div className="frit__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="frit__navbar-menu_sign">
              <a href="mailto:info@teamlink.it"><button>Contattaci</button></a>
              <div>
                <a>
                  <BsInstagram className="icon" />
                </a>
                <a>
                  <BsLinkedin className="icon" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
