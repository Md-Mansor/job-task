import { NavLink } from "react-router-dom";


const DashBar = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center uppercase m-5">Dashboard</h1>
            <ul className="menu p-3 text-lg font-semibold">
                <li>
                    <NavLink to='/dashboard/profile'>
                        My Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/create'>
                        Create Task
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/tasks'>
                        All Tasks
                    </NavLink>
                </li>
            </ul>
            <h1 className="divider divider-info">Web Interface</h1>
            <ul className="menu p-3 text-lg font-semibold">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default DashBar;