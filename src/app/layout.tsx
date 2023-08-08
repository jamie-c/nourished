import Copyright from '@/components/Copyright'
import FooterLinks from '@/components/FooterLinks'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const transat = localFont({
  src: './fonts/transat/TransatStandard.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nourished Co',
  description: 'Functional Nutrition Consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={transat.className}>
        {children}
        <footer className="pb-32 w-screen flex flex-col items-center justify-start">
          <Copyright />
          <FooterLinks />
        </footer>
      </body>

    </html>
  )
}
