"use client";

import { supabase } from "~/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="w-full max-w-md space-y-4 rounded-xl bg-white/10 p-8">
        <h2 className="text-center text-3xl font-bold text-white">Sign In</h2>
        <button
          onClick={handleGitHubLogin}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-bold text-white transition hover:bg-white/20"
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
} 