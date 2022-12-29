import React from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';
import { getSingleCompletedTask } from '../../util/api';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useQuery } from '@tanstack/react-query';

const CompletedTaskComment = () => {
    const { _id, title } = useLoaderData();

    const { user } = AuthState();
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();

    const handleComment = (data) => {
        console.log(data.comment);

        const comment = {
            commentId: _id,
            userName: user?.displayName,
            commentTitle: title,
            text: data.comment,
            commentDate: new Date()
        }
        console.log(comment)

        //insert the comment data
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Your comment is added successfully");
                }
                //reset the comment field
                resetField("comment")
            })
            .catch(err => console.log(err))

    }

    //fetch all the comment data
    const { data: comments = [], refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/comments/?commentId=${_id}`);
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (err) {
                console.log(err)
            }
        }
    });
    return (
        <main>
            <section className=" login_section py-14  lg:py-20 bg-gray-100 ">
                <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>

                    <div className=' form_wrapper bg-white px-10 py-8 w-full mx-auto lg:max-w-2xl rounded'>

                        <h2 className="text-2xl md:text-3xl font-medium text-dark  mb-6 text-center">Leave a comment for {title}!</h2>

                        <form onSubmit={handleSubmit(handleComment)} className="flex flex-col gap-4 text-left">
                            <div className="mb-1">
                                <label for="title"
                                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300">Add a Comment</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a comment here..."
                                    {...register("comment", {
                                        required: "Comment is required",

                                    })}
                                ></textarea>
                                {errors.comment && <p className='text-red-500 mt-1'>{errors.comment.message}</p>}
                            </div>




                            <button className='bg-rose-500 hover:bg-teal-700 text-white py-2 rounded-lg text-lg' type="submit" >
                                Update
                            </button>
                        </form>

                    </div>
                </div>
            </section>

            <section className=" login_section py-14  lg:py-20  bg-white">
                <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>
                    <div className='   px-10  w-full mx-auto lg:max-w-4xl rounded'>
                        <div className="relative mb-9">
                            <h2 className="text-medium text-dark text-2xl lg:text-3xl ">
                                All comments here
                            </h2>
                            <div className=" w-24 h-1 m-0 mx-auto my-4 bg-rose-500"></div>
                        </div>
                        <ul>
                            {
                                comments?.map((comment) => (
                                    <li className='flex items-center justify-between mt-3 mb-6 p-6 border-b border-gray-200'>
                                        <div className="ml-1 text-left">
                                            <h3 className="text-lg text-dark font-medium mb-2">{comment.userName}</h3>
                                            <p className="text-base text-dark font-normal pr-20">
                                                {comment.text}
                                            </p>
                                        </div>
                                        <div className="flex items-center">

                                            <button className="text-xl text-teal-700 m-4"

                                            >
                                                <FiEdit />
                                            </button>


                                            <button
                                                className="text-2xl text-rose-600 "
                                            // onClick={() => handleDelete(task)}
                                            >
                                                <RiDeleteBinLine />
                                            </button>
                                        </div>

                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

//create loader data for the param
export const loader = ({ params }) => {
    const uId = params.comTaskId;
    return getSingleCompletedTask(uId);
}

export default CompletedTaskComment
