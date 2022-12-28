import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';

const SignUp = () => {
    const { user, createUser, updateUserProfile, setLoading } = AuthState();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    //submit the sign up form
    const handleSignUp = (data) => {
        console.log(data.name, data.email, data.password);
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                alert("You are signed up successfully");
                handleUpdateUser(data.name);
                navigate('/addTask');
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            })

        //update user profile

        const handleUpdateUser = (name) => {
            const profile = {
                displayName: name
            };

            updateUserProfile(profile)
                .then(() => {

                })
                .catch(err => console.log(err))
        }
    }



    return (
        <section className=" register_section  py-14 bg-gray-50">
            <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>
                <div className=' form_wrapper bg-white pt-9 pb-7 px-10  w-full mx-auto lg:max-w-lg rounded shadow-lg shadow-gray-100'>
                    <h2 className="text-3xl font-semibold text-dark mb-6  text-center">Sign Up Now!</h2>
                    <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-4 text-left">


                        <div className="mb-1">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>

                            <input
                                type="text"

                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.name ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Your name"
                                {...register("name", {
                                    required: "Name is required",


                                })}


                            />
                            {errors.name && <p className='text-red-500 mt-1'>{errors.name.message}</p>}
                        </div>
                        <div className="mb-1">
                            <label for="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.email ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`}
                                placeholder="Your email"
                                {...register("email", {
                                    required: "Email is required",


                                })}
                            />
                            {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-1">
                            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                id="password"
                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.password ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })}
                            />
                            {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                        </div>
                        <button className="text-white py-2 rounded-lg text-lg  bg-rose-500 hover:bg-teal-700" type="submit">
                            Register
                        </button>
                    </form>
                    <div className="flex justify-between items-center py-6">
                        <span className="text-normal text-dark font-normal ">Have an Account?</span><span className="text-dark text-normal font-normal"> <Link to="/login" className='underline'>Login here</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
