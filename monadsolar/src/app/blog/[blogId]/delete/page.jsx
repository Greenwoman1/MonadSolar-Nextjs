import React, { Suspense } from "react";
import styles from "./delete.module.css"
import Link from "next/link";
const DeleteBlog = async ({ params }) => {
  console.log("dosao")
  const blogId = parseInt(params.blogId);
  console.log(blogId)
  const response = await fetch(`http://localhost:3001/blogs/delete/${blogId}`);
  console.log(response)
  return (
    <div className={styles.centered}>
      <Suspense>
        <div className={styles.message}>
          <p>Blog successfully deleted.</p>
          <p>
            Return to <Link href="/blog">homepage</Link>.
          </p>
        </div>
        </Suspense>
    </div>
  );
};

export default DeleteBlog;
