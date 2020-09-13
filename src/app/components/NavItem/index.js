import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavItem = ({ click, isNavOpen, path, name, custom }) => {
  const itemVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: (i) => ({
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.03,
        delay: i * 0.08,
      },
    }),
  };

  return (
    <motion.li
      className="nav__list__item"
      onClick={click}
      variants={itemVariants}
      animate={isNavOpen ? "visible" : "hidden"}
      custom={custom}
    >
      <Link className="nav__list__link" to={path}>
        {name}
      </Link>
    </motion.li>
  );
};

export default NavItem;
