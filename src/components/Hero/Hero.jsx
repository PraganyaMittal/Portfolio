import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Praganya Mittal</h1>
        <p className={styles.description}>
        Motivated Bachelor of Computer Science student at Lovely Professional University (LPU). Proficient in various programming languages and passionate about problem-solving and innovative technology. Demonstrates excellent teamwork and communication skills, eager to apply academic knowledge in real-world projects and internships. Committed to continuous learning and professional growth in the tech industry.
        </p>
        <a href="mailto:praganyamittal04@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
