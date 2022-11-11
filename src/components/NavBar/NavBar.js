import Container from "../Container/Container";
import styles from "./NavBar.module.scss"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.navigation}>
                    {/* <a to="/"><i className="fa fa-tasks" /></a> */}
                    <Link to="/"><i className="fa fa-tasks" /></Link>
                    <ul>
                        {/* <li><Link to="/">Home</Link></li>
                        <li><Link to="/favorite">Favorite</Link></li>
                        <li><Link to="/about">About</Link></li> */}

                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default NavBar;