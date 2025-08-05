import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <section className="px-4 py-10 xl:px-[125px]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 md:flex-row">
                <h4>
                    © {new Date().getFullYear()} Consertex Inc. All rights
                    reserved.
                </h4>
                <div className="flex items-center gap-3">
                    <Linkedin />
                    <Twitter />
                    <Facebook />
                </div>
            </div>
        </section>
    );
}
