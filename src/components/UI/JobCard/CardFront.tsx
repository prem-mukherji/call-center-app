import { FunctionComponent } from "react";
import Card from "../Card";
import classes from "./JobCard.module.css";

const CardFront: FunctionComponent<{}> = () => {
  return (
    <Card className={`${classes["card"]} ${classes["front"]}`}>
      <div className="card-body d-flex justify-content-center align-items-center">
        <p className="card-text fs-5 fw-bold">Job card front</p>
      </div>
    </Card>
  );
};

export default CardFront;
