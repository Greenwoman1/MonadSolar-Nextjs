import Header from "@/components/header/page";
import styles from "./home.module.css";
import SwiperComponent from "../components/SwiperComponent/BlogSwiper";
import "./globals.css";
import ServiceOffer from "@/components/service-offer/service-offer";
import { Suspense } from "react";
const Home = () => {
  return (
    <div className="layout">
      <div className="firstRow-all-columns">
        <div className={styles.container}>
          <Header src={"./header-cover.jpg"} title={""} />
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
