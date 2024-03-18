import { Suspense } from "react";
import styles from "./Blog.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";

const Blogs = async ({data}) => {

  return (
    <>
      <div className={styles.blog_cards_wrapper}>
        <div className={styles.blog_cards_grid}>
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
