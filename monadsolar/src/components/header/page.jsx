
"use client"
import styles from "./header.module.css";

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
        <a
          href={`#${title === "Contact Us" ? "contact_sec" : title === "Products" ? "products_sec" : title === "About us" ? "about_sec" : title === "" ? "sec1" : ""}`}
          className={styles.banner_button}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
