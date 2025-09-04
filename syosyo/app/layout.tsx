import type { Metadata } from "next";
import "./globals.css";
import "../styles/main.css";
import Image from "next/image";
import FadeInit from "./FadeInit";

export const metadata: Metadata = {
  title: "syosyo.info",
  description: "syosyo project website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <FadeInit />  {/* ← クライアント側で初期化 */}
        <header>
          <Image
            className="header-logo"
            src="/img/logo.png"
            alt="syosyo logo"
            width={3984}
            height={1600}
            priority
          />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}