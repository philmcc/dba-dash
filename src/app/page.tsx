import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            DBA <span className="text-[hsl(280,100%,70%)]">Dashboard</span>
          </h1>
          
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/login"
              className="rounded-xl bg-white/10 px-8 py-4 font-bold text-white no-underline transition hover:bg-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
