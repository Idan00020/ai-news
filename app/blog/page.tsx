"use client";
import React, { useState } from "react";
import styles from "./Blog.module.css";
import Image from "next/image";
import PageIntro from "../PageIntro";

const blogPosts = [
	{
		id: 1,
		title: "How AI is Transforming the World",
		preview: "Explore the latest breakthroughs in artificial intelligence and how they’re reshaping industries, society, and our daily lives.",
		image: "/globe.svg",
		link: "#",
	},
	{
		id: 2,
		title: "The Future of Generative Models",
		preview: "Dive into the world of generative AI, from text to images and beyond. What’s next for creative machines?",
		image: "/file.svg",
		link: "#",
	},
	{
		id: 3,
		title: "Ethics in AI: Challenges & Solutions",
		preview: "A look at the ethical dilemmas facing AI development and how the tech community is responding.",
		image: "/window.svg",
		link: "#",
	},
];

export default function Blog() {
	const [search, setSearch] = useState("");
	const filteredPosts = blogPosts.filter(
		(post) =>
			post.title.toLowerCase().includes(search.toLowerCase()) ||
			post.preview.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<PageIntro
				title="AI Blog"
				description="Explore the latest news, trends, and insights in artificial intelligence. Discover how AI is transforming the world, and stay up to date with the most important stories."
			/>
			<main className={styles.main}>
				<h1 className={styles.title} style={{ display: "none" }}>
					AI Blog
				</h1>
				<input
					className={styles.search}
					type="text"
					placeholder="Search articles..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<section className={styles.feed}>
					{filteredPosts.map((post) => (
						<article key={post.id} className={styles.card}>
							<Image
								src={post.image}
								alt={post.title}
								width={64}
								height={64}
								className={styles.cardImg}
							/>
							<div className={styles.cardContent}>
								<h2>{post.title}</h2>
								<p>{post.preview}</p>
								<a href={post.link} className={styles.readMore}>
									Read More →
								</a>
							</div>
						</article>
					))}
					{filteredPosts.length === 0 && (
						<p className={styles.noResults}>No articles found.</p>
					)}
				</section>
			</main>
		</>
	);
}
