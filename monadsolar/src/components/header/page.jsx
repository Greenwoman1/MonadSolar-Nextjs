import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import Link from "next/link";

const Header = ({ src, title }) => {
  const bannerImageStyle = () => {
    if (title === "Products") {
      return {
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),
          url(${src})`,
      };
    } else if (title === "About us") {
      return {
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
          ),
          url(${src})`,
      };
    } else if (title === "Contact Us") {
      return {
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
          ),
          url(${src})`,
      };
    } else {
      return {
        backgroundImage: `linear-gradient(
            rgba(0, 162, 255, 0.5),
            rgba(255, 255, 255, 0.6)
          ),
          url(${src})`,
      };
    }
  };

  return (
    <div className={styles.header}>
      <Suspense>
        <div className={styles.banner_image} style={bannerImageStyle()}>
          <div className={styles.banner_text}>
            {title === "" ? (
              <>
                <h1>
                  <span style={{ color: "yellow" }}>M</span>onad
                  <span style={{ color: "yellow" }}>S</span>olar
                </h1>

                <p>Powering the Future with Solar Energy</p>
              </>
            ) : (
              <>
                <h1>{title}</h1>
              </>
            )}
          </div>
          <Link
            href={`#${
              title === "Contact Us"
                ? "contact_sec"
                : title === "Products"
                ? "products_sec"
                : title === "About us"
                ? "about_sec"
                : title === ""
                ? "sec1"
                : ""
            }`}
            className={styles.banner_button}
          >
            <FontAwesomeIcon icon={faChevronDown} />{" "}
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default Header;
