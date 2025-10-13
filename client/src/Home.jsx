import React from "react";
import robot from "./assets/images/ai.jpg";
import CircleLayout from "./CircleLayout";

const Home = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center items-center px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl h-full">


                <div className="flex flex-col justify-start items-start space-y-6 relative">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Empowering{" "}
                        <span className="text-[#0088FF]">
                            Futures <span className="text-gray-800">Through Technology</span>
                        </span>
                    </h1>


                    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF7500] to-[#FFC05A] inline-block">
                        <button className="btn w-40 rounded-full text-white bg-gradient-to-r from-[#00DDFF] to-[#FFC8C8] border-none">
                            Enroll Now
                        </button>
                    </div>


                    <p className="absolute bottom-5 bg-white shadow-md rounded-xl rounded-br-none font-medium border px-4 py-3 text-gray-600">
                        Get <span className="text-[#0088FF] font-semibold">Certified</span>, Get <br /> Skilled,
                        Get <span className="text-[#FF7500] font-semibold">Hired</span>
                    </p>
                </div>


                <div className="flex justify-center items-center">
                    <div className="w-[450px] aspect-square">
                        <CircleLayout />
                    </div>
                </div>


                <div className="flex flex-col justify-end items-center relative">
                    <p className="absolute top-2 bg-white shadow-md rounded-xl rounded-br-none font-medium border px-4 py-2 leading-snug text-gray-600 text-left">
                        Build Real world <br /> Projects from <br />{" "}
                        <span className="text-[#FF7500] font-semibold">Day One</span>
                    </p>

                    <img src={robot} alt="AI Robot" className="w-40 md:w-48 mt-8" />

                    <p className="text-gray-700 leading-relaxed max-w-sm text-left mt-4">
                        Master the most in-demand skills in Full Stack Development, AI & ML, Python,
                        Data Analysis and more with hands-on, industry-focused training.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Home;



