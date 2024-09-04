import React from 'react';
import styles from './item.module.css';

const JustifyAlignExample = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>justify-content & align-items</h1>
      </header>

      <section className={styles.section}>
        <h2>justify-content: center</h2>
        <div className={styles.justifyCenter}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>align-items: center</h2>
        <div className={styles.alignCenter}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>justify-content: space-between & align-items: center</h2>
        <div className={styles.justifyBetweenAlignCenter}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>justify-content: center & align-items: center</h2>
        <div className={styles.justifyCenterAlignCenter}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>justify-content: space-around</h2>
        <div className={styles.justifyAround}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>justify-content: space-evenly</h2>
        <div className={styles.justifyEvenly}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
          <div className={styles.box}>Box 3</div>
        </div>
      </section>

      {/* Eixo principal de direção definidido no proprio item */}
      <section className={styles.section}>
        <h2>align-self: flex-start, center, and flex-end</h2>
        <div className={styles.alignSelfContainer}>
          <div className={`${styles.box} ${styles.alignSelfStart}`}>Box 1</div>
          <div className={`${styles.box} ${styles.alignSelfCenter}`}>Box 2</div>
          <div className={`${styles.box} ${styles.alignSelfEnd}`}>Box 3</div>
        </div>
      </section>

    </div>

    
  );
};

export default JustifyAlignExample;
