//links com react-router para definicao de rotas dinamicas pelo app

import React from "react";
import "./Navbar.css";

/* uso de rotas por meio de links dinâmicos sendo carregados a partir da base de dados */
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-a">
        {" "}
        {/*  <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>{" "} */}
        <NavLink
          to="/"
       /*    className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")} */
        >
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        {/* os links descritos direcionam para as devidas URLs */}
      </div>
    </nav>
  );
};

export default Navbar;
