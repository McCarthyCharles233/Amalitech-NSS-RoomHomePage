import React from "react";
import back from "../Images/back.png"
import forward from "../Images/forward.png"

interface SliderButtonProps {
    direction: 'prev' | 'next';
    onClick: () => void;
  }
  
  const SliderButton: React.FC<SliderButtonProps> = ({ direction, onClick }) => {
    return (
      <span className={`button ${direction}`} onClick={onClick}>
        {direction === 'prev' ? <img className="back" src={back} alt="" /> : <img className="forward" src={forward} alt="" />}
      </span>
    );
};

export default SliderButton;