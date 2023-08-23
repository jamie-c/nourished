import Copyright from '@/components/Copyright'
import FooterLinks from '@/components/FooterLinks'
import type { Metadata } from 'next'
import { transatStandard } from './fonts/fonts'
import './globals.css'

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
      <body className={`${transatStandard.className}`}>
        {children}
        <footer className="pb-32 w-screen flex flex-col items-center justify-start">
          <Copyright />
          <FooterLinks />
        </footer>
      </body>

    </html>
  )
}
