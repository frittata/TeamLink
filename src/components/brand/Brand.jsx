import React from "react";
import { Feature } from "../../containers";
import "./brand.css";
import circle from "../../assets/svg/icon-circle.svg";
import complete from "../../assets/svg/icon-complete.svg";
import focus from "../../assets/svg/icon-focus.svg";
import divider from "../../assets/svg/divider.svg";

const Brand = () => {
  return (
    <div id="chi" className="frit__service-container section__padding boxed">
      <h1 className="accent-text center-text">Affidati a una realtà solida</h1>
      <img className="divider-icon" src={divider} alt="divider" />
      <div className="why__us gradient__bg-center">
        <Feature
          title="Servizio a 360°"
          text="Offriamo servizi connessi per soddisfare ogni esigenza evitando intermediari o servizi esterni"
          icon={circle}
        />
        <Feature
          title="Soluzioni complete"
          text="Portiamo a termine progetti completi e innovativi su misura per le esigenze dei nostri clienti"
          icon={complete}
        />
        <Feature
          title="Assistenza rapida"
          text="Siamo sempre disponibili a confronti e Feedback per raggiungere insieme il miglior risultato"
          icon={focus}
        />
      </div>
    </div>
  );
};

export default Brand;
