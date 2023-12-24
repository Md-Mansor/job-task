import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import image from "../../Asset/6521996.png"
import { Link } from "react-router-dom";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');


    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setRegisterError('')
        setSuccess('')
        console.log(name, email, password);



        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="lg:flex justify-center items-center h-screen bg-teal-400 ">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="lg:w-1/3 text-center py-5 text-3xl  glass border-4 rounded-md p-5">
                <h1 className="">Register Here</h1>
                <form onSubmit={handelRegister} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-lg">Name:</span>
                        </label>
                        <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                    </div >
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-lg">Email:</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div >
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-lg">Password:</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div >
                    <div className="form-control mt-6">
                        <input className="btn btn-outline btn-success" type="submit" value="Sign Up" />
                    </div>
                    <p>{success}</p>
                    <p>{registerError}</p>
                </form>
                <Link to="/login" className="text-2xl font-medium"><h1>Login</h1></Link>
            </div>
        </div>
    );
};

export default Register;