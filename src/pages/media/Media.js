import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { AuthState } from '../../context/AuthProvider'

const Media = () => {
  const { user } = AuthState();
  //retrieve all the task list
  const { data: tasks = [], refetch } = useQuery({
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
  return (
    <main>
      <section className="py-14 lg:py-20">
        <div className="container mx-auto md:max-w-6xl px-8">
          <div className="text-center relative mb-8">
            <h2 className="font-medium text-3xl text-dark">
              Your Tasks preview
            </h2>
            <div className=" w-24 h-1 m-0 mx-auto my-4 bg-rose-500"></div>
          </div>

          <div className="flex  flex-wrap">
            {
              tasks.map((task) => (
                <div className="w-full sm:w-6/12 md:w-4/12">

                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 text-left">
                    <a href="#">
                      <img className="rounded-t-lg w-full" src={task.image} alt="" />
                    </a>
                    <div className="p-5">

                      <h3 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{task.title}</h3>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {task.description.slice(0, 20)}....
                      </p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
              ))
            }

          </div>
        </div>
      </section>
    </main>

  )
}

export default Media
