import React from 'react';
import './article.css';

import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';

const Article = ({title, text, style}) => {
  return (
    <div style={style} className="art__container">
      <BsFillArrowDownRightCircleFill size={20}/><h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Article