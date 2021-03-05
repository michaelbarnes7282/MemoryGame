import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <h1>Memory Game Rules</h1>
      <p>
        Click the start button to begin. You will have a few seconds to see the
        cards positions, then try to turn them over in pairs. Once you uncover
        all the cards you win!
      </p>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
