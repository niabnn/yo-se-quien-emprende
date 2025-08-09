import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yo sé, quién emprende',
  description: 'Yo Sé Quién Emprende es una aplicación web creada con el objetivo de incentivar y visibilizar los emprendimientos de la ciudad de Medellín. Permite a los usuarios explorar, conocer y localizar emprendimientos, acceder a su información, y visitar sus páginas para apoyarles. Asimismo, ofrece a los emprendedores la posibilidad de registrarse y administrar la información de sus negocios (funcionalidad en desarrollo).',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
