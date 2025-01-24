"use client";

import { User } from "@supabase/supabase-js";
import { supabase } from "~/supabase/client";
import { useRouter } from "next/navigation";

export function AuthWidget({ user }: { user: User | null }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return user ? (
    <div className="flex items-center gap-4 text-white">
      <span>{user.email}</span>
      <button
        onClick={handleLogout}
        className="rounded-xl bg-white/10 px-4 py-2 transition hover:bg-white/20"
      >
        Logout
      </button>
    </div>
  ) : null;
} 