import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles.scss';

const variants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
};

const spring = {};

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps, router }) {
  return (
    <div className="site-layout">
      <nav className="navbar">
        <ul>
          <motion.li whileHover={{ scale: 1.5 }}>
            <Link href="/">Início</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.5 }}>
            <Link href="/about">Sobre</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.5 }}>
            <Link href="/skills">Habilidades</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.5 }}>
            <Link href="/lab">Lab</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.5 }}>
            <Link href="/blog">Blog</Link>
          </motion.li>
        </ul>
      </nav>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="main"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100,
            staggerChildren: 0.5,
          }}
          key={router.pathname}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
