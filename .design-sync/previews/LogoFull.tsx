import { LogoFull } from "sonderfi";

// Mark + "SonderFi" wordmark lockup. Black mark + text on the green hero
// surface. The inner mark SVG is dimensionless; the scoped <style> sizes it to
// sit beside the wordmark.
export const Default = () => (
  <div className="bg-green-500 text-background flex items-center" style={{ padding: 40 }}>
    <style>{`.sf-lf svg{width:56px;height:56px;display:block}`}</style>
    <div className="sf-lf">
      <LogoFull />
    </div>
  </div>
);
