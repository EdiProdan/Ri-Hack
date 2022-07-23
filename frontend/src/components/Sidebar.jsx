import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Obavijesti
      </a>

      <a className="menu-item" href="/edukacija">
        Edukacija(za sad)
      </a>

    </Menu>
  );
};
