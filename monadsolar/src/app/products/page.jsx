"use client";
import React from "react";
import styles from "./Products.module.css";
import Link from "next/link";
import Header from "@/components/header/page";

const Products = () => {


  return (
    <>
      <div className={styles.container}>
        <Header src="./products.jpg" title={"Products"} />
      </div>
      <div className="layout">
        <div className="middle">
          <section id="products_sec">
            {/* ----------------------------------------------- */}
            <div className={styles.products_main}>
              <div className={styles.column}>
                <img src="./product2.png" className={styles.image} />
              </div>

              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    CS7N-TB-AG: 2384 x 1303 x 33 mm Front side power range:
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost
                  </p>
                  <div style={{marginTop: "30px"}}><Link href="/single-product" className={styles.button}>
                    Learn more
                  </Link></div>
                </div>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            <div className={styles.products_main}>
              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    CS7N-TB-AG: 2384 x 1303 x 33 mm Front side power range:
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost
                  </p>
                  <div style={{marginTop: "30px"}}><Link href="/single-product" className={styles.button}>
                    Learn more
                  </Link></div>
                </div>
              </div>
              <div className={styles.column}>
                <img src="./prod23.png" className={styles.image} />
              </div>
            </div>
            {/* ----------------------------------------------- */}
            <div className={styles.products_main}>
              <div className={styles.column}>
                <img src="./prod.png" className={styles.image} />
              </div>
              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    CS7N-TB-AG: 2384 x 1303 x 33 mm Front side power range:
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost
                  </p>
                  <div style={{marginTop: "30px"}}><Link href="/single-product" className={styles.button}>
                    Learn more
                  </Link></div>
                </div>
              </div>
            </div>
            {/* ----------------------------------------------------- */}
            <div className={styles.products_main}>
              <div className={styles.columntext}>
                <div className={styles.text}>
                  <h1>TOPBiHiKu7 </h1>

                  <p>Bifacial N-type TOPCon Module</p>
                  <p>
                    CS7N-TB-AG: 2384 x 1303 x 33 mm Front side power range:
                    685~715 W CS7L-TB-AG: 2172 x 1303 x 33 mm Front side power
                    range: 615~645 W
                  </p>
                  <p>
                    Wafer size 210mm Module efficiency up to 23 % Up to 85%
                    Power Bifaciality Lower LCOE & system cost
                  </p>
                  <div style={{marginTop: "30px"}}><Link href="/single-product" className={styles.button}>
                    Learn more
                  </Link></div>
                  
                </div>
              </div>
              <div className={styles.column}>
                <img src="prod23.png" className={styles.image} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
