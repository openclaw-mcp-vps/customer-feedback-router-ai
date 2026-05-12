import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRouter AI — Route feedback to right team instantly',
  description: 'AI categorizes customer feedback and routes to appropriate team members with context. Built for customer success teams, product managers, and startup founders.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d8f2bd4b-c0c4-4ff7-9fb7-48bcf9995f1f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
