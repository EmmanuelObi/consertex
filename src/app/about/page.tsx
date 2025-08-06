import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto">
                <div>
                    <h2 className="text-center text-2xl font-semibold md:text-3xl">
                        Introduction
                    </h2>
                    <div>
                        <p className="pt-4 text-center text-sm leading-6 md:text-base md:leading-7">
                            Consertex is a leading solutions provider in the oil
                            and energy space, offering state of the art
                            technology and services to facilitate business
                            processes and customer experiences. We deliver a
                            data driven ecosystem that enables businesses to
                            make faster, more accurate, and more strategic
                            decisions. By integrating advanced analytics,
                            industry expertise, and cutting edge digital
                            solutions, Consertex empowers clients to optimise
                            operations, reduce risks, and seize new
                            opportunities in a competitive energy landscape.
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-center text-2xl font-semibold md:text-3xl">
                        Our Vision
                    </h2>
                    <p className="pt-4 text-center text-sm leading-6 md:text-base md:leading-7">
                        To be the most trusted technology partner for energy
                        companies worldwide, driving operational excellence
                        through data driven intelligence and forward thinking
                        solutions.
                    </p>
                </div>
                <div className="mt-4">
                    <h2 className="text-center text-2xl font-semibold md:text-3xl">
                        Our Mission
                    </h2>
                    <p className="pt-4 text-center text-sm leading-6 md:text-base md:leading-7">
                        To simplify complex energy operations by delivering
                        innovative tools, expert guidance, and actionable
                        insights that help businesses make better decisions,
                        faster.
                    </p>
                </div>
                <div className="mt-10 flex flex-col items-center justify-between gap-10 md:flex-row">
                    <div className="max-w-[400px] lg:max-w-[600px]">
                        <h2 className="text-center text-2xl font-semibold md:text-start md:text-3xl">
                            Meet Our CEO — [CEO Name]
                        </h2>
                        <article>
                            <p className="pt-4 text-center text-sm leading-6 md:text-start md:text-base md:leading-7">
                                [CEO Name], the visionary behind Consertex,
                                brings over [X] years of experience in the oil,
                                gas, and technology sectors. With a strong
                                background in [engineering/energy
                                management/data analytics — adjust to suit],
                                [he/she/they] founded Consertex with the belief
                                that the future of the energy industry lies in
                                data powered decision making.
                            </p>
                            <p className="pt-4 text-center text-sm leading-6 md:text-start md:text-base md:leading-7">
                                Under [CEO Name] &apos;s leadership, Consertex
                                has grown from a bold idea into a trusted
                                partner for leading energy companies. Passionate
                                about innovation and sustainability,
                                [he/she/they] champions solutions that not only
                                improve business performance but also support
                                responsible resource management.
                            </p>
                        </article>
                    </div>
                    <div className="h-full w-full lg:h-[500px] lg:w-[500px]">
                        <Image
                            src="/profile.png"
                            alt="CEO profile picture"
                            width={100}
                            height={100}
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
