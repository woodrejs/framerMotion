import React from "react";
import "../../scss/Pages/home.scss";
import GlitchClip from "react-glitch-effect/core/Clip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const titleVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.1,
        delay: 0.6,
      },
    },
  };
  const txtVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.4,
        delay: 0.7,
      },
    },
  };
  const btnVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.7,
      },
    },
  };

  return (
    <section className="home">
      <motion.header
        className="home__header"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <GlitchClip
          component="h1"
          duration="10s"
          className="home__header__title"
        >
          mniej znaczy więcej
        </GlitchClip>
      </motion.header>

      <GlitchClip component="div" duration="3s" className="home__hero">
        <img
          className="home__hero__img"
          src={require("../../../assets/images/neon.jpg")}
          alt="hero_img"
        />
      </GlitchClip>

      <motion.div
        className="home__btnBox"
        variants={btnVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <button className="home__btnBox__btn">
          <Link className="home__btnBox__link" to="/oferta">
            oferta
          </Link>
        </button>
      </motion.div>

      <article className="home__info">
        <motion.p
          className="home__info__txt home__info__txt--left "
          variants={txtVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          It is a long established fact that a reader will be distracted by the.
        </motion.p>

        <hr className="home__info__line" />
        <motion.p
          className="home__info__txt home__info__txt--right "
          variants={txtVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          It is a long established fact that a reader will be distracted by the.
        </motion.p>
      </article>
    </section>
  );
};

export default Home;
