import "./global.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/contexts/Providers";
import GithubIcon from "@/icons/GithubIcon";

export const metadata = {
  title: "Refaleikarnir",
  description: "Mest spennandi leikar allra tíma",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800"],
  display: "block",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </head>
      <body className={`${montserrat.className} bg-winter text-white`}>
        <Header />
        <Providers>
          <div className="mt-16">{children}</div>
        </Providers>
        <footer className="relative z-10">
          <a
            target="_blank"
            href="https://github.com/agirmar92/refaleikarnir"
            rel="noopener noreferrer"
            className="flex justify-center py-3 text-stone-300"
          >
            agirmar92/refaleikarnir
            <span className="ml-2">
              <GithubIcon />
            </span>
          </a>
        </footer>
      </body>
    </html>
  );
}
