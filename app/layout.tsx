import type { ReactNode } from "react";

// The real <html>/<body> live in app/[lang]/layout.tsx so the lang
// attribute can reflect the active locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
