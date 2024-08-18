'use client'
import logo from "/public/images/logos/logo1.png"
import Image from 'next/image';
import styles from "./Navbar.module.css"
import Link from "next/link";
import { useState } from "react";
import Icons from "./page-components/Icons";

export default function Navbar() {
    const [activeClass, setActiveClass] = useState(false);

    const navClick = () => {
        setActiveClass(!activeClass)
    }

    return (
        <div className={styles.navbar}>
            <nav className={styles.nav}>
                <div className={styles.navLogo}>
                    <Image src={logo} alt="Logo" width={120} placeholder="blur" quality={100} />
                </div>

                <div className={`${styles.navList} ${activeClass && styles.active}`}>
                    <div className={styles.navListLogo}>
                        <Image src={logo} alt="Logo" className=".img" width={200} placeholder="blur" quality={100} />
                    </div>


                    <div className={`${styles.navLinks} ${activeClass && styles.active}`} >
                        <Link className={styles.link} href="/">Home</Link>
                        <Link className={styles.link} href="/">About Us</Link>
                        <Link className={styles.link} href="/">Services</Link>
                        <Link className={styles.link} href="/">Careers</Link>
                        <Link className={styles.navButton} href="/">Download Our Profile</Link>
                    </div>

                    <div className={styles.icons}>
                        <p>Social Media</p>
                        <Icons />
                    </div>
                </div>

                <div onClick={navClick} className={`${styles.hamburger} ${activeClass && styles.active}`} >
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </nav>
        </div>
    )
}
