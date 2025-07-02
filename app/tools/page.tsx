import PageIntro from "../PageIntro";
import styles from "./Tools.module.css";
import Image from "next/image";

const tools = [
  {
    id: 1,
    name: "Chatbot Pro",
    description: "A conversational AI assistant for instant Q&A and brainstorming.",
    icon: "/globe.svg",
    tags: ["Text", "Chat"],
    link: "#",
  },
  {
    id: 2,
    name: "ImageGen AI",
    description: "Generate stunning images from text prompts using advanced AI models.",
    icon: "/file.svg",
    tags: ["Image", "Generator"],
    link: "#",
  },
  {
    id: 3,
    name: "Code Analyzer",
    description: "Analyze and optimize your code with AI-powered suggestions.",
    icon: "/window.svg",
    tags: ["Code", "Analyzer"],
    link: "#",
  },
];

export default function Tools() {
  return (
    <>
      <PageIntro
        title="AI Tools"
        description="Discover and try cutting-edge AI tools and mini-apps. From chatbots to code analyzers, explore the power of artificial intelligence at your fingertips."
      />
      <main className={styles.main}>
        <section className={styles.grid}>
          {tools.map(tool => (
            <div key={tool.id} className={styles.card}>
              <Image src={tool.icon} alt={tool.name} width={56} height={56} className={styles.icon} />
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              <div className={styles.tags}>
                {tool.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={tool.link} className={styles.tryBtn}>Try Now</a>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
