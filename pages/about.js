import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
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

const About = () => {
  return (
    <motion.section
      className="about-page"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item}>Sobre mim</motion.h1>
      <motion.h2 variants={item}>(Uma biografia não autorizada!)</motion.h2>

      <motion.p variants={item}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum
        maximus tellus, sit amet varius turpis. Morbi mauris odio, scelerisque
        vitae leo eget, maximus scelerisque tellus. Cras augue nisi, tempor
        sodales nisi et, pulvinar ultrices dui. Maecenas a auctor ipsum. Sed
        lobortis eros vitae est varius aliquet. Mauris ut leo non turpis
        venenatis rutrum vitae in eros. Nunc dictum mattis facilisis.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas.
      </motion.p>
      <motion.p variants={item}>
        Nam mollis ultrices fringilla. Integer tincidunt eu magna eu lobortis.
        Nulla ac leo interdum, fringilla diam a, aliquet tortor. Mauris
        dignissim augue purus, sit amet sollicitudin neque vulputate sagittis.
        Integer maximus venenatis lobortis. Pellentesque felis nulla, pulvinar
        vitae sapien at, fermentum rutrum arcu. In aliquet maximus quam vitae
        mattis.
      </motion.p>
      <motion.p variants={item}>
        Aenean turpis arcu, convallis in tortor ac, sodales tempor magna.
        Vivamus et nulla dignissim, pellentesque dolor et, auctor diam. Vivamus
        interdum enim eu dictum congue. Sed sodales mauris lacus, et venenatis
        lacus auctor in. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Integer ut augue at nibh dapibus maximus
        vitae at tortor. Nam nec nulla euismod, imperdiet tortor et, malesuada
        tortor.
      </motion.p>
    </motion.section>
  );
};

export default About;
