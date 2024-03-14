
import styles from "./Overview.module.css";


const CompanyOverview = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>COMPANY OVERVIEW</h1>
        <ul className={styles.overviewMain}>
          <li>
            <img src="./shipment.png" />
            <p>Over 110GW solar modules shipments </p>
            <p>Over 3GWh battery storage shipments</p>
          </li>
          <li>
            <img src="./modulcapa.png" />
            <p>Module capacity 61GW</p>
            <p>Battery storage capacity 20GWh </p>
          </li>
          <li>
            <img src="./pipeline.png" />
            <p>26GW project pipeline</p>
            <p>55GWh energy project pipeline</p>
          </li>
          <li>
            <img src="./customers.png" />
            <p>Active buying customers</p>
            <p> in more than 160 countries</p>
          </li>
          <li>
            <img src="./countries.png" />
            <p>Subsidiaries in 23 countries</p>
            <p>& regions on 6 continents</p>
          </li>
          <li>
            <img src="./facilities.png" />
            <p>Over 26 manufacturing facilities</p>
            <p>in Asia & Americas</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CompanyOverview;
