import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <><header>
            <ul>
                <li>
                    <Link to="/">Головна</Link>
                </li>
                <li>
                    <Link to="/categories">Категорії</Link>
                </li>
                <li>
                    <Link to="/lots">Лоти</Link>
                </li>
            </ul>
        </header>
            <Outlet/>


        </>

    )
}

export default Layout