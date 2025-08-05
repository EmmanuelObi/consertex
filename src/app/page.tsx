import Hero from "@/components/hero";
import OurService from "@/components/our-service";
import FutureOfEnergy from "@/components/future-of-energy";
import GetInTouch from "@/components/get-in-touch";
export default function Home() {
    return (
        <section className="bg-white">
            <Hero />
            <OurService />
            <FutureOfEnergy />
            <GetInTouch />
        </section>
    );
}
