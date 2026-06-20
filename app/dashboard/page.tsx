import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Dashboard() {
    const session = await auth.api.getSession({ headers: await headers() });

    return (
        <main className={"p-8 font-playfair"}>
            <h1 className={"text-2xl"}>Dashboard</h1>
            <p>{session ? `Signed in as ${session.user.email}` : "Not signed in"}</p>
        </main>
    );
}
