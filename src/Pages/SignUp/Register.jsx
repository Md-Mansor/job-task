import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    return (
        <div>
            <div>
                <form>

                </form>
            </div>
        </div>
    );
};

export default Register;