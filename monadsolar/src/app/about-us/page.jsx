import styles from "./AboutUs.module.css";
import Header from "@/components/header/page";
import RemoveParallax from "./RemoveParallax";
import aboutContent from "./aboutContent.json";

export const metadata = {
  title: "About us",
  description: "Our history"
};

const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
        <Header src={"./about-us-cover.jpg"} title={"About us"} />
      </div>
      <div className="layout">
        <div className="middle">
          <section id="about_sec">
            <div className={styles.o_nama_main}>
              <RemoveParallax props={"first"}></RemoveParallax>
              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>OUR HISTORY</h1>
                  <p>{aboutContent.history}</p>
                </div>
              </div>
            </div>
           <div className={styles.o_nama_main}>
              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>Environmental, Social and Governance (ESG)</h1>
                  <br />
                  <h4>2022 SUSTAINABILITY REPORT</h4>
                  <p>{aboutContent.sustainability}</p>
                </div>
              </div>
              <RemoveParallax props={"second"}></RemoveParallax>
            </div>
          </section>
        </div>
          <div className="thirdRow-all-columns">
          <div className={styles.fullImageContainer}>
            <div className={styles.overlay}></div>
            <div className="layout">
              <div className="middle">
                <div className={styles.textOverlay}>
                  <h1>AWARDS</h1>
                  <ul>
                        {aboutContent.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
