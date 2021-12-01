import styles from "../styles/Menu.module.css"
import Link from "next/link"
import wSize from "../util/windowSize"
import React, {useState} from 'react'

export default function menu(){
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
  }
    return (
        <div className={styles.menu_body}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/"><a className={styles.aero}>Aero<span className={styles.fhelps}>Fhelps</span></a></Link>
                </div>
                {wSize().width > 1300 ? renderLinks() : (toggleMenu ? renderLinks() : <></> )}
                <div className={styles.mobile_menu} onClick={toggleNav}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    )
}

const renderLinks = () => {
    return (
        <ul className={styles.nav_list}>
            <li><Link href="/experiencias"><a className={styles.link}>Experiências</a></Link></li>
            <li><Link href="/sobre"><a className={styles.link}>Sobre</a></Link></li>
            <li><Link href="/contato"><a className={styles.link}>Contato</a></Link></li>
        </ul>
    )

}

