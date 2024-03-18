import React, { Suspense } from "react";
import styles from "./delete.module.css";
import Link from "next/link";
import { revalidateTag } from "next/cache";
import { deleteBlog } from "@/app/utility";
const DeleteBlog = async ({ params }) => {
  console.log("dosao");
  const blogId = params.blogId;
  console.log(blogId);
 const response = async () => await deleteBlog(blogId);
 
 response()
revalidateTag(['delete/blog'])
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
