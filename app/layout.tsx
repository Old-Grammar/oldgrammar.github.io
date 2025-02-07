import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Old Grammar | %s",
    default: "Old Grammar",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <head>
            <meta
              name="format-detection"
              content="telephone=no, date=no, email=no, address=no"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              name="format-detection"
              content="telephone=no, date=no, email=no, address=no"
            />
            <link rel="stylesheet" href="https://use.typekit.net/zuh8lpn.css" />
          </head>
          <body>
            {children}
          </body>
        </html>
  );
}
