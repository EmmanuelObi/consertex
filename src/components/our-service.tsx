"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { services } from "@/constants/service";
import Link from "next/link";

export default function OurService() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <section
            id="services"
            className="bg-neutral-100 px-4 py-10 xl:px-[125px]"
        >
            <div className="container mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.9 }}
                    className="overflow-hidden text-center text-2xl font-semibold md:text-3xl"
                >
                    Our Services
                </motion.h1>
                <div className="mt-10 flex cursor-pointer flex-wrap items-center justify-center gap-6">
                    {services.map((service) => (
                        <Link
                            href={service.href}
                            onMouseEnter={() => setHoveredIndex(service.id)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`max-w-[300px] rounded-md bg-white p-4 shadow-sm transition duration-300 ease-in ${
                                hoveredIndex === null
                                    ? ""
                                    : hoveredIndex === service.id
                                      ? "scale-[108%]"
                                      : "blur-[5px]"
                            }`}
                            key={service.id}
                        >
                            <div>{service.icon}</div>
                            <h1 className="py-2.5 text-xl font-semibold">
                                {service.title}
                            </h1>
                            <p className="max-w-[250px] text-sm font-light">
                                {service.subtitle}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
