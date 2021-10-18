import React, { FunctionComponent } from "react";
import classes from "./Button.module.css";

type buttonProp = {
    type: "button" | "submit" | "reset" | undefined;
    disabled : boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button : FunctionComponent<buttonProp> = (props)=>{
    return (
    <button 
        className= {`${classes.button} ${props.disabled? classes.disabled : ''}`}
        type = {props.type || 'button'}
        onClick={props.onClick}
        disabled = {props.disabled}
    >
        {props.children}
    </button>);
};

export default Button;