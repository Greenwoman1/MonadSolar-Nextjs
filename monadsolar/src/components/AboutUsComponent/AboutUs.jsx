"use client"
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import styles from "./AboutUs.module.css";
import { useMediaQuery } from "@react-hook/media-query";






const AboutUsComponent = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      
      <div className="layout">
        <ParallaxProvider>
          <div className="middle">
            <section id="about_sec" > 
            <div className={styles.o_nama_main}>
              <div className={styles.column}>
                {isMobile ? (
                  <img src="./history.jpg" alt="Your Image" className={styles.image} />
                ) : (
                  <Parallax speed={-5}>
                    <img src="./history.jpg" alt="Your Image" className={styles.image} />
                  </Parallax>
                )}
              </div>
              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>OUR HISTORY</h1>
                  <p>
                    Canadian Solar (NASDAQ: CSIQ) was founded in 2001 and made
                    its debut on the NASDAQ in 2006. Over the past two decades,
                    Canadian Solar has become a global leader in solar energy
                    and energy storage solutions. We have also ventured into the
                    development of large-scale solar power plants and battery
                    storage projects worldwide. As of the end of June, our
                    presence spans across more than 30 countries, with a
                    dedicated workforce exceeding 20,000 employees.
                  </p>
                  <p>
                    Canadian Solar holds a majority ownership stake of 62.24% in
                    CSI Solar Ltd, which conducted its initial public offering
                    on the Shanghai Stock Exchange in June 2023. CSI Solar
                    encompasses solar module and battery storage manufacturing,
                    as well as the provision of comprehensive system solutions,
                    including inverters, solar system kits, and EPC services.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.o_nama_main}>
              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>Environmental, Social and Governance (ESG)</h1>
                  <br />
                  <h4>2022 SUSTAINABILITY REPORT</h4>
                  <p>
                    We revamped our sustainability strategy and prepared our
                    Sustainability Report in line with the global standards,
                    namely SASB (Sustainability Accounting Standards Board),
                    TCFD (Task Force on Climate-Related Financial Disclosures)
                    and GRI (Global Reporting Initiative).
                  </p>
                  <p>
                    Canadian Solar holds a majority ownership stake of 62.24% in
                    CSI Solar Ltd, which conducted its initial public offering
                    on the Shanghai Stock Exchange in June 2023. CSI Solar
                    encompasses solar module and battery storage manufacturing,
                    as well as the provision of comprehensive system solutions,
                    including inverters, solar system kits, and EPC services.
                  </p>
                </div>
              </div>
              <div className={styles.column}>
                {isMobile ? (
                  <img
                    src="./enviroment.jpg"
                    alt="Your Image"
                    className={styles.image}
                  />
                ) : (
                  <Parallax speed={-9}>
                    <img
                      src="./enviroment.jpg"
                      alt="Your Image"
                      className={styles.image}
                    />{" "}
                  </Parallax>
                )}
                ;
              </div>
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
                      <li>
                        Top Bankable Manufacturer Rated by Bloomberg New Energy
                        Finance (BNEF) in 2022
                      </li>

                      <li>
                        Tier 1 Solar Company by Bloomberg New Energy 2017-2022
                      </li>
                      <li>Leading company in PHOTON PV TRIATHALON 2017</li>
                      <li>
                        No. 1 Module Supplier for Quality and Performance/Price
                        Ratio in IHS Module Customer Insight Survey in 2016
                      </li>
                      <li>
                        The Best PV Module Manufacturer Award in Brazil by Smart
                        Energy 2016
                      </li>
                      <li>
                        No. 1 Silicon module solar plant developer by Greentech
                        Media Research in 2017
                      </li>
                      <li>
                        Best Structured Project Bond Award by Environmental
                        Finance 2017
                      </li>
                      <li>
                        TWO DEAL OF THE YEAR AWARDS FROM POWER FINANCE & RISK in
                        2018
                      </li>
                      <li>
                        Intersolar North America 2012 Solar Project Award
                        Finalist
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxProvider>
      </div>
    </>
  );
};

export default AboutUsComponent;
