import React from "react";
import styles from "./Services.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import utility from "../../assets/utility.png"
import commercial from "../../assets/Home-page-commercial.png";
import residential from "../../assets/home-page-residential.png";
// import CompanyOverView from "../CompanyOverview/CompanyOverview";
import recurrentenergy from "../../assets/recurrent.png";
import csi from "../../assets/Products-and-Solutions-600-x-331.jpg";

const ServiceOffer = () => {
  const CardWrapper = ({ title, image }) => {
    return (
      <Card className={styles.card} sx={{ maxWidth: 645 }}>
        <CardActionArea>
          <div className={styles.cardMediaWrapper}>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt="green iguana"
             
            />
            <div className={styles.overlay}></div>
            <Typography
              className={styles.centeredTitle}
              gutterBottom
              variant="h4"
              component="div"
            >
              {title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <>
      <section id="sec1">
        <div className={styles.wrap}>
          <div className={styles.uslugeMain}>
            <CardWrapper title="Utility" image={utility} />
            <CardWrapper title="Commercial" image={commercial} />
            <CardWrapper title="Residential" image={residential} />
          </div>
          {/* <CompanyOverView /> */}

          <div className={styles.uslugeMain}>
            <CardWrapper title="CSI Solar" image={csi} />
            <CardWrapper title="Recurrent Energy" image={recurrentenergy} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOffer;
