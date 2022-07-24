import React from 'react'
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="../obavijesti.html">
        Obavijesti
      </a>

      <a className="menu-item" href="https://www.cistoca.hr/info-centar/najcesca-pitanja-gradjana-41/kako-ispravno-odvajati-otpad/1489">
        Edukacija
      </a>

    </Menu>
  );
};