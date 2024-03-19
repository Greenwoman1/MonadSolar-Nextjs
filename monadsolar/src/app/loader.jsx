import { ClockLoader } from "react-spinners";
import styles from "./home.module.css";

export default function Loading() {
  return (
    <div className={styles.loader_overlay}>
      <div className={styles.loader_container}>
      <ClockLoader color="#36d7b7" speedMultiplier={2} margin={4} size={40} />
      </div>
    </div>
  );
};
