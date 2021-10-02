import React, { FunctionComponent } from "react";
import classes from "./Button.module.css";

type buttonProp = {
    type: "button" | "submit" | "reset" | undefined;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button : FunctionComponent<buttonProp> = (props)=>{
    return (
    <button 
        className= {classes.button}
        type = {props.type || 'button'}
        onClick={props.onClick}
    >
        {props.children}
    </button>);
};

export default Button;