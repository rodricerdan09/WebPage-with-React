import React, {Fragment} from 'react'
import Navbar from './NavBar'
import Footer from './Footer'

const Layout = (props) => {
    return(
        <Fragment>
            <Navbar />
            {props.children}           
            <Footer />
        </Fragment>
    )
}

export default Layout