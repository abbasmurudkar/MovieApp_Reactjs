import React from 'react'
import { useLocation } from 'react-router'
// import { Link } from 'react-router-dom'
import { LinkStyled, NavList } from './Nav.styled'
const Nav = () => {
    const links = [
        {
            to: "/",
            text: "Home"
        },
        {
            to: "/starred",
            text: "Starred"
        }
    ]
    const location = useLocation()   //it is a react router property which is used to see the pathname of router like first it show / 
    console.log(location)
    return (
        <div>
            <NavList>
                {links.map((items,index) =>
                    <li key={index}>
                        <LinkStyled to={items.to} className={items.to=== location.pathname? 'active':''}>{items.text}</LinkStyled>  {/*it is basically a link we are giving styled to Link */}
                    </li>
                )}

            </NavList>
        </div>
    )
}

export default Nav
