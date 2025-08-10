import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type ServiceDropdownProps = {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ServiceDropdown({ setShowMenu }: ServiceDropdownProps) {
    return (
        <NavigationMenu className="flex-none">
            <NavigationMenuList>
                <NavigationMenuItem className="all-[unset] border-none p-0 shadow-none lg:relative">
                    <NavigationMenuTrigger className="all-[unset] under h-0 cursor-pointer border-none px-0 py-0 text-base font-semibold text-black outline-none hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                        Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        onClick={() => setShowMenu(false)}
                        className="bg-white text-nowrap"
                    >
                        <NavigationMenuLink asChild>
                            <Link
                                href="/catchment-profiling"
                                className="cursor-pointer"
                            >
                                Catchment profiling
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/retail-site-optimisation"
                                className="cursor-pointer"
                            >
                                Retail Site Optimisation
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/investment-analysis"
                                className="cursor-pointer"
                            >
                                Investment Analysis
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/procurement"
                                className="cursor-pointer"
                            >
                                Procurement
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/tailored-erp-solution"
                                className="cursor-pointer"
                            >
                                Tailored ERP solutions
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/business-consultation"
                                className="cursor-pointer"
                            >
                                Business Consultation
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/training" className="cursor-pointer">
                                Training & Development
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
