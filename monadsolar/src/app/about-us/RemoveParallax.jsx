"use client"
import enviroment from "/public/enviroment.jpg"
import historyimg from "/public/history.jpg"
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import styles from "./AboutUs.module.css";

const RemoveParallax = ({ props }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.column}>
      <ParallaxProvider>
        {props === "first" ? (
          isMobile ? (
            <Image src={historyimg} alt="Your Image" width={650} height={450}  className={styles.image} />
          ) : (
            <Parallax speed={-5}>
              <Image src={historyimg} alt="Your Image" width={650} height={450} className={styles.image} />
            </Parallax>
          )
        ) : props === "second" ? (
          isMobile ? (
            <Image src={enviroment} alt="Your Image"  className={styles.image} />
          ) : (
            <Parallax speed={-9}>
              <Image src={enviroment} alt="Your Image" width={650} height={450} className={styles.image} />
            </Parallax>
          )
        ) : null}
      </ParallaxProvider>
    </div>
  );
};

export default RemoveParallax;
