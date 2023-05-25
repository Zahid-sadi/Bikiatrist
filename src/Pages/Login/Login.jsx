import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { authContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {

    const {signIn}= useContext(authContext)
    
    const loginHandler = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.target.value;
        const password = form.target.value;

        form.reset()

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .then(error =>console.log(error));
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">please login so that you can explore</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={loginHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="login" />
                        </div>
                    </form>
                    <p className='text-center font-semibold'>Do You want To SignUp <Link className=" text-orange-500 font-bold" to='/SignUp'>SignUp</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
