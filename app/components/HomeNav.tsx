import styles from "./HomeNav.module.css"
import Link from "next/link";

export default function HomeNav() {
    return (
        <div className={styles.navLinks}>
            <Link className={styles.link} href="/">Interiors</Link>
            <Link className={styles.link} href="/">Tech</Link>
            <Link className={styles.link} href="/">Homes</Link>
            <Link className={styles.link} href="/">Furniture</Link>
            <Link className={styles.link} href="/">Travels</Link>
        </div>
    )
}
