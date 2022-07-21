import React from "react";
import "./cta.css";
import { Article } from "../../components";

const Cta = ({ title, text, style, color, s1, p1, s2, p2, s3, p3 }) => {
  return (
    <div className="boxed cta__container " style={style}>
      <div className="description">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="all__services">
        <Article title={s1} text={p1} style={color} />
        <Article title={s2} text={p2} style={color} />
        <Article title={s3} text={p3} style={color} />
      </div>
    </div>
  );
};

export default Cta;
