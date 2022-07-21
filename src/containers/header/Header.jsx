import React from "react";
import "./header.css";
import logo from "../../assets/svg/w-out-full.svg";
import art from "../../assets/svg/head 2.svg";

const Header = () => {
  return (
    <div id="home" className="frit__header section__padding boxed">
      <div className="frit__header-content">
        <img src={logo} alt="logo" />
        <h1>Siamo tecnici specializzati nell’aiutare le imprese verso la crescita digitale. </h1>
        <p>
          Il nostro Team aiuta le imprese in tutte le attività connesse al miglioramento e 
          alla crescita della digitalizzazione. Grazie al connubio di competenze in campi diversi ma collegati, ci presentiamo come unico fornitore per progetti digitali
        </p>
        <div className="frit__header-content__input">
          <input type="email" placeholder="La tua email" />
          <button type="button">Iscriviti</button>
        </div>
      </div>
      <div className="frit__header-image">
        <img src={art} alt="art" />
      </div>
    </div>
  );
};

export default Header;
