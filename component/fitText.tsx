"use client";

import { useEffect, useRef, useState } from "react";

// Scales its glyphs to fill the parent's width: the SVG viewBox is framed to the text's
// measured bounding box, so width="100%" lets the browser scale the glyphs fluidly on resize.
export default function FitText({ children, className, font = "font-playfair" }: {
    children: string,
    // Text-presentation utilities applied directly to the painted <text>: weight (font-bold),
    // style (italic), color (text-gray-600 -> currentColor fill), tracking, etc. Applied on the
    // glyphs themselves so they take effect without relying on SVG cascade.
    className?: string,
    // Class(es) that choose the typeface, applied to <text> before `className`. Defaults to the
    // Tailwind `font-playfair` utility so existing call sites are unaffected. Pass any font-*
    // family utility (e.g. "font-sans", "font-mono", or a custom font-* token registered in
    // @theme inline). Keep weight/style/color in `className`, not here.
    font?: string,
}) {
    const textRef = useRef<SVGTextElement>(null);
    const [viewBox, setViewBox] = useState<string | null>(null);

    // Family first, then the consumer's presentation utilities — both land on <text> so weight
    // (font-bold), style, and color apply to the glyphs directly, not via fragile inheritance.
    const textClassName = [font, className].filter(Boolean).join(" ");

    useEffect(() => {
        let cancelled = false;
        const measure = () => {
            const t = textRef.current;
            if (!t || cancelled) return;
            const bb = t.getBBox();
            setViewBox(`${bb.x} ${bb.y} ${bb.width} ${bb.height}`);
        };
        measure();
        // Re-measure once webfonts load (their metrics change the bbox). document.fonts.ready
        // resolves when ALL loaded faces are ready, so any chosen font is covered.
        document.fonts?.ready.then(measure);
        return () => { cancelled = true; };
        // Re-run when text or any class changes — weight/family/style all alter the bbox.
    }, [children, textClassName]);

    return (
        <svg
            width="100%"
            viewBox={viewBox ?? undefined}
            preserveAspectRatio="xMidYMid meet"
            style={{ display: "block", visibility: viewBox ? "visible" : "hidden" }}
        >
            <text ref={textRef} x={0} y={0} fill="currentColor" className={textClassName}>
                {children}
            </text>
        </svg>
    );
}
