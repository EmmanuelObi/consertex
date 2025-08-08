"use client";

import React, { useState } from "react";
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
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="logo image"
                                    width={800}
                                    height={800}
                                    className="w-32"
                                />
                            </Link>
                        </div>

                        <div>
                            <ul className="hidden w-full flex-col items-center justify-end gap-6 lg:flex lg:flex-row lg:gap-8 lg:text-base">
                                <Link href="/" className="relative">
                                    <p className="under font-semibold text-black">
                                        Home
                                    </p>
                                </Link>
                                <Link href="/about" className="relative">
                                    <p className="under font-semibold text-black">
                                        About Us
                                    </p>
                                </Link>

                                <ServiceDropdown setShowMenu={setShowMenu} />
                            </ul>
                        </div>

                        {/* Mobile Navigation Menu */}
                        <ul
                            className={`${
                                showMenu ? "flex" : "hidden"
                            } font-outfit absolute top-24 left-0 z-20 h-svh w-full flex-col gap-10 bg-[#444444] px-4 py-[61px] lg:hidden`}
                        >
                            <Link href="/" onClick={() => setShowMenu(false)}>
                                <p className="font-semibold text-black">Home</p>
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setShowMenu(false)}
                            >
                                <p className="font-semibold text-black">
                                    About Us
                                </p>
                            </Link>

                            <ServiceDropdown setShowMenu={setShowMenu} />
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
                    </nav>
                </div>
            </section>
        </section>
    );
}
