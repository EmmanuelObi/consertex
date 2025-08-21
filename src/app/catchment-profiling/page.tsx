import type { Metadata } from "next";
import Image from "next/image";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
    title: "Catchment Profiling",
};

export default function CatchmentProfilingPage() {
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
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <motion.div
                variants={container}
                viewport={{ once: true }}
                initial="initial"
                animate="animate"
                className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between"
            >
                <motion.div
                    variants={fadeUp}
                    className="h-[400px] w-full xl:h-[500px]"
                >
                    <Image
                        src="/catchment.jpg"
                        alt="catchment profiling illustration"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </motion.div>
                <motion.div className="max-w-5xl">
                    <motion.h2
                        variants={fadeUp}
                        className="mb-4 text-2xl font-semibold md:text-3xl"
                    >
                        Catchment Profiling
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        At Consertex, our Catchment Profiling service combines
                        geological expertise, geospatial analysis, and advanced
                        data modelling to identify high potential resource zones
                        for oil and gas exploration. By integrating satellite
                        imagery, environmental data, and subsurface mapping, we
                        provide a clear, evidence based understanding of where
                        resources are most likely to be found.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        This approach reduces exploration risks, cuts
                        unnecessary drilling costs, and speeds up project
                        timelines. Our profiling delivers actionable insights
                        that allow operators to target efforts with precision,
                        allocate resources efficiently, and achieve greater
                        returns on exploration investments.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        Backed by cutting edge technology and a team of energy
                        sector specialists, Consertex transforms complex
                        datasets into strategic decisions. Whether you are
                        planning a new exploration project or optimising an
                        existing field, our Catchment Profiling service ensures
                        your next move is guided by reliable, data driven
                        intelligence.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
