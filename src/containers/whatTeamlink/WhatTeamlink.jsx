import React from "react";
import "./whatTeamlink.css";
import { Cta } from "../../components";

const WhatTeamlink = () => {
  return (
    <div
      className="servizi__container section__padding gradient__bg"
      id="servizi"
    >
      <h1 className="center-text accent-text">I nostri servizi</h1>
      <Cta
        title="Sviluppo Web"
        text="Fai crescere il tuo business grazie alla visibilità online della tua impresa"
        style={{ borderLeft: "20px solid #9AEBA3" }}
        color={{ color: "#9AEBA3" }}
        s1="Siti Web"
        p1="Il tuo business, la tua immagine online"
        s2="CRM"
        p2="Organizza tutti i dati aziendali e velocizza le procedure"
        s3="eCommerce"
        p3="Vendi tramite i canali web"
      />
      <Cta
        title="Elettronica"
        text="Rendi intelligenti i tuoi macchinari e i tuoi prodotti"
        color={{ color: "#45C4B0" }}
        style={{ borderLeft: "20px solid #45C4B0" }}
        s1="Industria 4.0"
        p1="Interconnetti e sviluppa nuovi macchinari"
        s2="progetti elettronici"
        p2="Realizzazione progetti elettronici"
        s3="IoT"
        p3="Automazione industriale"
      />
      <Cta
        title="Altri Servizi"
        text=""
        color={{ color: "#13678A" }}
        style={{ borderLeft: "20px solid #13678A" }}
        s1="Agevolazioni"
        p1="Bandi ed agevolazioni per benefici economici"
        s2="Grafica"
        p2="Brand Identity e shooting professionali"
        s3="Infrastrutture"
        p3="Miglioramento di infrastrutture di reti"
      />
    </div>
  );
};

export default WhatTeamlink;
