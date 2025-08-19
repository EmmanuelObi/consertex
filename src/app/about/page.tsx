import Image from "next/image";
import * as motion from "motion/react-client";

export default function AboutPage() {
    const container = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
    };
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto">
                <motion.div
                    variants={container}
                    viewport={{ once: true, amount: 0.2 }}
                    initial="initial"
                    whileInView="whileInView"
                    className="flex min-h-[25vh] flex-col items-center justify-center gap-2 text-center"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-lg md:leading-7"
                    >
                        Consertex is a leading solutions provider in the oil and
                        energy space, offering state of the art technology and
                        services to facilitate business processes and customer
                        experiences. We deliver a data driven ecosystem that
                        enables businesses to make faster, more accurate, and
                        more strategic decisions. By integrating advanced
                        analytics, industry expertise, and cutting edge digital
                        solutions, Consertex empowers clients to optimise
                        operations, reduce risks, and seize new opportunities in
                        a competitive energy landscape.
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={container}
                    viewport={{ once: true, amount: 0.2 }}
                    initial="initial"
                    whileInView="whileInView"
                    className="mt-4 flex min-h-[25vh] flex-col items-center justify-center gap-2 text-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-center text-2xl font-semibold md:text-3xl"
                    >
                        Our Vision
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="pt-4 text-center text-sm leading-6 md:text-lg md:leading-7"
                    >
                        To be the most trusted technology partner for energy
                        companies worldwide, driving operational excellence
                        through data driven intelligence and forward thinking
                        solutions.
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={container}
                    viewport={{ once: true, amount: 0.2 }}
                    initial="initial"
                    whileInView="whileInView"
                    className="mt-4 flex min-h-[25vh] flex-col items-center justify-center gap-2 text-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-center text-2xl font-semibold md:text-3xl"
                    >
                        Our Mission
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="pt-4 text-center text-sm leading-6 md:text-lg md:leading-7"
                    >
                        To simplify complex energy operations by delivering
                        innovative tools, expert guidance, and actionable
                        insights that help businesses make better decisions,
                        faster.
                    </motion.p>
                </motion.div>
                <div className="mt-10 flex flex-col items-center justify-between gap-10">
                    <motion.div
                        variants={fadeUp}
                        className="h-full w-full lg:h-[500px] lg:w-[500px]"
                    >
                        <Image
                            src="/profile.png"
                            alt="CEO profile picture"
                            width={100}
                            height={100}
                            className="w-full object-contain"
                        />
                    </motion.div>
                    <motion.div
                        variants={container}
                        viewport={{ once: true, amount: 0.2 }}
                        initial="initial"
                        whileInView="whileInView"
                        className="max-w-6xl"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-center text-2xl font-semibold md:text-start md:text-3xl"
                        >
                            Meet Our Co-Founder and CEO — MOBOLAJI OKEAYO BAMIRO
                        </motion.h2>
                        <motion.article>
                            <motion.p
                                variants={fadeUp}
                                className="pt-4 text-center text-sm leading-6 md:text-start md:text-lg md:leading-7"
                            >
                                Mobolaji Okeayo BAMIRO (MOB) is a Business
                                Development Executive with extensive knowledge
                                across the Oil and Energy space. MOB has a
                                wealth of over 16 years experience in the Energy
                                Sector, holding several key roles across the Oil
                                and Gas value chain. He also has a complementary
                                stint of over 3 years in the fintech payments
                                space offering cross border payment solutions
                                and technology to key Industry players locally
                                and globally.
                            </motion.p>
                            <motion.p
                                variants={fadeUp}
                                className="pt-4 text-center text-sm leading-6 md:text-start md:text-lg md:leading-7"
                            >
                                MOB has led innovation and value creation at
                                several fintech giants including Flutterwave, a
                                renowned Unicorn operating Globally in over 50
                                countries in the capacity of Vice President of
                                Business Development.
                            </motion.p>

                            <motion.p
                                variants={fadeUp}
                                className="pt-4 text-center text-sm leading-6 md:text-start md:text-lg md:leading-7"
                            >
                                During his early career, he worked at Dangote
                                Cement, in the logistics division before
                                transitioning fully into the Energy ector with
                                Oando Plc., where he spent over 11 years holding
                                leadership roles across several SBUs spanning
                                from Regional Retail Manager, Commercial
                                Manager, Non-fuel Revenue Manager and Head of
                                Business Development ASPM Midstream Jetty to
                                mention a few.
                            </motion.p>
                            <motion.p
                                variants={fadeUp}
                                className="pt-4 text-center text-sm leading-6 md:text-start md:text-lg md:leading-7"
                            >
                                In a bid to offer his extensive knowledge and
                                expertise back to the Energy Sector, Consertex
                                Integrated Solutions (CIS) was birthed in 2015,
                                through which he consulted for businesses such
                                as SLG (Enyo Retail), Eterna Plc, Optima Energy,
                                AYM Shafa etc.
                            </motion.p>
                            <motion.p
                                variants={fadeUp}
                                className="pt-4 text-center text-sm leading-6 md:text-start md:text-lg md:leading-7"
                            >
                                As a key success story, he developed from
                                scratch the entire business infrastructure and
                                commercial viability of 3 new SBUs, Non-Fuel
                                Revenue, LPG and Alternative Energy at Eterna
                                Plc.
                            </motion.p>
                            <motion.p
                                variants={fadeUp}
                                className="pt-4 text-center text-sm leading-6 md:text-start md:text-lg md:leading-7"
                            >
                                Over the years, he has been able to pioneer
                                several revenue generating initiatives and
                                improved the profitability of key assets for
                                major industry operators through resilience and
                                a consistent knack for innovation.
                            </motion.p>
                            <motion.p
                                variants={fadeUp}
                                className="pt-4 text-center text-sm leading-6 md:text-start md:text-lg md:leading-7"
                            >
                                He holds a Bachelor of Science degree in
                                Economics from the prestigious University of
                                Ibadan and a Master of Business Administration
                                (MBA) from the renowned Lagos Business School,
                                Pan Atlantic University, Lagos Nigeria.
                            </motion.p>
                        </motion.article>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
