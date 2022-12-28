import React from 'react'
import bannerImg from '../../images/banner-bg.png';

const Home = () => {
    return (
        <section className='w-full bg-gray-800 banner_h'>
            <div className="container lg:max-w-6xl mx-auto px-7">
                <div className="flex items-center middle justify-center flex-wrap md:flex-nowrap">
                    <div className="w-full sm:w-6/12 ">
                        <div className="text-center sm:text-left mr-3">
                            <h2 className="text-white text-3xl font-medium pb-5">
                                Keep your task well-organised
                            </h2>
                            <p className="pb-6 md:pr-8 leading-relaxed text-gray-100 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint.
                            </p>
                            <button className="py-3 px-9 bg-rose-500 text-white hover:bg-teal-700 hover:text-white rounded-full">Sign Up Today</button>
                        </div>


                    </div>
                    <div className="w-full sm:w-6/12 hidden none sm:block">
                        <div className="ml-4">
                            <img src={bannerImg} alt="" className="w-full p-4" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home
