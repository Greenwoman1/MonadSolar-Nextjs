
import ServiceOffer from "../components/service-offer/service-offer";
import styles from "./home.module.css"
const Home = () => {
  return (
    <div className="layout">
      <div className="middle">
        <div className={styles.home}>
          <ServiceOffer />
         
        </div>
      </div>
    </div>
  );
};

export default Home;
