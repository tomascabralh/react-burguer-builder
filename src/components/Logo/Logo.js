import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png'
import styles from '../Logo/Logo.module.css'

const logo = (props) => (
    <div className={styles.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="My burger">
        </img>
    </div>
)



export default logo;