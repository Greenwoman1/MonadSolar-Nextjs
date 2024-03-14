import styles from "./AboutUs.module.css";

import Header from "@/components/header/page";
import AboutUsComponent from "@/components/AboutUsComponent/AboutUs";

export const metadata = {
  title: "About us",
  description: "Our history",
};

const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
        <Header src={"./about-us-cover.jpg"} title={"About us"} />
      </div>
      <AboutUsComponent />
    </>
  );
};

export default AboutUs;
