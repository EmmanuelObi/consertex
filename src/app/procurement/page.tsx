import type { Metadata } from "next";
import Image from "next/image";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
    title: "Procurement",
};

export default function ProcurementPage() {
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
                        src="/procurement.jpg"
                        alt="procurement illustration"
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
                        Procurement
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        Our Procurement service streamlines the process of
                        sourcing, purchasing, and delivering critical resources
                        for oil, gas, and energy operations. We combine supplier
                        relationship management, quality assurance, and cost
                        optimisation strategies to ensure clients receive the
                        right materials, at the right time, and at the best
                        value.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        By leveraging market intelligence, competitive bidding,
                        and contract management, we help clients minimise
                        procurement risks, control expenses, and maintain
                        consistent supply chain performance. Our approach
                        prioritises transparency, compliance, and efficiency —
                        ensuring that procurement activities align with project
                        timelines and business objectives.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        With deep industry connections and a proven procurement
                        framework, Consertex empowers energy companies to
                        operate without costly delays or supply shortages.
                        Whether sourcing specialised equipment, bulk materials,
                        or technical services, our procurement solutions deliver
                        reliability, cost savings, and operational confidence at
                        every stage of the supply chain.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
