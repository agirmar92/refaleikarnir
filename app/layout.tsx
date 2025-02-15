import './global.css'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Refaleikarnir',
  description: 'Mest spennandi leikar allra tíma',
  openGraph: {
    siteName: 'Refaleikarnir',
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '600', '800'],
  display: 'block',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
        className={`${montserrat.className} bg-[url(/fox_bg.jpg)] bg-fixed bg-tile text-white flex justify-center items-center w-[100vw]`}
      >
        <div
          id="main-content"
          className="w-full h-full max-w-(--breakpoint-sm) flex flex-col bg-winter"
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
