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
    <html lang="is">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
      </head>
      <body
        className={`${montserrat.className} bg-black text-white flex justify-center items-center h-[100vh] w-[100vw]`}
      >
        <div
          id="main-content"
          className="w-full h-full max-w-screen-sm sm:max-h-screen overflow-y-scroll flex flex-col bg-winter"
        >
          <Header />
          <Providers>
            <main>{children}</main>
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
        </div>
      </body>
    </html>
  );
}
