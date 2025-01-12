import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" w-full flex items-center  fixed top-2 justify-between">
      <div className="  max-w-screen-2xl w-full mx-auto px-6 ">
        <div className={styles.nav_container}>
          <Link className={styles.nav_logo} href="/">
            Live <span>150</span>
          </Link>
          <button className={`${styles.nav_button} border_gradient`}>
            <Link href="/">Download For Free</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
