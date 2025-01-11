import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <Link className={styles.nav_logo} href="/">
        Live <span>150</span>
      </Link>
      <button className="  ">
        <Link href="/">Download For Free</Link>
      </button>
    </nav>
  );
}
