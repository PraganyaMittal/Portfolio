import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/arrow.png")} alt="arrow icon" height="40px" width="40px" />
            <div className={styles.aboutItemText}>
              <h3>Secondary</h3>
              <p>
              I graduated from ST. Fidelis Sr. Sec. School, Aligarh, achieving a commendable 93% in my high school examinations, reflecting dedication and academic excellence.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/arrow.png")} alt="arrow icon" height="40px" width="40px" />
            <div className={styles.aboutItemText}>
              <h3>Higher Secondary</h3>
              <p>
              I successfully completed my intermediate education at ST. Fidelis Sr. Sec. School, Aligarh, securing an impressive 86%, a testament to my dedication and academic growth during this pivotal phase.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/arrow.png")} alt="arrow icon" height="40px" width="40px" />
            <div className={styles.aboutItemText}>
              <h3>Graduation</h3>
              <p>
              I'm on track to complete my B.Tech in CSE from LPU by 2026, marking the culmination of my journey in computer science and engineering education.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
