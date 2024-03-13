

import React from 'react'
import './card.css'
const Card = () => {
  return (
<div className="flip-card xl:w-[350px] xl:h-[450px] md:w-[300px] md:h-[354px] ">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
  )
}

export default Card