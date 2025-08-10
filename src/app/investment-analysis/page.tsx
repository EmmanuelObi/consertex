import Image from "next/image";

export default function InvestmentAnalysisPage() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between">
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/investment-analysis.jpg"
                        alt="hero image"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="max-w-5xl">
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                        Investment Analysis
                    </h2>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Our Investment Analysis service equips energy companies
                        with the insights they need to make confident,
                        profitable decisions. By combining market intelligence,
                        financial modelling, and sector specific expertise, we
                        evaluate opportunities across the oil and gas value
                        chain to identify ventures with the highest potential
                        returns.
                    </p>
                    <p className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Our process includes risk assessment, cost benefit
                        analysis, and forecasting to help investors and
                        operators reduce uncertainty and protect capital. We
                        provide clear, data driven recommendations that balance
                        growth objectives with operational realities, enabling
                        faster and more informed investment strategies.
                    </p>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        With deep industry knowledge and access to cutting edge
                        analytical tools, Consertex transforms complex financial
                        and market data into actionable strategies. Whether
                        evaluating new exploration projects, acquisitions, or
                        infrastructure investments, our Investment Analysis
                        ensures every decision is backed by precision,
                        transparency, and strategic foresight.
                    </p>
                </div>
            </div>
        </section>
    );
}
