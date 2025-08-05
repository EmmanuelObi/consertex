import React from "react";
import { services } from "@/constants/service";
export default function OurService() {
    return (
        <section className="bg-neutral-100 px-4 py-10 xl:px-[125px]">
            <div className="container mx-auto">
                <h1 className="text-center text-2xl font-semibold md:text-3xl">
                    Our Services
                </h1>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="max-w-[350px] bg-white p-6 shadow-sm"
                        >
                            <h1 className="text-base font-semibold">
                                {service.title}
                            </h1>
                            <p className="text-sm font-light">
                                {service.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
