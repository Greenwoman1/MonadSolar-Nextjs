"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logoImage from "../../../public/logo-no-background.png"

const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchBlogs = (searchTerm) => {
    const filteredBlogs = blogData.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredBlogs);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    if (term == "") {
      setSearchTerm("");

      setSearchResults([]);
    } else {
      setSearchTerm(term);
      searchBlogs(term);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isScreenMinimized = window.innerWidth <= 1300;
      setIsMinimized(isScreenMinimized);
      setShowSearchInput(false);
      setShowLinks(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(user == "user");
  }, []);

  const handleMagnifierClick = () => {
    setShowSearchInput(!showSearchInput);
    setShowLinks(false);
  };

  const handleBarsClick = () => {
    setShowLinks(!showLinks);
    setShowSearchInput(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSubmit = () => {
    localStorage.setItem("user", "user");
    setShowLoginModal(false);
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="layout">
        <div className="middle">
          <div className={styles.navbar_container}>
            <div className={styles.logo_container}>
              <Link href="/">
                <Image
                  className={styles.logo}
                  src={logoImage}
                  alt="logo"
                  objectFit="cover" // Adjust how the image fits its container
                  objectPosition="center"
                />
              </Link>
            </div>

            {isMinimized ? null : (
              <div className={styles.nav_links_container}>
                <Link className={styles.nav_link} href="/">
                  HOME
                </Link>
                <Link className={styles.nav_link} href="/about-us">
                  ABOUT US
                </Link>
                <Link className={styles.nav_link} href="/products">
                  PRODUCTS
                </Link> 
                <Link className={styles.nav_link} href="/blog">
                  BLOG
                </Link>
                <Link className={styles.nav_link} href="/contact">
                  CONTACT
                </Link>
                {isLoggedIn && (
                  <Link className={styles.nav_link} href="/account">
                    ACCOUNT
                  </Link>
                )}
              </div>
            )}

            {isMinimized ? (
              <div className={styles.menu_search_minimized_container}>
                <button
                  className={styles.minimized_icon_btn}
                  onClick={handleBarsClick}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>

                <button
                  className={styles.minimized_icon_btn}
                  onClick={handleMagnifierClick}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

                {isLoggedIn ? (
                  <button
                    className={styles.minimized_icon_btn}
                    onClick={handleLogoutClick}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </button>
                ) : (
                  <button
                    className={styles.minimized_icon_btn}
                    onClick={handleLoginClick}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className={styles.search_container}>
                  <input
                    type="text"
                    placeholder="Search..."
                    className={styles.search_input}
                    value={searchTerm}
                    onChange={handleSearch}
                  />

                  {isLoggedIn ? (
                    <button
                      className={styles.minimized_icon_btn}
                      onClick={handleLogoutClick}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                  ) : (
                    <button
                      className={styles.minimized_icon_btn}
                      onClick={handleLoginClick}
                    >
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
          {isMinimized && showLinks && (
            <div className={styles.nav_links_container_toggle}>
              <Link className={styles.nav_link} href="/">
                HOME
              </Link>
              <Link className={styles.nav_link} href="/about-us">
                ABOUT US
              </Link>
              <Link className={styles.nav_link} href="/products">
                PRODUCTS
              </Link> 
              <Link className={styles.nav_link} href="/blog">
                BLOG
              </Link>
              <Link className={styles.nav_link} href="/contact">
                CONTACT
              </Link>
              {isLoggedIn && (
                <Link className={styles.nav_link} href="/acc">
                  ACCOUNT
                </Link>
              )}
            </div>
          )}
          {isMinimized && showSearchInput && (
            <div className={styles.search_container_toggle}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.search_input + " " + styles.search_input_min}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          )}

          {showLoginModal && (
            <div className={styles.login_modal}>
              <form onSubmit={handleLoginSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
              <button onClick={() => setShowLoginModal(false)}>Close</button>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className={styles.search_results}>
              <ul>
                {searchResults.map((blog) => (
                  <Link to={`/blog/${blog.id}`}>
                    <li key={blog.id}>{blog.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
