import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Home = () => {
  return (
    <>
      <motion.section
        className="home-page"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item}>
          Olá! Eu sou <strong>Guilherme Aguiar</strong>!
        </motion.h1>
        <motion.h1 variants={item}>
          Sou desenvolvedor front end, jardineiro amador e entusiasta de novas
          tecnologias.
        </motion.h1>
        <motion.h1 variants={item}>
          Atualmente, estou criando soluções criativas na{' '}
          <strong>ModalGR</strong>.
        </motion.h1>
      </motion.section>
    </>
  );
};

export default Home;
