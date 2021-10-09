import React from 'react'
import { Link } from 'react-router-dom'
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
    return (
        <div>
            <ul>
                {links.map((items,index) =>
                    <li key={index}>
                        <Link to={items.to}>{items.text}</Link>
                    </li>
                )}

            </ul>
        </div>
    )
}

export default Nav
