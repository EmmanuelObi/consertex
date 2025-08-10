import Image from "next/image";

export default function BusinessConsultationPage() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between">
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/business-consultation.jpg"
                        alt="business consultation illustration"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="max-w-5xl">
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                        Business Consultation
                    </h2>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        At Consertex, our Business Consultation service empowers
                        energy sector organisations to navigate market
                        complexities with clarity and confidence. We work
                        closely with clients to assess their current operations,
                        identify opportunities for improvement, and develop
                        strategies that drive sustainable growth and operational
                        resilience.
                    </p>
                    <p className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Our consultancy approach blends industry expertise,
                        market intelligence, and data driven insights to deliver
                        tailored recommendations. From operational restructuring
                        to market entry strategies, we equip businesses with
                        practical, actionable solutions that enhance efficiency,
                        reduce costs, and position them for long term success in
                        a competitive landscape.
                    </p>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        With decades of combined experience in the oil, gas, and
                        energy industries, the Consertex team brings both
                        technical knowledge and strategic vision to the table.
                        Whether you&apos;re launching a new venture, optimising
                        existing operations, or responding to market shifts, our
                        consultation service ensures every decision is informed,
                        strategic, and built for impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
