import { NavLink } from "react-router-dom";


const DashBar = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                <li>
                    <NavLink to='/dashboard/profile'>
                        My Profile
                    </NavLink>
                </li>
            </ul>

        </div>
    );
};

export default DashBar;