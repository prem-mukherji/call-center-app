import React, { FunctionComponent, useState } from "react";
import classes from './Header.module.css';

const Header : FunctionComponent<{}> = (props) => {
  return (<div className={`navbar navbar-expand-lg fixed-top navbar-dark bg-primary ${classes.header}`}>
      <h1>Acme Call Center</h1>
  </div>);
}

export default Header;