import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Welcome to AI News</h1>
          <p>
            In a world where technology evolves at the speed of thought, AI News is
            your gateway to the future. Our mission: to illuminate the wonders,
            challenges, and breakthroughs of artificial intelligence—empowering you
            to shape tomorrow, today.
          </p>
        </div>
        <div className={styles.heroIcons}>
          <Image
            src="/globe.svg"
            alt="AI Globe"
            width={64}
            height={64}
            className={styles.animatedIcon}
          />
          <Image
            src="/file.svg"
            alt="AI File"
            width={48}
            height={48}
            className={styles.animatedIcon}
          />
          <Image
            src="/window.svg"
            alt="AI Window"
            width={48}
            height={48}
            className={styles.animatedIcon}
          />
        </div>
      </section>
      <section className={styles.introSection}>
        <div className={styles.introCard}>
          <h2>Blog</h2>
          <p>Read the latest insights, trends, and stories in AI.</p>
          <Link href="/blog" className={styles.introBtn}>
            Explore Blog
          </Link>
        </div>
        <div className={styles.introCard}>
          <h2>AI Tools</h2>
          <p>Discover and try cutting-edge AI tools and mini-apps.</p>
          <Link href="/tools" className={styles.introBtn}>
            See Tools
          </Link>
        </div>
        <div className={styles.introCard}>
          <h2>Videos</h2>
          <p>Watch curated videos about AI innovation and impact.</p>
          <Link href="/videos" className={styles.introBtn}>
            Watch Videos
          </Link>
        </div>
        <div className={styles.introCard}>
          <h2>Contact</h2>
          <p>Get in touch, ask questions, or connect with our team.</p>
          <Link href="/contact" className={styles.introBtn}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
