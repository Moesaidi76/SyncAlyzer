/* @flow */

import "./signin.css";
import * as React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function PortfolioNav(): React.Node {
  return (
    <div className="bg-light shadow-sm nav-scroller">
      <Nav className="nav-portfolio" role="navigation">
        <NavItem>
          <NavLink className="nav-link" exact to="/signin">
            signin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="./signup">
            SignUp
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}