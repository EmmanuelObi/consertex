import type { Metadata } from "next";
import Image from "next/image";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
    title: "Retail Site Optimisation",
};

export default function RetailSiteOptimisationPage() {
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
                        src="/retail-site.jpg"
                        alt="retail site optimisation illustration"
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
                        Retail Site Optimisation
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        At Consertex, our Retail Site Optimisation service helps
                        energy and fuel retail operators identify, design, and
                        manage sites that deliver maximum profitability. Using
                        location analytics, consumer behaviour data, and
                        operational performance metrics, we determine the ideal
                        site placement and configuration to capture the highest
                        market potential.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        Our approach combines market demand forecasting, traffic
                        flow studies, and competitive benchmarking to ensure
                        every retail site achieves optimal visibility,
                        accessibility, and operational efficiency. This data
                        driven strategy improves customer reach, maximises
                        sales, and ensures long term profitability across
                        multiple retail locations.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        With expertise in the oil and energy retail sector,
                        Consertex transforms raw data into actionable location
                        strategies. Whether launching a new fuel station,
                        upgrading existing retail sites, or expanding into new
                        markets, our optimisation service ensures each site
                        operates at peak performance from day one.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
