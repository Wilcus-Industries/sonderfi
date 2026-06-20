"use client";

import { authClient } from "@/lib/auth-client";

export default function SignInButton({ icon, provider } : {
    icon: React.ReactNode,
    provider?: "google" | "apple"
}) {

    const handleSignIn = () => {
        if (!provider) return; // inert until a provider is wired (e.g. Apple)
        authClient.signIn.social({ provider, callbackURL: "/dashboard" });
    };

    return (
        <div onClick={handleSignIn} className={`bg-background text-foreground w-42 flex flex-row items-center
                         justify-center gap-1 h-10 hover:bg-foreground text-xl 
                         hover:text-background transition-colors duration-300
                         cursor-pointer `}>
            <h1 className={"font-playfair"}>
                SIGN IN WITH
            </h1>
            <div>
                {icon}
            </div>
        </div>
    );
}
