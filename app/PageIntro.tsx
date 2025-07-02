import React from "react";
import styles from "./PageIntro.module.css";

interface PageIntroProps {
  title: string;
  description: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ title, description }) => (
  <section className={styles.intro}>
    <h1>{title}</h1>
    <p>{description}</p>
  </section>
);

export default PageIntro;
