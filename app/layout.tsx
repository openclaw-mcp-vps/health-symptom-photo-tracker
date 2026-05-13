import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SymptomSnap – Track Visual Health Symptoms with Photo Timeline',
  description: 'Photograph skin conditions, wounds, and rashes. Automatic progression tracking, reminder scheduling, and easy doctor sharing.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="04b8254b-d4c0-43da-9abc-09e3ea09ed2d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
