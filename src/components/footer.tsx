import React from "react";
import styles from "../styles/Footer.module.css"

export default function Footer(){

    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.container}>
                    {renderFooter()}
                </div>

            </div>
        </div>
       
    )
    
       
}

const renderFooter = () => {
    return (
        <div>
           Footer doido
        </div>
    )
}