// import React, { useEffect, useRef, useState } from "react";
// import ImageOne from "./assets/images/gallery_image_one.jpg";
// import ImageTwo from "./assets/images/gallery_image_two.jpg";
// import ImageThree from "./assets/images/gallery_image_three.jpg";
// import ImageFour from "./assets/images/gallery_image_four.jpg";
// import ImageFive from "./assets/images/gallery_image_five.jpg";
// import ImageSix from "./assets/images/gallery_image_six.jpg";
// import ImageSeven from "./assets/images/gallery_image_seven.jpg";
// import ImageEight from "./assets/images/gallery_image_eight.jpg";
// import ImageNine from "./assets/images/gallery_image_nine.jpg";
// import ImageTen from "./assets/images/gallery_image_ten.jpg";
// import ImageEleven from "./assets/images/gallery_image_eleven.jpg";
// import ImageTwelve from "./assets/images/gallery_image_twelve.jpg";
// import ImageThirteen from "./assets/images/gallery_image_thirteen.jpg";
// import ImageFourteen from "./assets/images/gallery_image_fourteen.jpg";
// import ImageFifteen from "./assets/images/gallery_image_fifteen.jpg";

// const uniqueImages = [
//     { src: ImageOne, alt: "Image 1" },
//     { src: ImageTwo, alt: "Image 2" },
//     { src: ImageThree, alt: "Image 3" },
//     { src: ImageFour, alt: "Image 4" },
//     { src: ImageFive, alt: "Image 5" },
//     { src: ImageSix, alt: "Image 6" },
//     { src: ImageSeven, alt: "Image 7" },
//     { src: ImageEight, alt: "Image 8" },
//     { src: ImageNine, alt: "Image 9" },
//     { src: ImageTen, alt: "Image 10" },
//     { src: ImageEleven, alt: "Image 11" },
//     { src: ImageTwelve, alt: "Image 12" },
//     { src: ImageThirteen, alt: "Image 13" },
//     { src: ImageFourteen, alt: "Image 14" },
//     { src: ImageFifteen, alt: "Image 15" },
// ];

// const CommunityGallerySection = () => {
//     const [showHero, setShowHero] = useState(false);
//     const [animateToGrid, setAnimateToGrid] = useState(false);
//     const [showGrid, setShowGrid] = useState(false);
//     const [triggered, setTriggered] = useState(false);
//     const containerRef = useRef(null);
//     const scrollRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !triggered) {
//                         setTriggered(true);
//                         setShowHero(true);

//                         const t1 = setTimeout(() => setAnimateToGrid(true), 1500);
//                         const t2 = setTimeout(() => {
//                             setShowHero(false);
//                             setAnimateToGrid(false);
//                             setShowGrid(true);
//                         }, 3000);

//                         return () => {
//                             clearTimeout(t1);
//                             clearTimeout(t2);
//                         };
//                     }
//                 });
//             },
//             { threshold: 0.25 }
//         );

//         if (containerRef.current) {
//             observer.observe(containerRef.current);
//         }

//         return () => observer.disconnect();
//     }, [triggered]);


//     useEffect(() => {
//         if (!scrollRef.current || !showGrid) return;

//         const scrollContainer = scrollRef.current;
//         let frameId;
//         const speed = 0.5;

//         const step = () => {
//             scrollContainer.scrollLeft += speed;
//             if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//                 scrollContainer.scrollLeft = 0;
//             }
//             frameId = requestAnimationFrame(step);
//         };

//         frameId = requestAnimationFrame(step);
//         return () => cancelAnimationFrame(frameId);
//     }, [showGrid]);

//     const imagesForScroll = [...uniqueImages, ...uniqueImages];

//     return (
//         <div
//             ref={containerRef}
//             className="w-full px-6 py-10 bg-white flex justify-center items-center"
//             style={{ minHeight: 300 }}
//         >
//             {showHero && (
//                 <div className="relative h-[472px] w-full flex justify-center items-center overflow-hidden">
//                     <img
//                         src={uniqueImages[7].src}
//                         alt={uniqueImages[7].alt}
//                         className={`rounded-xl shadow-lg object-cover transition-all duration-1000 ease-in-out ${animateToGrid ? "w-[140px] h-[140px]" : "w-[420px] h-[280px]"
//                             }`}
//                         style={{
//                             position: "absolute",
//                             zIndex: 10,
//                             transform: animateToGrid
//                                 ? "translate(280px, 156px)"
//                                 : "translate(0, 0)",
//                         }}
//                     />
//                 </div>
//             )}

//             {showGrid && (
//                 <div
//                     ref={scrollRef}
//                     className="overflow-hidden w-full"
//                     style={{ height: "472px", whiteSpace: "nowrap" }}
//                 >
//                     <div className="flex" style={{ width: "max-content", gap: "16px" }}>
//                         {imagesForScroll.map((img, idx) => (
//                             <div
//                                 key={idx}
//                                 className="grid"
//                                 style={{
//                                     gridTemplateRows: "repeat(3, 140px)",
//                                     gridAutoFlow: "column",
//                                     gridAutoColumns: "140px",
//                                     gap: "16px",
//                                 }}
//                             >
//                                 {uniqueImages.map((uimg, ui) => (
//                                     <div
//                                         key={`${idx}-${ui}`}
//                                         className="rounded-2xl overflow-hidden"
//                                         style={{ width: "140px", height: "140px" }}
//                                     >
//                                         <img
//                                             src={uimg.src}
//                                             alt={uimg.alt}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CommunityGallerySection;



