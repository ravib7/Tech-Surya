import React from "react";
import robot from "./assets/images/ai.jpg";
import globe from "./assets/images/earth.jpg";

export default function Branches() {
    return (
        <div>
            <div className="block lg:hidden">
                <div className="relative flex flex-col items-center bg-white overflow-hidden px-4 py-16">
                    <h2 className="text-5xl font-extrabold tracking-wide text-gray-900 text-center w-full mb-5">
                        BRAN<span className="text-blue-500">CHES</span>
                    </h2>


                    <div className="flex justify-center items-center mt-6">
                        <img
                            src={globe}
                            alt="Earth Globe"
                            className="w-[200px] md:w-[300px] rounded-full drop-shadow-2xl animate-smoothRotateZoom"
                        />
                    </div>


                    <div className="flex justify-center items-center mt-6">
                        <img
                            src={robot}
                            alt="Robot"
                            className="w-52 md:w-[320px] drop-shadow-2xl"
                        />
                    </div>


                    <div className="mt-6 w-full max-w-md">
                        {[
                            "Chhatrapati Sambhajinagar",
                            "Nashik",
                            "Pune",
                        ].map((branch, index) => (
                            <div
                                key={index}
                                className="bg-white p-3 border-2 border-purple-400 font-semibold rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 shadow-sm text-center"
                                style={{ minHeight: 56 }}
                            >
                                {branch}
                            </div>
                        ))}
                    </div>


                    <style>
                        {`
              @keyframes smoothRotateZoom {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.60); }
                100% { transform: rotate(360deg) scale(1); }
              }
              .animate-smoothRotateZoom {
                animation: smoothRotateZoom 40s ease-in-out infinite;
                transform-origin: center;
              }
            `}
                    </style>
                </div>
            </div>

            <div className="hidden lg:block">
                <div className="relative flex flex-col ml-20 bg-white overflow-hidden">
                    <h2 className="text-5xl font-extrabold tracking-wide text-gray-900">
                        BRAN<span className="text-blue-500">CHES</span>
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32">

                        <div className="relative mr-80 ">
                            <img
                                src={robot}
                                alt="Robot"
                                className="w-52 md:w-[400px] mr-20 drop-shadow-2xl"
                            />

                            <div className="absolute left-full top-16 md:top-28 space-y-16">
                                {[
                                    "Chhatrapati Sambhajinagar",
                                    "Nashik",
                                    "Pune",
                                ].map((branch, index) => (
                                    <div key={index} className="flex items-center mr-40 relative">
                                        <svg
                                            width="300"
                                            height="80"
                                            viewBox="0 0 400 120"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute -left-28"
                                        >
                                            <defs>
                                                <linearGradient id={`blueGradient${index}`} x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#00A3FF" />
                                                    <stop offset="1" stopColor="#0047FF" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M10 100 H220 V50 H360"
                                                stroke={`url(#blueGradient${index})`}
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                            />
                                        </svg>

                                        <div className="absolute top-[19px] left-[140px] w-4 h-4 bg-[#007BFF] border-[1.5px] border-orange-400 rounded-full shadow-sm"></div>

                                        <div className="bg-white ml-44 p-4 w-full h-18  border-2 border-purple-400 font-semibold flex items-center pl-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl ">
                                            {branch}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <img
                                src={globe}
                                alt="Earth Globe"
                                className="w-[200px] md:w-[420px] rounded-full drop-shadow-2xl animate-smoothRotateZoom"
                            />
                        </div>

                        <style>
                            {`
                @keyframes smoothRotateZoom {
                  0% {
                    transform: rotate(0deg) scale(1);
                  }
                  50% {
                    transform: rotate(180deg) scale(1.60);
                  }
                  100% {
                    transform: rotate(360deg) scale(1);
                  }
                }
                .animate-smoothRotateZoom {
                  animation: smoothRotateZoom 40s ease-in-out infinite;
                  transform-origin: center;
                }
              `}
                        </style>

                    </div>
                </div>
            </div>
        </div>
    );
}
