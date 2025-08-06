import Image from "next/image";

export default function ProcurementPage() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between">
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/procurement.jpg"
                        alt="procurement illustration"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="max-w-5xl">
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                        Procurement
                    </h2>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Our Procurement service streamlines the process of
                        sourcing, purchasing, and delivering critical resources
                        for oil, gas, and energy operations. We combine supplier
                        relationship management, quality assurance, and cost
                        optimisation strategies to ensure clients receive the
                        right materials, at the right time, and at the best
                        value.
                    </p>
                    <p className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        By leveraging market intelligence, competitive bidding,
                        and contract management, we help clients minimise
                        procurement risks, control expenses, and maintain
                        consistent supply chain performance. Our approach
                        prioritises transparency, compliance, and efficiency —
                        ensuring that procurement activities align with project
                        timelines and business objectives.
                    </p>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        With deep industry connections and a proven procurement
                        framework, Consertex empowers energy companies to
                        operate without costly delays or supply shortages.
                        Whether sourcing specialised equipment, bulk materials,
                        or technical services, our procurement solutions deliver
                        reliability, cost savings, and operational confidence at
                        every stage of the supply chain.
                    </p>
                </div>
            </div>
        </section>
    );
}
