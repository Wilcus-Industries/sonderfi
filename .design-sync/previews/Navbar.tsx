import { Navbar } from "sonderfi";

// Fixed HOME / DASHBOARD / ABOUT row. Playfair links in text-background (black)
// on the green hero, matching the app's header.
export const Default = () => (
  <div className="bg-green-500 text-background" style={{ paddingBottom: 24 }}>
    <Navbar />
  </div>
);
