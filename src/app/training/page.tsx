import Image from "next/image";
import * as motion from "motion/react-client";

export default function TrainingPage() {
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
                        src="/training.jpg"
                        alt="training illustration"
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
                        Training & Development
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        At Consertex, our Training & Development service is
                        designed to equip energy sector teams with the skills
                        and knowledge needed to thrive in a rapidly evolving
                        industry. We deliver customised training programs
                        covering emerging technologies, regulatory compliance,
                        safety standards, and operational best practices.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        Our approach combines expert-led sessions, hands-on
                        workshops, and real-world case studies to ensure
                        practical application of knowledge. This targeted
                        learning methodology improves workforce performance,
                        enhances safety culture, and enables organisations to
                        adapt quickly to technological and market changes.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start"
                    >
                        With a team of industry professionals and subject matter
                        experts, Consertex transforms training into a strategic
                        advantage. Whether onboarding new talent, upskilling
                        existing teams, or preparing for large-scale digital
                        transformation, our Training & Development service
                        ensures your workforce remains competitive, capable, and
                        future ready.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
