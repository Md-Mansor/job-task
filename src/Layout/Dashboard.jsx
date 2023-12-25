import { Outlet } from "react-router-dom";
import DashBar from "../DashBar/DashBar";


const Dashboard = () => {
    return (
        <div className="lg:flex">
            <div className="min-h-screen lg:w-64 bg-cyan-950 text-white">
                <DashBar></DashBar>
            </div>
            <div className="lg:w-1/2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;