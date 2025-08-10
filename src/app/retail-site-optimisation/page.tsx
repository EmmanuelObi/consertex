import Image from "next/image";

export default function RetailSiteOptimisationPage() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between">
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/retail-site.jpg"
                        alt="retail site optimisation illustration"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="max-w-5xl">
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                        Retail Site Optimisation
                    </h2>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        At Consertex, our Retail Site Optimisation service helps
                        energy and fuel retail operators identify, design, and
                        manage sites that deliver maximum profitability. Using
                        location analytics, consumer behaviour data, and
                        operational performance metrics, we determine the ideal
                        site placement and configuration to capture the highest
                        market potential.
                    </p>
                    <p className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Our approach combines market demand forecasting, traffic
                        flow studies, and competitive benchmarking to ensure
                        every retail site achieves optimal visibility,
                        accessibility, and operational efficiency. This data
                        driven strategy improves customer reach, maximises
                        sales, and ensures long term profitability across
                        multiple retail locations.
                    </p>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        With expertise in the oil and energy retail sector,
                        Consertex transforms raw data into actionable location
                        strategies. Whether launching a new fuel station,
                        upgrading existing retail sites, or expanding into new
                        markets, our optimisation service ensures each site
                        operates at peak performance from day one.
                    </p>
                </div>
            </div>
        </section>
    );
}
