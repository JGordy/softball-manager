import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    manifest: '/manifest.json',
    title: 'Softball League Manager',
    description: 'All-in-One softball league and team manager.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav>
                    <h1>Softball Manager</h1>
                </nav>
                {children}
            </body>
        </html>
    )
}
