import React, { Component } from 'react'
import styles from './Layout.module.css'
import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer'
import { render } from '@testing-library/react'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }


    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Auxiliary >
        )
    }
}

export default Layout;