import styles from "./home.module.css";
import dynamic from "next/dynamic";

import SwiperComponent from "../../components/SwiperComponent/BlogSwiper";
import "../globals.css";
import ServiceOffer from "@/components/service-offer/service-offer";
import { Suspense } from "react";
import HeroSegment from "@/components/HeroSegment/page";
import img from '/public/header-cover.jpg'


const WithTranslation = dynamic(
  () => import("../../app/_HOC/WithTranslation"),
  { ssr: false }
);

const Home = (props) => {
  return (
    <div className="layout">
      <div className="firstRow-all-columns">
        <div className={styles.container}>
          <div className="banner_image">
            <HeroSegment src={img}>
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

const LoginWithT = WithTranslation(Home, 'home')

export default LoginWithT;