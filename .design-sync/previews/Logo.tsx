import type { ReactNode } from "react";
import { Logo } from "sonderfi";

// The atom mark strokes with var(--background) (black), so it reads on the
// brand's green hero — its real backdrop in the app (bg-green-500). The mark
// SVG ships without intrinsic dimensions, so a scoped <style> sizes it.
function Stage({ size, children }: { size: number; children: ReactNode }) {
  return (
    <div className="bg-green-500 flex items-center justify-center" style={{ padding: 48 }}>
      <style>{`.sf-logo-frame svg{width:100%;height:100%;display:block}`}</style>
      <div className="sf-logo-frame" style={{ width: size, height: size }}>
        {children}
      </div>
    </div>
  );
}

export const Mark = () => (
  <Stage size={220}>
    <Logo />
  </Stage>
);

export const Small = () => (
  <Stage size={96}>
    <Logo />
  </Stage>
);
