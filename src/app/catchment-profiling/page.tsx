import Image from "next/image";

export default function CatchmentProfilingPafe() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between">
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/catchment.jpg"
                        alt="catchment profiling illustration"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="max-w-5xl">
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                        Catchment Profiling
                    </h2>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        At Consertex, our Catchment Profiling service combines
                        geological expertise, geospatial analysis, and advanced
                        data modelling to identify high potential resource zones
                        for oil and gas exploration. By integrating satellite
                        imagery, environmental data, and subsurface mapping, we
                        provide a clear, evidence based understanding of where
                        resources are most likely to be found.
                    </p>
                    <p className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        This approach reduces exploration risks, cuts
                        unnecessary drilling costs, and speeds up project
                        timelines. Our profiling delivers actionable insights
                        that allow operators to target efforts with precision,
                        allocate resources efficiently, and achieve greater
                        returns on exploration investments.
                    </p>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Backed by cutting edge technology and a team of energy
                        sector specialists, Consertex transforms complex
                        datasets into strategic decisions. Whether you are
                        planning a new exploration project or optimising an
                        existing field, our Catchment Profiling service ensures
                        your next move is guided by reliable, data driven
                        intelligence.
                    </p>
                </div>
            </div>
        </section>
    );
}
