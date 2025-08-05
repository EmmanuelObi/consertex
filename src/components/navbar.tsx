"use client";

import React, { useState } from "react";
import { nav } from "@/constants/nav";
import Link from "next/link";
import ServiceDropdown from "./service-dropdown";
import Image from "next/image";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <section className="border-b">
            <section className="px-4 xl:px-[125px]">
                <div className="container mx-auto">
                    <nav className="flex items-center justify-between py-5">
                        <div className="flex cursor-pointer gap-3">
                            <p className="text-xl font-semibold text-black">
                                Consertex
                            </p>
                        </div>

                        <div>
                            <ul className="hidden w-full flex-col items-center justify-end gap-6 lg:flex lg:flex-row lg:gap-8 lg:text-base">
                                <Link href="/">
                                    <p className="font-semibold text-black">
                                        Home
                                    </p>
                                </Link>
                                <Link href="/about">
                                    <p className="font-semibold text-black">
                                        About us
                                    </p>
                                </Link>

                                <ServiceDropdown />

                                {/* {nav.map((item) => (
                                <Link
                                    href={item.link}
                                    className="text-header-black relative flex cursor-pointer items-center text-sm font-normal"
                                    key={item.id}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <p className="under text-base font-medium">
                                        {item.name}
                                    </p>
                                </Link>
                            ))} */}
                            </ul>
                        </div>

                        {/* Mobile Navigation Menu */}
                        <ul
                            className={`${
                                showMenu ? "flex" : "hidden"
                            } font-outfit absolute top-24 left-0 z-20 h-svh w-full flex-col gap-10 bg-[#444444] px-4 py-[61px] md:top-36 lg:hidden`}
                        >
                            {nav.map((item) => (
                                <Link
                                    href={item.link}
                                    className="text-header-black relative flex w-fit cursor-pointer items-center gap-2"
                                    key={item.id}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <p className="under">{item.name}</p>
                                </Link>
                            ))}
                            <button className="bg-orange-red rounded-lg px-4 py-[10px] text-white">
                                Contact Us
                            </button>
                        </ul>

                        <div
                            className="flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-md bg-black p-1 lg:hidden"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <div className="relative flex h-2 w-8 flex-col items-center justify-center">
                                <span
                                    className={`block h-2 w-8 bg-white transition-transform ${
                                        showMenu
                                            ? "translate-y-0 rotate-45"
                                            : "-translate-y-[5px]"
                                    }`}
                                />
                                <span
                                    className={`block h-2 w-8 bg-white transition-transform ${
                                        showMenu
                                            ? "translate-y-0 -rotate-45"
                                            : "translate-y-[5px]"
                                    }`}
                                />
                            </div>
                        </div>

                        {/* <div className="hidden items-center gap-5 lg:flex">
                        <button className="text-lg font-semibold">Login</button>
                        <button className="cursor-pointer rounded-lg bg-black px-4 py-[10px] text-white">
                            Create free account
                        </button>
                    </div> */}
                    </nav>
                </div>
            </section>
        </section>
    );
}
