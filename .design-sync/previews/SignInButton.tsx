import type { ReactNode } from "react";
import { SignInButton } from "sonderfi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

// Black pill (bg-background) with a light label (text-foreground) and a provider
// icon, on the green hero where the app's sign-in CTAs live.
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-green-500 flex flex-row gap-2 items-center" style={{ padding: 32 }}>
      {children}
    </div>
  );
}

// Wired to Google OAuth (callbackURL "/dashboard").
export const Google = () => (
  <Stage>
    <SignInButton icon={<FcGoogle />} provider="google" />
  </Stage>
);

// No provider — inert until one is wired (the app's Apple CTA).
export const Apple = () => (
  <Stage>
    <SignInButton icon={<FaApple />} />
  </Stage>
);

export const Pair = () => (
  <Stage>
    <SignInButton icon={<FcGoogle />} provider="google" />
    <SignInButton icon={<FaApple />} />
  </Stage>
);
