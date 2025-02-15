import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { AuthWidget } from "~/components/auth-widget";
import { createClient } from "~/supabase/server";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="absolute right-4 top-4">
            <AuthWidget user={data.user} />
          </div>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
