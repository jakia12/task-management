import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { getSingleTask } from '../../util/api'

const UpdateTask = () => {
    const { title, _id } = useLoaderData();
    const navigate = useNavigate();

    // const useState();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;

        //task object to be updated
        const task = {
            title: name
        };

        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Your task is updated successfully");
                }
                navigate('/myTasks');
            })
            .catch(err => console.log(err))

    }
    return (
        <main>
            <section className=" login_section py-14  lg:py-20 bg-gray-100 ">
                <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>

                    <div className=' form_wrapper bg-white px-10 py-8 w-full mx-auto lg:max-w-lg rounded'>

                        <h2 className="text-3xl font-semibold text-dark  mb-6 text-center">Update Your Task!</h2>

                        <form onSubmit={handleUpdate} className="flex flex-col gap-4 text-left">
                            <div className="mb-1">
                                <label for="title"
                                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300">Task Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="name"
                                    className='bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
                                    defaultValue={title}
                                    required

                                />

                            </div>




                            <button className='bg-rose-500 hover:bg-teal-700 text-white py-2 rounded-lg text-lg' type="submit" >
                                Update
                            </button>
                        </form>

                    </div>
                </div>
            </section>
        </main>

    )
}

export const loader = ({ params }) => {
    const uId = params.taskId;
    return getSingleTask(uId);
}
export default UpdateTask
