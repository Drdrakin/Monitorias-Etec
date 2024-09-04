import React from 'react';
import styles from './flex.module.css';

const ExemploFlex = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>display: flex</h1>
      </header>
      <div className={styles.content}>
        <div className={`${styles.box} ${styles.box1}`}>Box 1</div>
        <div className={`${styles.box} ${styles.box2}`}>Box 2</div>
        <div className={`${styles.box} ${styles.box3}`}>Box 3</div>
      </div>
      <footer className={styles.footer}>Footer Content</footer>
    </div>
  );
};

export default ExemploFlex;

