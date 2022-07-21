import React from "react";
import "./footer.css";
import logo from "../../assets/svg/icon-full.svg";
import write from "../../assets/svg/w-full.svg";

const Footer = () => {
  return (
    <>
    <div id="contatti" className="section__padding footer__container gradient__bg-bi">
      <div className="contacts">
        <img className="footer_image" src={write} alt="logo" />
        <p>
          Approfondisci i nostri servisi e costruisci i tuoi progetti con noi
        </p>
        <a href="mailto:info@teamlink.it">
          <button>Mandaci una mail</button>
        </a>
      </div>
      <div className="contacts">
        <img className="footer_image" src={logo} alt="logo" />
      </div>
    </div>
    <div className="end__footer">
      <p>info@teamlink.it</p>
    </div>
    </>
  );
};

export default Footer;
