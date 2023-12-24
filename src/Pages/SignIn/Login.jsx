import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import image from '../../Asset/login.jpg'


const Login = () => {
    const { logIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const auth = getAuth(app)

    const handelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.massage);
            })
    }

    const handelSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.massage);
            })
    }
    return (
        <div className="lg:flex gap-5 justify-center items-center h-screen bg-teal-400 ">
            <div className="lg:w-1/3">
                <img src={image} alt="" className="rounded" />
            </div>
            <div className="lg:w-1/4  text-center py-5 glass border-4 rounded-md p-5">
                <h1 className="font-semibold text-3xl">Log In Now</h1>
                <form onSubmit={handelSignUp} className="">
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
                        <input className="btn btn-outline btn-success" type="submit" value="Sign In" />
                    </div>
                    {/* <p>{success}</p>
                    <p>{registerError}</p> */}
                </form>
                <div className="flex flex-col gap-1 justify-center  items-center">
                    <p className="">Or Login With</p>
                    <p onClick={handelGoogleLogin} className="btn btn-wide"><FcGoogle />Google</p>
                </div>
                <Link to="/register" className="text-2xl font-medium hover:text-red-600"><h1>Register Now </h1></Link>
            </div>
        </div>
    );
};

export default Login;