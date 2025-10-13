import React from "react";
import { motion } from "framer-motion";
import logo from "./assets/images/logo.jpg";

import icon1 from "./assets/images/icon_one.jpg";
import icon2 from "./assets/images/icon_two.jpg";
import icon3 from "./assets/images/icon_three.jpg";
import icon4 from "./assets/images/icon_four.jpg";
import icon5 from "./assets/images/icon_five.jpg";
import icon6 from "./assets/images/icon_six.jpg";

import icon7 from "./assets/images/icon_seven.jpg";
import icon8 from "./assets/images/icon_eight.jpg";
import icon9 from "./assets/images/icon_nine.jpg";
import icon10 from "./assets/images/icon_ten.jpg";

const outerIcons = [
    { src: icon1, angle: 0 },
    { src: icon2, angle: 60 },
    { src: icon3, angle: 120 },
    { src: icon4, angle: 180 },
    { src: icon5, angle: 240 },
    { src: icon6, angle: 300 },
];

const innerIcons = [
    { src: icon7, angle: 45 },
    { src: icon8, angle: 135 },
    { src: icon9, angle: 225 },
    { src: icon10, angle: 315 },
];

const CircleLayout = () => {
    const size = 400;
    const iconSize = 70;

    const outerRadius = size / 2;
    const innerRadius = 125;

    const getPosition = (angle, radius) => {
        const radian = (angle * Math.PI) / 180;
        return {
            x: radius * Math.cos(radian),
            y: radius * Math.sin(radian),
        };
    };

    return (
        <div style={{ position: "relative", width: size, height: size, margin: "auto" }}>

            <motion.div
                style={{ position: "absolute", inset: 0 }}
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: {
                        repeat: Infinity,
                        duration: 80,
                        ease: "linear",
                    },
                    scale: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                    },
                }}
            >


                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        padding: "1px",
                        background:
                            "conic-gradient(rgba(0,221,255,0.5), rgba(255,117,0,0.5), rgba(0,51,123,0.5), rgba(0,221,255,0.5))",
                    }}
                >
                    <div style={{ width: "100%", height: "100%", background: "white", borderRadius: "50%" }} />
                </div>


                <div
                    style={{
                        position: "absolute",
                        left: 75,
                        top: 75,
                        width: 250,
                        height: 250,
                        borderRadius: "50%",
                        padding: "1px",
                        background:
                            "conic-gradient(rgba(0,221,255,0.5), rgba(255,117,0,0.5), rgba(0,51,123,0.5), rgba(0,221,255,0.5))",
                    }}
                >
                    <div style={{ width: "100%", height: "100%", background: "white", borderRadius: "50%" }} />
                </div>


                {outerIcons.map((icon, i) => {
                    const pos = getPosition(icon.angle, outerRadius);
                    return (
                        <img
                            key={`outer-${i}`}
                            src={icon.src}
                            alt={`outer-${i}`}
                            style={{
                                width: iconSize,
                                height: iconSize,
                                borderRadius: "50%",
                                position: "absolute",
                                left: `calc(50% + ${pos.x}px - ${iconSize / 2}px)`,
                                top: `calc(50% + ${pos.y}px - ${iconSize / 2}px)`,
                            }}
                        />
                    );
                })}


                {innerIcons.map((icon, i) => {
                    const pos = getPosition(icon.angle, innerRadius);
                    return (
                        <img
                            key={`inner-${i}`}
                            src={icon.src}
                            alt={`inner-${i}`}
                            style={{
                                width: iconSize,
                                height: iconSize,
                                borderRadius: "50%",
                                position: "absolute",
                                left: `calc(50% + ${pos.x}px - ${iconSize / 2}px)`,
                                top: `calc(50% + ${pos.y}px - ${iconSize / 2}px)`,
                            }}
                        />
                    );
                })}


                <div
                    style={{
                        position: "absolute",
                        width: 150.8,
                        height: 150.8,
                        backgroundColor: "#FFDDB047",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 0,
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}
                />
            </motion.div>


            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                }}
            >
                <img
                    src={logo}
                    alt="Center Logo"
                    style={{ width: 120, height: 90, objectFit: "contain", borderRadius: "50%" }}
                />
            </div>
        </div>
    );
};

export default CircleLayout;
