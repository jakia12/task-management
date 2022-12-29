import React, { useState } from 'react'

const UpdateModal = ({ taskData, setTaskData }) => {

    const [title, setTitle] = useState();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-xl">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-2xl text-center py-3 font-semibold"> Update Your Task {taskData.title}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                        <div className="mb-1">

                            <input
                                type="text"
                                //name="title"

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={taskData.title}
                                onChange={handleChange}

                                required

                            />

                        </div>


                        <button className='bg-firstCol text-white hover:bg-secondCol py-2 rounded-lg text-lg' type="submit" >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal
