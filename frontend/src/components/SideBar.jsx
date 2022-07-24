import React from 'react'
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="../obavijesti.html">
        Obavijesti
      </a>

      <a className="menu-item" href="../edukacija.html">
        Edukacija
      </a>

    </Menu>
  );
};