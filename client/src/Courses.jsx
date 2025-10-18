import { motion } from "framer-motion";
import squareImage from "./assets/images/square.jpg";
import squareImage1 from "./assets/images/square1.jpg";

export default function Courses() {
    return (

        <div className="flex flex-col lg:flex-row justify-around bg-white px-12">
            <div className="w-full flex flex-col items-center lg:hidden">
                <div className="flex flex-row justify-center gap-6">
                    <div className="w-40 h-40 md:w-64 md:h-64">
                        <motion.img
                            src={squareImage}
                            alt="Rotating"
                            className="w-full h-full rounded-full"
                            animate={{ rotate: [0, 360, 0] }}
                            transition={{ duration: 80, ease: "linear", repeat: Infinity }}
                        />
                    </div>

                    <div className="w-40 h-40 md:w-64 md:h-64">
                        <motion.img
                            src={squareImage1}
                            alt="Rotating"
                            className="w-full h-full"
                            animate={{ rotate: [0, 360, 0] }}
                            transition={{ duration: 80, ease: "linear", repeat: Infinity }}
                        />
                    </div>
                </div>


                <div className="mt-6 px-6 text-center">
                    <p className="text-5xl titillium-web-bold">
                        C<span className="text-blue-500">OUR</span>SES
                    </p>

                    <p className="text-base text-[#393E44] leading-[1.8rem] mt-3 max-w-xl mx-auto">
                        Master the technologies shaping the future. <br />
                        Every course is crafted to help you learn, build,
                        and succeed through real-world projects,
                        expert mentoring, and interactive 3D learning experiences.
                    </p>

                    <div className="mt-4">
                        <button className="btn w-40 rounded-full text-white bg-gradient-to-r from-[#00DDFF] to-[#FFC8C8] shadow-md">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>


            <div className="hidden lg:flex lg:justify-around lg:w-full">
                <div>
                    <div className="flex items-center w-full mb-1">
                        <div className="w-80 h-full">
                            <motion.img
                                src={squareImage}
                                alt="Rotating"
                                className="w-full h-full rounded-full"
                                animate={{ rotate: [0, 360, 0] }}
                                transition={{ duration: 80, ease: "linear", repeat: Infinity }}
                            />
                        </div>

                        <div className="bg-white border w-32 h-14 pl-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl ml-6 flex shadow-lg">
                            <span className="font-semibold">
                                <span className="text-orange-400">Data</span> <br />
                                <span className="text-black">Analytics</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between ml-10 items-center -mt-36">
                        <div className="bg-white border w-40 h-16 pl-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex items-center shadow-lg">
                            <span className="font-semibold">
                                <span className="text-black">Full Stack</span> <br />
                                <span className="text-orange-500">Development</span>
                            </span>
                        </div>

                        <div className="w-80 h-full -mt-24 ml-20 ">
                            <motion.img
                                src={squareImage1}
                                alt="Rotating"
                                className="w-full h-full "
                                animate={{ rotate: [0, 360, 0] }}
                                transition={{ duration: 80, ease: "linear", repeat: Infinity }}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <p className="text-5xl mt-12 titillium-web-bold">
                        C<span className="text-blue-500">OUR</span>SES
                    </p>

                    <p className="text-xl text-[#393E44] leading-[2rem] ml-20 mt-10">
                        Master the technologies shaping the future. <br />
                        Every course is crafted to help you learn, build,<br />
                        and succeed through real-world projects, <br />
                        expert mentoring, and interactive 3D <br />
                        learning experiences.
                    </p>

                    <div className="mt-12 ml-24">
                        <button className="btn w-40 rounded-full text-white bg-gradient-to-r from-[#00DDFF] to-[#FFC8C8] shadow-md">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
