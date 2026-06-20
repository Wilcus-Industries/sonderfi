import type { ReactNode } from "react";
import { NavbarItem } from "sonderfi";

// A single centered Playfair nav link. Renders in text-background (black) on
// the green hero, as it appears inside Navbar.
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-green-500 text-background flex flex-row" style={{ padding: 24 }}>
      {children}
    </div>
  );
}

export const Single = () => (
  <Stage>
    <NavbarItem title="HOME" href="#" />
  </Stage>
);

export const Row = () => (
  <Stage>
    <NavbarItem title="HOME" href="#" />
    <NavbarItem title="DASHBOARD" href="#" />
    <NavbarItem title="ABOUT" href="#" />
  </Stage>
);
