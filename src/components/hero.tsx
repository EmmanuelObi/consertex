"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const container = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <section className="relative w-full">
            <div className="h-[500px] w-full xl:h-[700px]">
                <Image
                    src="/business.jpg"
                    alt="hero image"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute inset-0 h-full w-full bg-black/20 xl:hidden"></div>

            <motion.header
                variants={container}
                initial="initial"
                animate="animate"
                className="absolute top-[25%] max-w-[500px] text-center sm:right-[10%] md:text-start"
            >
                <motion.h1
                    variants={fadeUp}
                    className="text-3xl font-semibold text-white xl:text-4xl"
                >
                    Powering Precision in Oil & Energy with Data-Driven Systems
                </motion.h1>

                <motion.p variants={fadeUp} className="py-6 text-white">
                    Consertex offers real-time analytics, tailored ERP
                    solutions, and industry expertise so you can make faster,
                    smarter decisions.
                </motion.p>

                <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="#services"
                        className="cursor-pointer bg-blue-700 p-3 text-white hover:bg-blue-600"
                    >
                        Explore Our Services
                    </Link>
                </motion.button>
            </motion.header>
        </section>
    );
}
