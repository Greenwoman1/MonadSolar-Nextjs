import styles from "./hero.module.css";

const HeroSegment = ({ src, children }) => {
  const bannerImageStyle = () => {
    return {
      backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)           
          ),
          url(${src})`,
    };
  };

  return (
    <div className={styles.header}>
      <div className={styles.banner_image} style={bannerImageStyle()}>
        <div className={styles.banner_text}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroSegment;
