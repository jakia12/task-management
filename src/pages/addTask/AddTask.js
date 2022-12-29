import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';

const AddTask = () => {
    //get the user data 
    const { user } = AuthState();
    const { register, handleSubmit, formState: { errors } } = useForm();

    //navigate user to the my task page after submitting the task
    const navigate = useNavigate();
    //submit the task
    const imgApiKey = process.env.REACT_APP_IMG_API_KEY;


    const handleAddTask = (data) => {
        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                if (imageData.success) {
                    const task = {
                        userName: user?.displayName,
                        userEmail: user?.email,
                        title: data.title,
                        image: imageData.data.url,
                        description: data.description,
                        postDate: new Date()
                    }
                    console.log(task)

                    fetch('http://localhost:5000/tasks', {
                        method: 'POST',
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                alert("your task is added successfully");
                            }
                            navigate('/mytasks');
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))

    }

    // //submit task while pressing the enter key
    // useEffect(() => {
    //     const keyDownHandler = event => {
    //         console.log('User pressed: ', event.key);

    //         if (event.key === 'Enter') {
    //             event.preventDefault();

    //             //  task submit function here
    //             handleAddTask();
    //         }
    //     };

    //     document.addEventListener('keydown', keyDownHandler);

    //     return () => {
    //         document.removeEventListener('keydown', keyDownHandler);
    //     };
    // }, []);

    return (
        <main>
            <section className="lg:py-20 py-14 bg-gray-100">
                <div className="container mx-auto max-w-7xl w-full px-6">
                    <div className="mx-auto md:max-w-xl w-full shadow-lg shadow-gray-100 pt-6 rounded-md pb-8 px-10 bg-white">
                        <h2 className="text-3xl mt-6 mb-4 font-medium text-center text-dark">
                            Add Your Task Here
                        </h2>
                        <form onSubmit={handleSubmit(handleAddTask)} className="flex flex-col gap-4 text-left">


                            <div className="mb-1">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>

                                <input
                                    type="text"

                                    className={`bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.name ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Task title"
                                    {...register("title", {
                                        required: "Task Title is required",


                                    })}


                                />
                                {errors.title && <p className='text-red-500 mt-1'>{errors.title.message}</p>}
                            </div>
                            <div className="mb-1">
                                <label for="image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task Image</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" placeholder=' Upload Task Image for a preview' multiple
                                    {...register("image", {
                                        required: "Task Image is required",


                                    })}
                                />


                                {errors.image && <p className='text-red-500 mt-1'>{errors.image.message}</p>}
                            </div>
                            <div className="mb-1">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>


                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Description here..."
                                    {...register("description", {
                                        required: "Task Description is required",

                                    })}
                                ></textarea>


                                {errors.description && <p className='text-red-500 mt-1'>{errors.description.message}</p>}
                            </div>
                            <button className="text-white py-2 rounded-lg text-lg  bg-rose-500 hover:bg-teal-700" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AddTask
