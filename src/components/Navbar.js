import React from 'react'
import { Link} from 'gatsby'
//import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div>
<nav >
    <ul>
        <li>
            <Link to="/"> HomePage </Link>
        </li>
        <li>
            <Link to="/products/"> Products </Link>
        </li>
        <li>
            <Link to="/examples/"> Examples </Link>
        </li>
        <li>
            <Link to="/images/"> Images </Link>
        </li>
        <li>
            <Link to="/tours/"> Tours </Link>
        </li>
    </ul>
</nav>
        </div>
    )
}

export default Navbar
