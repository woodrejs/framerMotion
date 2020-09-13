import React from "react";
import "../../scss/Pages/about.scss";
import GlitchClip from "react-glitch-effect/core/Clip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const mainNeonVariants = {
    initial: {
      left: "50%",
      x: "-50%",
      top: "60%",
      y: "-60%",
      transition: { duration: 1 },
    },
    animate: {
      left: "65%",
      x: "-65%",
      top: "70%",
      y: "-70%",
      transition: { duration: 1 },
    },
  };
  const imgVariants = {
    initial: { scale: 1, height: "20vh", transition: { duration: 1 } },
    animate: { scale: 1.6, transition: { duration: 1 } },
  };
  const txtVariants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
  };
  const imgTopVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: -400,
      transition: {
        delay: 0.7,
      },
    },
  };
  const imgBotVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 400,
      transition: {
        delay: 0.7,
      },
    },
  };

  return (
    <motion.section className="about">
      <motion.article
        className="about__txtBox"
        variants={txtVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <h2 className="about__txtBox__title">o mnie</h2>
        <p className="about__txtBox__txt">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using It is a long established
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using
        </p>
        <button className="about__btn">
          <Link className="about__btn__link" to="/kontakt">
            kontakt
          </Link>
        </button>
      </motion.article>
      <motion.div
        duration="5s"
        className="about__glitchBox about__glitchBox--mid"
        variants={mainNeonVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <motion.img
          className="about__img"
          src={require("../../../assets/images/neon.jpg")}
          alt="about_img"
          variants={imgVariants}
        />
      </motion.div>
      <GlitchClip
        duration="7s"
        className="about__glitchBox about__glitchBox--bot"
      >
        <motion.img
          variants={imgBotVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="about__img"
          src={require("../../../assets/images/neon_bot.jpg")}
          alt="about_img"
        />
      </GlitchClip>
      <GlitchClip
        duration="9s"
        className="about__glitchBox about__glitchBox--top"
      >
        <motion.img
          className="about__img"
          variants={imgTopVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          src={require("../../../assets/images/neon_top.jpg")}
          alt="about_img"
        />
      </GlitchClip>
    </motion.section>
  );
};

export default About;
