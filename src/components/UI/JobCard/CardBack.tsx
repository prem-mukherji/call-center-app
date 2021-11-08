import { FunctionComponent } from "react";
import classes from "./JobCard.module.css";

const CardBack : FunctionComponent<{}> = ()=>{	
  return (
    <div className={`${classes["card"]} ${classes["back"]}`}>
      <div className="card-body d-flex justify-content-center align-items-center">
        <p className="card-text fs-1 fw-bold">back</p>
      </div>
    </div>);
};

export default CardBack;