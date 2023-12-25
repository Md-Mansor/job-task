import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className=" p-10">
            <h1 className="text-center font-semibold  text-5xl">
                Seize the Day: Transform Your To-Do List into Achievements with Our Powerful Task Management Platform!
            </h1>
            <p className="text-center py-5"><Link to="/dashboard/create" className="btn btn-wide btn-accent">Let's Explore</Link></p>
        </div>
    );
};

export default Banner;