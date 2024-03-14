import Header from "@/components/header/page";
import styles from "./home.module.css";
import SwiperComponent from "@/components/SwiperComponent/page";
import "./globals.css"
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
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
