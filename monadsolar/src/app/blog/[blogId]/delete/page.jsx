import React from "react";
import styles from "./delete.module.css"
import Link from "next/link";
const DeleteBlog = async ({ params }) => {
  const editId = parseInt(params.blogId);

  const response = await fetch(`http://localhost:3001/blogs/${editId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("Blog successfully deleted.");
  } else {
    console.error("Failed to delete blog.");
  }
  return (
    <div className={styles.centered}>
        <div className={styles.message}>
          <p>Blog successfully deleted.</p>
          <p>
            Return to <Link href="/">homepage</Link>.
          </p>
        </div>
    </div>
  );
};

export default DeleteBlog;
