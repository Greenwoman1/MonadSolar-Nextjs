import React from "react";
import styles from "../products/Products.module.css"
// import prod4 from "../assets/prod4.png";
// import one from "../assets/reliable.png";
// import two from "../assets/p.png";
// import three from "../assets/More-Energy.png";
const SingleProduct = () => {
  return (
    <div className="layout">
      <div className="middle">
        <div className={styles.products_main}>
          <div className={styles.column}>
            <img src="./prod4.png" className={styles.image} />
          </div>

          <div className={styles.columntext}>
            <ul>
              <li className={styles.listed}>
                <img src="./reliable.png" />
                <div>
                  <p>
                    <b>Enhanced reliability</b>
                  </p>
                  <p>
                    Minimize cell micro-crack impacts to module. Snow loads up
                    to 5,400Pa, wind loads up to 2,400Pa
                  </p>
                </div>
              </li>
              <li className={styles.listed}>
                <img src="./p.png" />
                <div>
                  <p>
                    <b>Higher energy yield, lower LCOE</b>
                  </p>
                  <p>
                    Low temperature coefficient (Pmax): -0.29%/℃, more energy in
                    hot climate. About 2.3% lower LCOE than PERC
                  </p>
                </div>
              </li>
              <li className={styles.listed}>
                <img src="./More-Energy.png" />
                <div>
                  <p>
                    <b>Bifacial module up to 715W</b>
                  </p>
                  <p>
                    O210 mm wafer 132/120 dual cell N-type TOPCon technology. Up
                    to 85% power bifaciality, more power from the back side.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
