import { Suspense } from "react";
import styles from "./Blog.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";

const Blogs = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page || 1);

  const data = await fetch(`http://localhost:3001/blogs?page=${page}`, {
    cache: "no-store",
  })
    .then((response) => response.json())
    .then(({ data }) => data);

  return (
    <>
      <div className={styles.blog_cards_wrapper}>
        <div className={styles.blog_cards_grid}>
          {" "}
          {data.map((card, index) => (
            <Suspense key={index} fallback={<div className={styles.loading_block}></div>}>
            <BlogCard
              key={index}
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              date={card.date}
            />
          </Suspense>

          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
