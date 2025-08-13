"use client";

import { motion } from "motion/react";

export default function GetInTouch() {
    return (
        <section className="bg-blue-700 px-4 py-10 md:py-20 xl:px-[125px]">
            <section className="container mx-auto">
                <div className="flex min-h-[25vh] flex-col items-center justify-center gap-2 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.8 }}
                        className="text-2xl font-semibold text-white md:text-3xl"
                    >
                        Ready to Transform Your Energy Operations?
                    </motion.h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="mt-4 cursor-pointer bg-white px-6 py-3 text-sm text-black md:mt-8"
                    >
                        Get in Touch
                    </motion.button>
                </div>
            </section>
        </section>
    );
}
