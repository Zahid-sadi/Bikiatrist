import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    
    const {createUser}= useContext(authContext)

    const SignUpHandler = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()


        createUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch(err =>console.error(err));



    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">please SignUp so that you can explore</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={SignUpHandler} className="card-body gap-5">
                        <div className="form-control ">
                           
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUP" />
                        </div>
                    </form>
                    <p className='text-center font-semibold'>Do You want To SignUp <Link className=" text-orange-500 font-bold" to='/login'>Login</Link></p>
                </div>
            </div>
       
        </div>
    );
};

export default SignUp;