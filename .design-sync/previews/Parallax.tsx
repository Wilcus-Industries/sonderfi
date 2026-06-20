import { Parallax } from "sonderfi";

// Parallax applies scroll-linked vertical drift to its children; the motion
// only appears while the page scrolls. This static card frames a representative
// content block on the brand's black surface — the drift offset at rest is
// kept inside the panel (fixed height + overflow hidden) so it reads as the
// positioned hero content rather than spilling out.
export const WrappedContent = () => (
  <div
    className="bg-background text-foreground"
    style={{
      padding: 32,
      minHeight: 180,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <Parallax distance={40}>
      <small className="font-sans">AUTOMATIONS ✦ RESEARCH</small>
      <h1
        className="font-playfair font-bold"
        style={{ fontSize: 30, lineHeight: 1.1, margin: 0, maxWidth: 560 }}
      >
        AGENTIC FINANCIAL TECHNOLOGY
      </h1>
    </Parallax>
  </div>
);
