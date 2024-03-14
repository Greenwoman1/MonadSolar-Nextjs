import React from "react";
import styles from "./BlogCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";



const BlogCard = (props) => {
  const router = useRouter()


  const handleMoreNavigation = () => {
    const blogData = {
      title: props.title,
      description: props.description,
      date: props.date,
      image: props.image,
      id: props.id,
    };
    {/*router.push(`/blog/${encodeURIComponent(props.id)}`, { state: { blogData } });*/}
    router.push("/blog/1")
  };

  return (
    <div className={styles.blog_card_container}>
      <div className={styles.blog_card_img_container}>
        <div className={styles.blog_card_img_overlay}>
          <p> {props.title} </p>
        </div>
        <img className={styles.blog_card_img} src={props.image} alt="" />
      </div>

      <div className={styles.description_container}>
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>

      <div className={styles.blog_card_action_date_container}>
        <button onClick={handleMoreNavigation} className={styles.more_btn}>
          {" "}
          MORE <FontAwesomeIcon icon={faAnglesRight} />
        </button>
        <p className={styles.date}> {new Date(props.date).toLocaleDateString("en-GB")} </p>
      </div>
    </div>
  );
};

export default BlogCard;
