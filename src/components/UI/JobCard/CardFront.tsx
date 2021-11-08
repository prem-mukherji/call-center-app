import { FunctionComponent } from "react";
import classes from "./JobCard.module.css";

const CardFront : FunctionComponent<{}> = ()=>{	
  return (<div className={`${classes["card"]} ${classes["front"]}`}>
  <div className= "card-body d-flex justify-content-center align-items-center">
    <p className="card-text fs-1 fw-bold">Job card front</p>
  </div>
</div>);
};

export default CardFront;