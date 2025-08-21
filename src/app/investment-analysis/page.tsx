import type { Metadata } from "next";
import Image from "next/image";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
    title: "Investment Analysis",
};

export default function InvestmentAnalysisPage() {
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
                        src="/investment-analysis.jpg"
                        alt="hero image"
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
                        Investment Analysis
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        Our Investment Analysis service equips energy companies
                        with the insights they need to make confident,
                        profitable decisions. By combining market intelligence,
                        financial modelling, and sector specific expertise, we
                        evaluate opportunities across the oil and gas value
                        chain to identify ventures with the highest potential
                        returns.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        Our process includes risk assessment, cost benefit
                        analysis, and forecasting to help investors and
                        operators reduce uncertainty and protect capital. We
                        provide clear, data driven recommendations that balance
                        growth objectives with operational realities, enabling
                        faster and more informed investment strategies.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        With deep industry knowledge and access to cutting edge
                        analytical tools, Consertex transforms complex financial
                        and market data into actionable strategies. Whether
                        evaluating new exploration projects, acquisitions, or
                        infrastructure investments, our Investment Analysis
                        ensures every decision is backed by precision,
                        transparency, and strategic foresight.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
