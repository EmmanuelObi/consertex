import Image from "next/image";

export default function Hero() {
    return (
        <section className="px-4 py-10 xl:px-[125px]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
                <header className="max-w-[500px] text-center md:text-start">
                    <h1 className="text-3xl font-semibold text-black">
                        Powering Precision in Oil & Energy with Data-Driven
                        Systems
                    </h1>
                    <p className="py-6">
                        Consertex offers real-time analytics, tailored ERP
                        solutions, and industry expertise so you can make
                        faster, smarter decisions.
                    </p>
                    <button className="cursor-pointer bg-red-400 px-3 py-2.5 text-white">
                        Explore Our Services
                    </button>
                </header>
                <Image
                    className="h-full w-full object-cover lg:h-[500px] lg:w-[600px]"
                    src="/hero-img.jpg"
                    alt="hero image"
                    width={100}
                    height={100}
                />
            </div>
        </section>
    );
}
