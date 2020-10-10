import React, { Fragment } from 'react'
import Content from './Content'
import MUIDrawer from './Drawer'

const Home = () => {
    return (
        <Fragment>
            <MUIDrawer />
            <Content />
        </Fragment>
    )
}

export default Home
