import React from 'react'
import Nav from './Nav'
import Title from './Title'

const Mainpage = ({ children }) => {
    return (
        <div>
            <Title title={"MoviesApp"} subtitle={"Looking for movie here it is"}/>
            <Nav/>
            {children}
        </div>
    )
}

export default Mainpage
