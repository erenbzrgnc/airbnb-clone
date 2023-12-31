import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'


const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnb' ,
  description: 'AirBnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel='Sumbit' title='hello world!' isOpen/>
          <Navbar/ >
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
