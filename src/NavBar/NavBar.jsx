import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


const NavBar = () => {
    const { signOut, user } = useContext(AuthContext);

    const handelSignOut = () => {
        signOut()
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(user);
    return (
        <div className="">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className=" navbar flex justify-around  bg-red-300">
                        <div className="lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="btn btn-wide">
                            <Link to="/about">TO DO </Link >
                        </div>
                        <div className="hidden text-2xl font-bold lg:block">
                            <NavLink to='/' className="px-12">Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                        </div>
                        <div className="">
                            {
                                user ? (
                                    <div>
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="">
                                                <div className="flex flex-col-reverse items-center cursor-pointer gap-1 border-2 rounded-full ">
                                                    {/* <p className="textarea-sm font-semibold">{user?.displayName}</p> */}
                                                    <img src={user?.photoURL} alt="" className="rounded-full w-12 h-12" />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <div className="flex flex-col gap-2">
                                                    <button className="btn btn-outline btn-info" onClick={handelSignOut}>Log Out</button>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                ) :
                                    <div>
                                        <Link to='/login'>Sign In</Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;