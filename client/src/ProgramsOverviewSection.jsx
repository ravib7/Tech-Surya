import React from 'react';
import ImageOne from "./assets/images/image_one.jpg";
import ImageTwo from "./assets/images/image_two.jpg";
import ImageThree from "./assets/images/image_three.jpg";
import ImageFour from "./assets/images/image_four.jpg";

const images = [
    { src: ImageOne, alt: "Code", top: "top-3", left: "left-10", z: "z-10" },
    { src: ImageTwo, alt: "Analytics", top: "top-16", left: "left-32", z: "z-20" },
    { src: ImageThree, alt: "Apps", top: "top-32", left: "left-60", z: "z-30" },
    { src: ImageFour, alt: "Full Stack", top: "top-48", left: "left-96", z: "z-40" },
];

const ProgramsOverviewSection = () => {
    return (
        <div className=" bg-white px-12 mt-7 mb-24 font-sans relative overflow-hidde">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between">


                <div className="lg:w-1/2 space-y-6 z-10">
                    <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                        MASTER THE ART OF{' '}
                        <span className="text-blue-600">CODING,</span>{' '}
                        <span className="text-blue-500">DESIGNING, AND DEPLOYING</span>{' '}
                        WITH OUR INDUSTRY-DRIVEN PROGRAMS.
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Each Program Is Crafted To Help You Think, Build, And Create Like An Industry Professional. From Full Stack Development To AI & Machine Learning, Every Path Blends Real-World Projects, Interactive Mentorship, And The Latest Tools That Power Innovation Today.
                    </p>
                    <button
                        className="text-white bg-gradient-to-r from-[#00DDFF] to-[#FFC8C8] px-10 py-2 rounded-full shadow-md"
                    >
                        Join Now
                    </button>
                </div>


                <div className="lg:w-1/2 mt-2 lg:mt-0 relative h-[200px] w-full lg:h-[100px]">


                    <div className="hidden lg:block relative h-[600px]">
                        {images.map((img, idx) => (
                            <div key={idx} className={`absolute ${img.top} ${img.left} ${img.z}`}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="rounded-xl shadow-lg w-[250px] h-[170px] object-cover"
                                />
                            </div>
                        ))}
                    </div>


                    <div className="lg:hidden flex flex-row flex-wrap justify-between mt-8 gap-4">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                className="rounded-xl shadow-lg w-[calc(25%-0.75rem)] h-36 object-cover"
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProgramsOverviewSection;
