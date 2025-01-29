import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import NavbarWrapper from '@/components/NavbarWrapper'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kanban Board',
  description: 'A simple kanban board'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen antialiased`}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  )
}
