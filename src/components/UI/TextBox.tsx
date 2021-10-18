import { FunctionComponent, InputHTMLAttributes } from "react";
import classes from "./TextBox.module.css"

interface textboxProp extends InputHTMLAttributes<HTMLInputElement>  {
  name: string;
  label: string;
};

const TextBox : FunctionComponent<textboxProp> = (props) => {
  return (
    <div className={classes.input}>
      {/* <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} value = {props.value} onChange = {props.onChange} /> */}
    </div>
  );
};

export default TextBox;