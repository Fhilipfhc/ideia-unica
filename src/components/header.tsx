import styles from "../styles/Header.module.css"
import Link from "next/link"
import Menu from "../components/menu"
import Footer from "../components/footer"
export default function Header() {
    
    
    return (

            <div className={styles.group_div}>
                <title>AeroFhelps</title>
                <Menu />
                <Footer />
            </div>

    )
}


