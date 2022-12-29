import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthState } from '../context/AuthProvider';
const Header = () => {
    const { user, setLoading, logOut } = AuthState();


    const navigate = useNavigate();

    //sign out 
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className="px-12 py-2 bg-white shadow-lg shadow-gray-100">

            <nav class="p-3 border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" class="flex items-center">

                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TaskTracker</span>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg ">
                        <ul class="flex items-center flex-col mt-4 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            {
                                user?.email ?
                                    (
                                        <>
                                            <li>
                                                <Link to="/addTask" class="block py-2 pl-3 pr-4 text-dark bg-blue-700 rounded md:bg-transparent md:text-dark md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Add Task</Link>
                                            </li>
                                            <li>
                                                <Link to="/myTasks" class="block py-2 pl-3 pr-4 text-dark bg-blue-700 rounded md:bg-transparent md:text-dark md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">My Tasks</Link>
                                            </li>
                                            <li>
                                                <Link to="/completedTasks" class="block py-2 pl-3 pr-4 text-dark bg-dark rounded md:bg-transparent md:text-dark md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Completed Tasks</Link>
                                            </li>
                                            <li>
                                                <Link to="/media" class="block py-2 pl-3 pr-4 text-dark bg-dark rounded md:bg-transparent md:text-dark md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Media</Link>
                                            </li>

                                            <li>
                                                <button className="py-3 px-9 bg-rose-500 text-white hover:bg-teal-700 hover:text-white rounded-full"
                                                    onClick={handleSignOut}
                                                >Log Out</button>
                                            </li>

                                        </>
                                    ) :
                                    (
                                        <>
                                            <li>
                                                <Link to="/signUp" class="block py-2 pl-3 pr-4 text-dark bg-blue-700 rounded md:bg-transparent md:text-dark md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Sign Up</Link>
                                            </li>

                                            <li>
                                                <Link to="/login" >

                                                    <button className="py-3 px-9 bg-rose-500 text-white hover:bg-teal-700 hover:text-white rounded-full">Login</button>
                                                </Link>
                                            </li>

                                        </>
                                    )
                            }

                            <li>
                                <label className="swap swap-rotate">


                                    <input type="checkbox" className='hidden' />


                                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav >


        </div >
    )
}

export default Header
