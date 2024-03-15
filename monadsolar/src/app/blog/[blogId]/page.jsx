"use client";

import React, { useEffect } from "react";
import styles from "./SingleBlog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { blogData } from "@/data/BlogData";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SingleBlog = ({ params }) => {
  const router = useRouter();
  const idParams = parseInt(params.blogId);
  const blog = blogData.find((blog) => blog.id === idParams);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  const { title, description, date, image, id } = blog;

  const formattedDate = new Date(date)
    .toLocaleDateString("en-GB")
    .split("/")
    .join(".");

  const handleDelete = () => {
    const existingBlogIndex = blogData.findIndex(
      (blog) => blog.id === idParams
    );
    if (existingBlogIndex !== -1) {
      blogData.splice(existingBlogIndex, 1);
    }

    router.push("/blog");
  };

  return (
    <>
      <div className="layout">
        <div className="middle">
          <div className={styles.single_blog_wrapper}>
            <div className={styles.single_blog_container}>
              <div className={styles.title_container}>
                <h1 className={styles.title}>{title}</h1>
              </div>

              <div className={styles.date_container}>{formattedDate}</div>

              <div className={styles.edit_container}>
                <Link href={`/blog/${idParams}/edit`}>
                  <i className={styles.edit_icon}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </i>
                </Link>

                <Link  href={`/blog/${idParams}/delete`}>
                  <i className={styles.edit_icon + " " + styles.delete_icon}>
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                </Link>
              </div>

              <div className={styles.image_container}>
                <img className={styles.img} src={image} alt="" />
              </div>

              <div
                className={styles.description_container}
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
