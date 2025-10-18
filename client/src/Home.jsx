import React from "react";
import robot from "./assets/images/ai.jpg";
import CircleLayout from "./CircleLayout";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center items-center px-6 md:px-12 py-12">

            <div className="hidden lg:grid grid-cols-3 gap-8 w-full max-w-7xl relative">
                <div className="flex flex-col items-start justify-start mt-0">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Empowering{" "}
                        <span className="text-blue-500">
                            Futures <span className="text-gray-900">Through Technology</span>
                        </span>
                    </h1>

                    <button className="btn w-40 rounded-full text-white bg-gradient-to-r from-[#00DDFF] to-[#FFC8C8] shadow-md mb-10">
                        Enroll Now
                    </button>


                    <div className="bg-white shadow-md rounded-xl rounded-br-none border px-4 py-3 mt-16">
                        <p className="font-medium text-gray-700">
                            Get <span className="text-blue-500 font-semibold">Certified</span>, Get <br />
                            Skilled, Get <span className="text-orange-500 font-semibold">Hired</span>
                        </p>
                    </div>
                </div>


                <div className="flex justify-center items-center">
                    <div className="w-[450px] aspect-square">
                        <CircleLayout />
                    </div>
                </div>


                <div className="flex flex-col justify-start items-center relative mt-5">
                    <div className="bg-white shadow-md rounded-xl rounded-br-none border px-4 py-3 mb-4">
                        <p className="font-medium text-gray-700 leading-snug">
                            Build Real world <br /> Projects from{" "}
                            <span className="text-orange-500 font-semibold">Day One</span>
                        </p>
                    </div>

                    <img src={robot} alt="AI Robot" className="w-40 md:w-48" />

                    <p className="text-gray-700 leading-relaxed max-w-sm text-left mt-4">
                        Master the most in-demand skills in Full Stack Development, AI & ML, Python,
                        Data Analysis and more with hands-on, industry-focused training.
                    </p>
                </div>
            </div>


            <div className="lg:hidden w-full flex flex-col items-center text-center space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                    Empowering{" "}
                    <span className="text-blue-500">
                        Futures <span className="text-gray-900">Through Technology</span>
                    </span>
                </h1>

                <button className="btn w-40 rounded-full text-white bg-gradient-to-r from-[#00DDFF] to-[#FFC8C8] shadow-md">
                    Enroll Now
                </button>

                <div className="flex justify-center">
                    <div className="w-72 md:w-96 aspect-square mt-10">
                        <CircleLayout />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <img src={robot} alt="AI Robot" className="w-36 md:w-48 mt-6" />
                    <p className="text-gray-700 leading-relaxed max-w-md mt-4">
                        Master the most in-demand skills in Full Stack Development, AI & ML, Python,
                        Data Analysis and more with hands-on, industry-focused training.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
