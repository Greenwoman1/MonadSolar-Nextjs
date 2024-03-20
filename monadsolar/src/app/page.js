import styles from "./home.module.css";

import SwiperComponent from "../components/SwiperComponent/BlogSwiper";
import "./globals.css";
import ServiceOffer from "@/components/service-offer/service-offer";
import { Suspense } from "react";
import HeroSegment from "../components/HeroSegment/page";
const Home = () => {
  return (
    <div className="layout">
      <div className="firstRow-all-columns">
        <div className={styles.container}>
          <div className="banner_image">
            <HeroSegment src="./header-cover.jpg">
              <div className="banner_text">
                <h1>
                  <span style={{ color: "yellow" }}>M</span>onad
                  <span style={{ color: "yellow" }}>S</span>olar
                </h1>

                <p>Powering the Future with Solar Energy</p>
              </div>
            </HeroSegment>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className={styles.home}>
          <ServiceOffer />
          <div style={{ width: "100%", height: "400px" }}>
            <Suspense>
              <SwiperComponent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
