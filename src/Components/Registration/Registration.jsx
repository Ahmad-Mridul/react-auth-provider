import { NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            console.log(result);            
        })
        .catch(error=>{
            console.error(error.message);
        })
    };
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input name="name" type="text" className="input" placeholder="Name" />
                                    <label className="fieldset-label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">SignUp</button>
                            </fieldset>
                        </form>
                        <p>Alredy have an account? <NavLink to="/login">Login</NavLink></p>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;