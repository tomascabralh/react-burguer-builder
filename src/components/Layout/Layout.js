import React from 'react'
import styles from './Layout.module.css'
import Auxiliary from '../../hoc/Auxiliary'

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout;