import { services } from "@/constants/service";
export default function OurService() {
    return (
        <section className="bg-neutral-100 px-4 py-10 xl:px-[125px]">
            <div className="container mx-auto">
                <h1 className="text-center text-2xl font-semibold md:text-3xl">
                    Our Services
                </h1>
                <div className="mt-10 flex cursor-pointer flex-wrap items-center justify-center gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="max-w-[300px] rounded-md bg-white p-4 shadow-sm"
                        >
                            <div>{service.icon}</div>
                            <h1 className="py-2.5 text-xl font-semibold">
                                {service.title}
                            </h1>
                            <p className="max-w-[250px] text-sm font-light">
                                {service.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