import React, { useEffect, useRef, useState } from "react";
import ImageOne from "./assets/images/gallery_image_one.jpg";
import ImageTwo from "./assets/images/gallery_image_two.jpg";
import ImageThree from "./assets/images/gallery_image_three.jpg";
import ImageFour from "./assets/images/gallery_image_four.jpg";
import ImageFive from "./assets/images/gallery_image_five.jpg";
import ImageSix from "./assets/images/gallery_image_six.jpg";
import ImageSeven from "./assets/images/gallery_image_seven.jpg";
import ImageEight from "./assets/images/gallery_image_eight.jpg";
import ImageNine from "./assets/images/gallery_image_nine.jpg";
import ImageTen from "./assets/images/gallery_image_ten.jpg";
import ImageEleven from "./assets/images/gallery_image_eleven.jpg";
import ImageTwelve from "./assets/images/gallery_image_twelve.jpg";
import ImageThirteen from "./assets/images/gallery_image_thirteen.jpg";
import ImageFourteen from "./assets/images/gallery_image_fourteen.jpg";
import ImageFifteen from "./assets/images/gallery_image_fifteen.jpg";

const uniqueImages = [
    { src: ImageOne, alt: "Image 1" },
    { src: ImageTwo, alt: "Image 2" },
    { src: ImageThree, alt: "Image 3" },
    { src: ImageFour, alt: "Image 4" },
    { src: ImageFive, alt: "Image 5" },
    { src: ImageSix, alt: "Image 6" },
    { src: ImageSeven, alt: "Image 7" },
    { src: ImageEight, alt: "Image 8" },
    { src: ImageNine, alt: "Image 9" },
    { src: ImageTen, alt: "Image 10" },
    { src: ImageEleven, alt: "Image 11" },
    { src: ImageTwelve, alt: "Image 12" },
    { src: ImageThirteen, alt: "Image 13" },
    { src: ImageFourteen, alt: "Image 14" },
    { src: ImageFifteen, alt: "Image 15" },
];

const CommunityGallerySection = () => {
    const [showHero, setShowHero] = useState(false);
    const [animateToGrid, setAnimateToGrid] = useState(false);
    const [showGrid, setShowGrid] = useState(false);
    const [triggered, setTriggered] = useState(false);
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !triggered) {
                        setTriggered(true);
                        setShowHero(true);

                        const t1 = setTimeout(() => setAnimateToGrid(true), 1500);
                        const t2 = setTimeout(() => {
                            setShowHero(false);
                            setAnimateToGrid(false);
                            setShowGrid(true);
                        }, 3000);

                        return () => {
                            clearTimeout(t1);
                            clearTimeout(t2);
                        };
                    }
                });
            },
            { threshold: 0.25 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [triggered]);


    useEffect(() => {
        if (!scrollRef.current || !showGrid) return;

        const scrollContainer = scrollRef.current;
        let frameId;
        const speed = 0.5;

        const step = () => {
            scrollContainer.scrollLeft += speed;
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }
            frameId = requestAnimationFrame(step);
        };

        frameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frameId);
    }, [showGrid]);

    const imagesForScroll = [...uniqueImages, ...uniqueImages];

    return (
        <div
            ref={containerRef}
            className="w-full px-12 bg-white flex flex-col justify-center items-center"
            style={{ minHeight: 300 }}
        >
            <div className="text-center max-w-4xl mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    A GLIMPSE OF <span className="text-blue-600">OUR JOURNEY</span>
                </h2>
                <p className="mt-2 text-base md:text-lg text-gray-600">
                    Explore Moments That Define Learning, Creativity, And Innovation At Techsurya IT Solution.
                </p>
            </div>

            {showHero && (
                <div className="relative h-[472px] w-full flex justify-center items-center overflow-hidden">
                    <img
                        src={uniqueImages[7].src}
                        alt={uniqueImages[7].alt}
                        className={`rounded-xl shadow-none object-cover transition-all duration-1000 ease-in-out ${animateToGrid
                            ? "w-[140px] h-[140px]"
                            : "w-full h-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
                            }`}
                        style={{
                            position: "absolute",
                            zIndex: 10,
                            transform: animateToGrid
                                ? "translate(280px, 156px)"
                                : "translate(0, 0)",
                        }}
                    />
                </div>
            )}

            {showGrid && (
                <div
                    ref={scrollRef}
                    className="overflow-hidden w-full"
                    style={{ height: "472px", whiteSpace: "nowrap" }}
                >
                    <div className="flex" style={{ width: "max-content", gap: "16px" }}>
                        {imagesForScroll.map((img, idx) => (
                            <div
                                key={idx}
                                className="grid"
                                style={{
                                    gridTemplateRows: "repeat(3, 140px)",
                                    gridAutoFlow: "column",
                                    gridAutoColumns: "140px",
                                    gap: "16px",
                                }}
                            >
                                {uniqueImages.map((uimg, ui) => (
                                    <div
                                        key={`${idx}-${ui}`}
                                        className="rounded-2xl overflow-hidden"
                                        style={{ width: "140px", height: "140px" }}
                                    >
                                        <img
                                            src={uimg.src}
                                            alt={uimg.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

};

export default CommunityGallerySection;
