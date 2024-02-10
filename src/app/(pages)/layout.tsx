import NFCHeader from '@/components/NFCHeader/NFCHeader'
import NFCMobileNav from '@/components/NFCMobileNav/NFCMobileNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div className="min-h-screen">
            <div className="absolute top-0 w-screen h-16 bg-nblg-500 dark:bg-nblg-700"></div>
            <div className="sticky top-0 hidden sm:flex z-50">
                <NFCHeader />
            </div>
            <div className="sticky top-0 flex sm:hidden z-50">
                <NFCMobileNav />
            </div>
            {children}
        </div>
  )
}
