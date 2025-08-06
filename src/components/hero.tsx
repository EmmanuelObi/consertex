import Image from "next/image";

export default function Hero() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
                <header className="max-w-[500px] text-center md:text-start">
                    <h1 className="text-3xl font-semibold text-black xl:text-4xl">
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
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/hero-img.jpg"
                        alt="hero image"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
