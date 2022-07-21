import React from 'react';
import'./feature.css';

const Feature = ({title, text, icon}) => {
  return (
    <div className='feature-box'>
      
      <h2>{title}</h2>
      <p>{text}</p>
      <div className='feature__img-cont'><img src={icon}/></div>
    </div>
  )
}

export default Feature