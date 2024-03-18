import React from "react";
import styles from "./SingleBlog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { blogData } from "@/data/BlogData";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
const SingleBlog = async ({ params }) => {
  const idParams = parseInt(params.blogId);
  if (!idParams) notFound();

  const data = await fetch(`http://localhost:3001/blogs/${idParams}`).then(
    (data) => data.json()
  );
  if (data.message) notFound();

  return (
    <>
      <div className="layout">
        <div className="middle">
          <div className={styles.single_blog_wrapper}>
            <div className={styles.single_blog_container}>
              <div className={styles.title_container}>
                <h1 className={styles.title}>{data.title}</h1>
              </div>

              <div className={styles.date_container}>{data.date}</div>

              <div className={styles.edit_container}>
                <Link href={`/blog/${idParams}/edit`}>
                  <i className={styles.edit_icon}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </i>
                </Link>

                <Link href={`/blog/${idParams}/delete`}>
                  <i className={styles.edit_icon + " " + styles.delete_icon}>
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                </Link>
              </div>

              <div className={styles.image_container}>
                <img
                  className={styles.img}
                  src={data.image}
                  alt=""
                />
              </div>

              <div
                className={styles.description_container}
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
