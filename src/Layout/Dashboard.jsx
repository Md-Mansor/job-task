import { Outlet } from "react-router-dom";
import DashBar from "../DashBar/DashBar";


const Dashboard = () => {
    return (
        <div className="flex">
            <DashBar></DashBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;