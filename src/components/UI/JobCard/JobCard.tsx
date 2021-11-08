import { FunctionComponent, useState } from "react";
import cn from "classnames";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import classes from "./JobCard.module.css";

const JobCard: FunctionComponent<{}> = (props) => {
  const [showBack, setShowBack] = useState(false); 

  const myClasses = `${classes.flip_card_inner} ${showBack ? classes.showBack : ''}`;

  function handleClick() {
    setShowBack(!showBack); 
  }


  return (
    <div
      className={classes.flip_card_outer}
      onClick={handleClick} 
    >
      <div
        className={myClasses}
      >
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
};

export default JobCard;
