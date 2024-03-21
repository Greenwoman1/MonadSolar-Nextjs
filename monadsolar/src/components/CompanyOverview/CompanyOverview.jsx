import Image from "next/image";
import styles from "./Overview.module.css";

import dynamic from "next/dynamic";
const WithTranslation = dynamic(
  () => import("../../app/_HOC/WithTranslation"),
  { ssr: false }
);

const CompanyOverview = ({ t, language, changeLanguage }) => {
  console.log(t)
  const companyOverview = t.companyOverview;
  return (
    <div className={styles.main}>
      <h1>{companyOverview.title}</h1>
      <ul className={styles.overviewMain}>
        <li>
          <Image alt="desc" width={50} height={50} src="/shipment.png" />
          <p>{companyOverview.shipments}</p>
          <p>{companyOverview.batteryShipments}</p>
        </li>
        <li>
          <Image alt="desc" width={50} height={50} src="/modulcapa.png" />
          <p>{companyOverview.moduleCapacity}</p>
          <p>{companyOverview.batteryCapacity}</p>
        </li>
        <li>
          <Image alt="desc" width={50} height={50} src="/pipeline.png" />
          <p>{companyOverview.projectPipeline}</p>
          <p>{companyOverview.energyProjectPipeline}</p>
        </li>
        <li>
          <Image alt="desc" width={50} height={50} src="/customers.png" />
          <p>{companyOverview.activeCustomers}</p>
          <p>{companyOverview.customerCountries}</p>
        </li>
        <li>
          <Image alt="desc" width={50} height={50} src="/countries.png" />
          <p>{companyOverview.subsidiaries}</p>
          <p>{companyOverview.subsidiaryRegions}</p>
        </li>
        <li>
          <Image alt="desc" width={50} height={50} src="/facilities.png" />
          <p>{companyOverview.manufacturingFacilities}</p>
          <p>{companyOverview.facilityLocations}</p>
        </li>
      </ul>
    </div>
  );
};

export default WithTranslation(CompanyOverview, "companyOverview");
