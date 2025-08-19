import Image from "next/image";
import * as motion from "motion/react-client";

export default function TailoredErpPage() {
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
                        src="/erp.jpg"
                        alt="ERP illustration"
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
                        Tailored ERP Solution
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        At Consertex, our Tailored ERP Solutions are designed
                        specifically for the unique operational demands of the
                        oil and energy sector. We build fully customised
                        enterprise resource planning systems that integrate
                        seamlessly with your workflows, bringing together
                        finance, supply chain, asset management, and compliance
                        into one centralised platform.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        By automating routine processes, improving data
                        visibility, and enabling real time reporting, our ERP
                        solutions empower decision makers to respond quickly to
                        market changes and operational challenges. This
                        streamlined approach reduces inefficiencies, cuts costs,
                        and improves collaboration across departments and sites.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        Unlike generic ERP systems, our tailored approach
                        ensures that every feature, dashboard, and integration
                        directly supports your business objectives. With
                        industry specific modules and ongoing support, Consertex
                        delivers ERP solutions that not only meet today&aspos;s
                        needs but also adapt to future growth and innovation.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
