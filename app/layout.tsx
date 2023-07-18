import "./global.css";
import Header from "@/components/Header";
import GithubIcon from "@/icons/GithubIcon";

export const metadata = {
  title: "Refaleikarnir",
  description: "Mest spennandi leikar allra tíma",
};

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
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-winter text-white">
        <Header />
        {children}
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
