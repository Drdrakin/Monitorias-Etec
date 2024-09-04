import React from 'react';
import styles from './flex-direction.module.css';

const FlexDirection = () => {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>flex-direction & flex-wrap</h1>
      </header>

      <div className={styles.section}>
        <h2>flex-direction: row</h2>
        <div className={`${styles.content} ${styles.row}`}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>flex-direction: column</h2>
        <div className={`${styles.content} ${styles.column}`}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>flex-wrap: wrap</h2>
        <div className={`${styles.content} ${styles.wrap}`}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
          <div className={styles.box}>Box 4</div>
          <div className={styles.box}>Box 5</div>
          <div className={styles.box}>Box 6</div>
          <div className={styles.box}>Box 8</div>
          <div className={styles.box}>Box 9</div>
        </div>
      </div>

    </div>
  );

};

export default FlexDirection;
