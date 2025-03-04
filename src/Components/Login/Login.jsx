import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        loginUser(email,password)
        .then(result=>{
            console.log(result);
            e.target.reset();
            navigate("/");
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;