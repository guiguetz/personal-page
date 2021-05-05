import React from 'react';
import styles from './style.module.scss';

const Navbar = ({ children, ...props }) => {
  return (
    <div className={styles['navbar']} {...props}>
      {children}
    </div>
  );
};

export default Navbar;
