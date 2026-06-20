import { LogoWilcus } from "sonderfi";

// Mark + "SonderFi | by Wilcus Industries" co-brand lockup, on the green hero
// surface. Inner mark SVG sized via the scoped <style>.
export const Default = () => (
  <div className="bg-green-500 text-background flex items-center" style={{ padding: 40 }}>
    <style>{`.sf-lw svg{width:56px;height:56px;display:block}`}</style>
    <div className="sf-lw">
      <LogoWilcus />
    </div>
  </div>
);
