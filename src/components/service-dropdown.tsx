import React from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function ServiceDropdown() {
    return (
        <>
            <Menubar className="all-[unset] border-none shadow-none">
                <MenubarMenu>
                    <MenubarTrigger className="all-[unset] cursor-pointer border-none px-0 py-0 text-base font-semibold text-black outline-none hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                        Services
                    </MenubarTrigger>
                    <MenubarContent align="end">
                        <MenubarItem asChild>
                            <Link
                                href="/profile"
                                className="w-full cursor-pointer"
                            >
                                Catchment profiling
                            </Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link
                                href="/transaction"
                                className="w-full cursor-pointer"
                            >
                                Asset management
                            </Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link
                                href="/transaction"
                                className="w-full cursor-pointer"
                            >
                                Investment Analysis
                            </Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link
                                href="/transaction"
                                className="w-full cursor-pointer"
                            >
                                Procurement
                            </Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link
                                href="/transaction"
                                className="w-full cursor-pointer"
                            >
                                Tailored ERP solutions
                            </Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link
                                href="/transaction"
                                className="w-full cursor-pointer"
                            >
                                Business Consultation
                            </Link>
                        </MenubarItem>
                        <MenubarItem asChild>
                            <Link
                                href="/transaction"
                                className="w-full cursor-pointer"
                            >
                                Training
                            </Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    );
}
