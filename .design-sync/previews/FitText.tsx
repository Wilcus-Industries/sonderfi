import type { ReactNode } from "react";
import { FitText } from "sonderfi";

// FitText scales its glyphs to fill the parent width, so each cell gives it a
// fixed-width frame on the brand's black content surface (text-foreground).
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground" style={{ padding: 40 }}>
      <div style={{ width: 520, maxWidth: "100%" }}>{children}</div>
    </div>
  );
}

// Out-of-the-box look: the default font-playfair typeface.
export const Hero = () => (
  <Stage>
    <FitText>SONDERFI</FitText>
  </Stage>
);

// Real hero usage: bold sans filling the width ("ASK SONDER ANYTHING").
export const BoldSans = () => (
  <Stage>
    <FitText font="font-sans" className="font-bold">
      ASK SONDER ANYTHING
    </FitText>
  </Stage>
);

// Muted footer treatment (text-gray-600), as used for "WILCUS INDUSTRIES".
export const Muted = () => (
  <Stage>
    <FitText className="text-gray-600 font-bold">WILCUS INDUSTRIES</FitText>
  </Stage>
);
