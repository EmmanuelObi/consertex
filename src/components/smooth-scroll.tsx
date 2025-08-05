"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }, []);

    return children;
};

export default SmoothScroll;
