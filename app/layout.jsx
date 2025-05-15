export const metadata = {
  title: 'Viktoria Portfolio',
  description: 'Portfolio of Viktoria Nikolaeva',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}