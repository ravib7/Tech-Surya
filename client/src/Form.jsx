import React from 'react'
import aiImage from './assets/images/ai.jpg'

export default function Form() {
    return (
        <div className="max-w-full mx-auto px-2">
            <div className="relative text-center mt-28">
                <div className="hidden lg:block">
                    <div className="absolute -top-12 left-[10%] rotate-[-15deg]">
                        <div className="bg-orange-500 text-white px-5 py-3 rounded-full font-semibold text-sm shadow-md relative">
                            Data Analytics
                            <div
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 
                                border-l-[6px] border-r-[6px] border-t-[8px] 
                                border-l-transparent border-r-transparent border-t-orange-500"
                            ></div>
                        </div>
                    </div>


                    <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                        <div className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md relative">
                            Full Stack
                            <div
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 
                                border-l-[6px] border-r-[6px] border-t-[8px] 
                                border-l-transparent border-r-transparent border-t-blue-500"
                            ></div>
                        </div>
                    </div>


                    <div className="absolute -top-12 right-[10%] rotate-[15deg]">
                        <div className="bg-orange-500 text-white px-5 py-3 rounded-full font-semibold text-sm shadow-md relative">
                            AI/ML Learning
                            <div
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 
                                border-l-[6px] border-r-[6px] border-t-[8px] 
                                border-l-transparent border-r-transparent border-t-orange-500"
                            ></div>
                        </div>
                    </div>
                </div>


                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug mt-0 lg:mt-40">
                    The future belongs to those<br />
                    who create it <span className="text-blue-500">start </span>
                    <span className="text-gray-400 font-semibold">
                        building <br /> yours with every line of code.
                    </span>
                </h1>
            </div>


            <div className="bg-[#0187FD2B] my-20 rounded-[3rem] px-5 md:px-5 mx-10">

                <div className="overflow-hidden w-full">
                    <div className="flex animate-marquee whitespace-nowrap pt-8 px-10">
                        <p className="text-3xl md:text-5xl lg:text-7xl text-blue-600 font-bold mr-16">
                            BUILD IT. TO THE WORLD OF TECHNOLOGY IS WAITING FOR YOU
                        </p>
                        <p className="text-3xl md:text-5xl lg:text-7xl text-blue-600 font-bold">
                            BUILD IT. TO THE WORLD OF TECHNOLOGY IS WAITING FOR YOU
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-6 items-center p-6">

                    <div className="col-span-12 md:col-span-4 flex justify-center">
                        <img src={aiImage} alt="AI" className="w-56 md:w-72 h-auto object-contain" />
                    </div>


                    <div className="col-span-12 md:col-span-8 bg-white p-6 md:p-8 rounded-3xl shadow-md">
                        <div className="space-y-5">

                            <div className="flex flex-wrap gap-4">
                                <input
                                    type="text"
                                    className="flex-1 min-w-[45%] h-12 pl-3 rounded-full border border-blue-400 bg-white"
                                    placeholder="Name*"
                                />
                                <input
                                    type="text"
                                    className="flex-1 min-w-[45%] h-12 pl-3 rounded-full border border-gray-400 bg-white"
                                    placeholder="Email*"
                                />
                            </div>


                            <div className="flex flex-wrap gap-4">
                                <input
                                    type="text"
                                    className="flex-1 min-w-[45%] h-12 pl-3 rounded-full border border-gray-400 bg-white"
                                    placeholder="Contact No*"
                                />
                                <input
                                    type="text"
                                    className="flex-1 min-w-[45%] h-12 pl-3 rounded-full border border-gray-400 bg-white"
                                    placeholder="Select Course*"
                                />
                            </div>


                            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
                                <textarea
                                    className="flex-1 min-w-full md:min-w-[60%] h-36 pl-3 pt-4 rounded-3xl border border-gray-400 bg-white"
                                    placeholder="Message*"
                                />
                                <div className="md:w-44">
                                    <button className="w-full h-12 rounded-full border bg-blue-600 text-white font-bold border-gray-400 hover:bg-blue-700 transition">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
