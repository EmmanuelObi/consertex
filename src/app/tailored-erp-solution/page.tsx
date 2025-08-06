import Image from "next/image";

export default function TailoredErpPage() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between">
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/erp.jpg"
                        alt="ERP illustration"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="max-w-5xl">
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                        Tailored Erp Solution
                    </h2>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        At Consertex, our Tailored ERP Solutions are designed
                        specifically for the unique operational demands of the
                        oil and energy sector. We build fully customised
                        enterprise resource planning systems that integrate
                        seamlessly with your workflows, bringing together
                        finance, supply chain, asset management, and compliance
                        into one centralised platform.
                    </p>
                    <p className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        By automating routine processes, improving data
                        visibility, and enabling real time reporting, our ERP
                        solutions empower decision makers to respond quickly to
                        market changes and operational challenges. This
                        streamlined approach reduces inefficiencies, cuts costs,
                        and improves collaboration across departments and sites.
                    </p>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Unlike generic ERP systems, our tailored approach
                        ensures that every feature, dashboard, and integration
                        directly supports your business objectives. With
                        industry specific modules and ongoing support, Consertex
                        delivers ERP solutions that not only meet today&aspos;s
                        needs but also adapt to future growth and innovation.
                    </p>
                </div>
            </div>
        </section>
    );
}
