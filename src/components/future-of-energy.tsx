"use client";

import { motion } from "motion/react";

export const container = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
};

export default function FutureOfEnergy() {
    return (
        <section className="px-4 py-10 xl:px-[125px]">
            <div className="container mx-auto">
                <motion.div
                    variants={container}
                    viewport={{ once: true, amount: 0.9 }}
                    initial="initial"
                    whileInView="whileInView"
                    className="flex min-h-[25vh] flex-col items-center justify-center gap-2 text-center"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-center text-2xl font-semibold md:text-3xl"
                    >
                        Empowering the Future of Energy
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="mx-auto max-w-[700px] py-6 text-center text-sm leading-6 md:text-base md:leading-7"
                    >
                        At Consertex, we are dedicated to providing
                        cutting-edge, sustainable, and efficient solutions that
                        drive progress in the global oil and energy industry.
                        With decades of combined experience, our team of experts
                        leverages deep industry knowledge and innovative
                        technology to tackle the most complex challenges,
                        ensuring operational excellence and strategic growth for
                        our clients worldwide. We are committed to fostering a
                        safer, more productive, and environmentally conscious
                        energy future.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
