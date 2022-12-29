import React from 'react'
import { AuthState } from '../../context/AuthProvider';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiCommentAdd } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CompletedTasks = () => {
    const { user } = AuthState();
    const navigate = useNavigate();
    //retrieve all the task list
    const { data: completedTasks = [], refetch } = useQuery({
        queryKey: ['completedTasks'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/tasks?userEmail=${user?.email}`);

                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (err) {
                console.log(err)
            }
        }
    });

    // console.log(completedTasks);
    // const filteredCompletedTasks = completedTasks.filter((task) => task.isCompleted === true);
    // console.log(filteredCompletedTasks);

    const handleNotComplete = (taskItem) => {
        fetch(`http://localhost:5000/tasks/notCompleted/${taskItem._id}`, {
            method: "PUT"
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Task is added to the My task successfully");

                    //navigate the user after completing the task
                    navigate('/myTasks');

                }
                refetch();

            })
            .catch(err => console.log(err))
    }

    //delete an item 

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
                                My Completed Tasks List
                            </h2>
                            <div className=" w-24 h-1 m-0 mx-auto my-4 bg-rose-500"></div>
                        </div>

                        <ul className="py-10">
                            {
                                completedTasks?.map((task) => {
                                    if (task.isCompleted === true) {
                                        return <li className='flex items-center justify-between py-3 px-5 shadow-lg shadow-gray-100 bg-gray-100 border rounded-lg mb-5' key={task._id}>
                                            <div className="">
                                                {/* <input type="checkbox" defaultChecked='' /> */}
                                                <button className="py-2 px-9 bg-rose-500 text-white hover:bg-teal-700 hover:text-white rounded-full"
                                                    onClick={() => handleNotComplete(task)}
                                                > Not Completed</button>
                                                <span className="text-lg text-dark inline-block font-normal ml-4">
                                                    {task.title}
                                                </span>
                                            </div>
                                            <div className="">

                                                <button className="text-2xl text-rose-600 m-4"
                                                    onClick={() => handleDelete(task)}
                                                >
                                                    <RiDeleteBinLine />

                                                </button>
                                                <Link to={`/completedTasks/${task._id}`}>
                                                    <div data-tip="Click to add a comment" class="tooltip">
                                                        <button className="text-2xl text-teal-700 ">
                                                            <BiCommentAdd />
                                                        </button>
                                                    </div>


                                                </Link>
                                            </div>
                                        </li>;

                                    } else {
                                        return;
                                    }
                                }

                                )
                            }

                        </ul>
                    </div>
                </div>
            </section >
        </main>

    )
}

export default CompletedTasks
