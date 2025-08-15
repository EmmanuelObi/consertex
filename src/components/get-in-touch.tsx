"use client";

import { motion } from "motion/react";
import { container, fadeUp } from "./future-of-energy";

export default function GetInTouch() {
    return (
        <section className="bg-blue-700 px-4 py-10 md:py-20 xl:px-[125px]">
            <section className="container mx-auto">
                <motion.div
                    variants={container}
                    viewport={{ once: true, amount: 0.9 }}
                    initial="initial"
                    whileInView="whileInView"
                    className="flex min-h-[25vh] flex-col items-center justify-center gap-2 text-center"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-2xl font-semibold text-white md:text-3xl"
                    >
                        Ready to Transform Your Energy Operations?
                    </motion.h1>
                    <motion.button
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="mt-4 cursor-pointer bg-white px-6 py-3 text-sm text-black md:mt-8"
                    >
                        Get in Touch
                    </motion.button>
                </motion.div>
            </section>
        </section>
    );
}
