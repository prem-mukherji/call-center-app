import { useState } from "react"; 
import cn from "classnames";
import './JobCard2.css';

function FlipCard() {
  const [showBack, setShowBack] = useState(false); 

  function handleClick() { 
    setShowBack(!showBack); 
  } 

  
  return (
    <div
      className="flip-card-outer"
      onClick={handleClick} 
    >
      <div
        className={cn("flip-card-inner", {
          showBack, 
          "hover-trigger": false
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">front</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;