import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full">
            <div className="h-[500px] w-full xl:h-[700px]">
                <Image
                    src="/business.jpg"
                    alt="hero image"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                />
            </div>

            <header className="absolute top-[25%] max-w-[500px] text-center sm:right-[10%] md:text-start">
                <h1 className="text-3xl font-semibold text-white xl:text-4xl">
                    Powering Precision in Oil & Energy with Data-Driven Systems
                </h1>
                <p className="py-6 text-white">
                    Consertex offers real-time analytics, tailored ERP
                    solutions, and industry expertise so you can make faster,
                    smarter decisions.
                </p>
                <Link
                    href="#services"
                    className="cursor-pointer bg-blue-700 px-3 py-2.5 text-white"
                >
                    Explore Our Services
                </Link>
            </header>
        </section>
    );
}
