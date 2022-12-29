import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';

const Login = () => {

    //get auth data
    const { login, user, setLoading, googleSignIn } = AuthState();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/addTask';

    //display the error
    const [error, setError] = useState('');

    //submit login form
    const handleLogin = (data) => {

        console.log(data.email, data.password);
        login(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                alert("you are logged in successfully");
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
                setError(err.message);
            }
            )
            .finally(() => {
                setLoading(false);

            })


    }

    //handle google sign in
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
                alert('User logged in successfully');
                navigate('/addTask');
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <main>
            <section className=" login_section  py-14 bg-gray-100 ">
                <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>

                    <div className=' form_wrapper bg-white px-10 py-8 w-full mx-auto lg:max-w-lg rounded'>

                        <h2 className="text-3xl font-semibold text-dark  mb-6 text-center">Login Now!</h2>
                        <h3 className="text-red-600 text-xl pb-3">{error}</h3>
                        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4 text-left">
                            <div className="mb-1">
                                <label for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.email ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`}
                                    placeholder="Your email"
                                    {...register("email", {
                                        required: "Email is required",


                                    })}
                                />
                                {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                            </div>
                            <div className="mb-1">
                                <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className={`bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.password ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Your password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },

                                    })}
                                />
                                {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                            </div>



                            <button className='bg-rose-500 hover:bg-teal-700 text-white py-2 rounded-lg text-lg' type="submit" >
                                Login
                            </button>
                        </form>
                        <div className="flex justify-between items-center py-6">
                            <span className="text-sm text-dark font-normal ">Not signed up yet?</span><span className="text-dark text-sm font-normal"> <Link to="/signUp" className='underline'>Sign Up here</Link></span>
                        </div>

                        <span className="text-xl font-medium my-6 text-dark">Or</span>
                        <div className="text-center">
                            <button
                                type="button"
                                className="text-rose-500  bg-white border-2 border-rose-500 hover:bg-rose-500 hover:border-rose-500 focus:ring-4 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-10 px-6 py-2.5 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                                onClick={handleGoogleLogin}
                            >
                                <div className="flex items-center">
                                    <span className="text-xl inline-block "><AiOutlineGoogle />
                                    </span>
                                    <span className='text-sm font-sm ml-2 inline-block'>Continue with Google</span>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Login
