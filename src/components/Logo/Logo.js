import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png'
import styles from '../Logo/Logo.module.css'

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="My burger">
        </img>
    </div>
)



export default logo;