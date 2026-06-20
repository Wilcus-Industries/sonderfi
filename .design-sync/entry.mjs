// design-sync bundle entry — explicit named re-exports of SonderFi's React
// components. The converter's synth-entry uses `export * from <file>`, which
// drops default exports; these components are mostly default-exported, so the
// entry is hand-authored to surface them under stable names on window.Sonderfi.
// @/ aliases resolve via tsconfig compilerOptions.paths (tsconfigPathsPlugin).
export { default as FitText } from "@/component/fitText";
export { Logo, LogoFull, LogoWilcus } from "@/component/logo";
export { default as NavbarItem } from "@/component/navbarItem";
export { default as Navbar } from "@/component/navbar";
export { default as SignInButton } from "@/component/signInButton";
export { default as Parallax } from "@/component/parallax";
