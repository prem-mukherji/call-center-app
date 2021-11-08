import { FunctionComponent } from "react";
import classes from "./JobCard.module.css";
import Card from "../Card";

const CardBack : FunctionComponent<{}> = ()=>{	
  return (
    <Card className={`${classes["card"]} ${classes["back"]}`}>
      <div className="card-body d-flex justify-content-center align-items-center">
        <p className="card-text fs-5 fw-bold">Job card back</p>
      </div>
    </Card>
  );
};

export default CardBack;