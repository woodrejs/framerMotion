import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/Components/nav.scss";
import { motion } from "framer-motion";
import NavItem from "../NavItem";

const menu = [
  { name: "Strona główna", path: "/", custom: 2 },
  { name: "O mnie", path: "/omnie", custom: 3 },
  { name: "Oferta", path: "/oferta", custom: 4 },
  { name: "Kontakt", path: "/kontakt", custom: 5 },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const navVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      x: "200%",
      transition: {
        when: "afterChildren",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="nav">
      <div class="menu cross menu--1">
        <label onChange={handleClick}>
          <input type="checkbox" checked={open} />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path class="line--2" d="M0 50h70" />
            <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </div>

      <motion.nav
        variants={navVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        className="nav__mask"
      >
        <motion.ul className="nav__list" initial="hidden" animate="visible">
          {menu.map((item) => (
            <NavItem
              click={handleClick}
              isNavOpen={open}
              name={item.name}
              path={item.path}
              custom={item.custom}
            />
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Nav;
