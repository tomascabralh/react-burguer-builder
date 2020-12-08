import React from 'react'
import styles from './Layout.module.css'
import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer'

const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <SideDrawer />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout;