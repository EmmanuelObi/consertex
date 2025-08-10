import { Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="px-4 py-10 xl:px-[125px]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 md:flex-row">
                <div className="flex cursor-pointer gap-3">
                    <Image
                        src="/logo-sm.png"
                        alt="logo image"
                        width={800}
                        height={800}
                        className="w-32"
                    />
                </div>
                <h4 className="text-center">
                    © {new Date().getFullYear()} Consertex Inc. All rights
                    reserved.
                </h4>
                <div className="flex items-center gap-3">
                    <span className="group cursor-pointer">
                        <Linkedin className="fill-none group-hover:fill-[#1447e6] hover:stroke-none" />
                    </span>
                    <span className="group cursor-pointer">
                        <Twitter className="fill-none group-hover:fill-[#1447e6] hover:stroke-none" />
                    </span>
                    <span className="group cursor-pointer">
                        <Facebook className="fill-none group-hover:fill-[#1447e6] hover:stroke-none" />
                    </span>
                </div>
            </div>
        </section>
    );
}
