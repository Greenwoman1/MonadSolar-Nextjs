"use client";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import history_image from "/public/history.jpg";

const RemoveParallax = ({ image }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.column}>
      <ParallaxProvider>
        {image ? (
          isMobile ? (
            <Image src={image} alt="Your Image" className={styles.image} />
          ) : (
            <Parallax speed={image === history_image ? 0 : -5}>
              <Image
                src={image}
                alt="Your Image"
                width={650}
                height={450}
                className={styles.image}
              />
            </Parallax>
          )
        ) : null}
      </ParallaxProvider>
    </div>
  );
};

export default RemoveParallax;
