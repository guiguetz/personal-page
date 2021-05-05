import Head from 'next/head';
import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
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

export default class Blog extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <motion.article variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item}>{title}</motion.h1>
          <HomeContent />
          <motion.ul variants={container} initial="hidden" animate="show">
            {cats.map((cat) => (
              <motion.li variants={item}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>
      </>
    );
  }
}
