import React, { useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit } from "react-icons/fi";
import { AuthState } from '../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const MyTasks = () => {
    const { user } = AuthState();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    //retrieve all the task list
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ['mytasks'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/tasks?userEmail=${user?.email}`);

                const data = await res.json();
                console.log(data);
                setIsLoading(false);
                return data;

            }
            catch (err) {
                console.log(err)
            }
        }
    });




    //complete the task onclick
    const handleComplete = (taskItem) => {
        fetch(`http://localhost:5000/tasks/completed/${taskItem._id}`, {
            method: "PUT"
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Task is added to the completed task successfully");

                    //navigate the user after completing the task
                    navigate('/completedTasks');

                }
                refetch();

            })
            .catch(err => console.log(err))
    }

    //pass task data to the task updating modal
    const [taskData, setTaskData] = useState(null);

    // const handleModalShow = (task) => {
    //     setTaskData(task);
    // }

    //delete the task
    const handleDelete = (taskItem) => {
        fetch(`http://localhost:5000/tasks/${taskItem._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Task is deleted successfully")
                }
                refetch();

            })

    }


    return (
        <main>
            <section className="py-14">
                <div className="container mx-auto lg:max-w-6xl">
                    <div className="mx-auto md:max-w-3xl px-6">
                        <div className="text-center relative">
                            <h2 className="font-medium text-3xl text-dark">
                                My Tasks List
                            </h2>
                            <div className=" w-24 h-1 m-0 mx-auto my-4 bg-rose-500"></div>
                        </div>

                        <ul className="py-10">
                            {
                                myTasks?.map((task) => {
                                    if (task.isCompleted === true) {
                                        return " ";
                                    } else {
                                        return <li className='flex items-center justify-between py-3 px-5 shadow-lg shadow-gray-100 bg-gray-100 border rounded-lg mb-5' key={task._id}>
                                            <div className="">
                                                {/* <input type="checkbox" defaultChecked='' /> */}
                                                <button className="py-2 px-9 bg-rose-500 text-white hover:bg-teal-700 hover:text-white rounded-full"
                                                    onClick={() => handleComplete(task)}
                                                >Completed</button>
                                                <span className="text-lg text-dark inline-block font-normal ml-4">
                                                    {task.title}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to={`/tasks/${task._id}`}>
                                                    <button className="text-xl text-teal-700 m-4"

                                                    >
                                                        <FiEdit />
                                                    </button>
                                                </Link>

                                                <button
                                                    className="text-2xl text-rose-600 "
                                                    onClick={() => handleDelete(task)}
                                                >
                                                    <RiDeleteBinLine />
                                                </button>
                                            </div>
                                        </li>;
                                    }
                                }

                                )
                            }

                        </ul>

                    </div>
                </div>
            </section>
        </main>

    )
}

export default MyTasks
