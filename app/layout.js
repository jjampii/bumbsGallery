import { Sedgwick_Ave, Inter} from 'next/font/google'
import './globals.css'

const DancingScript = Sedgwick_Ave({ subsets: ['latin'], weight : ['400'] })


export const metadata = {
  title: 'Bumbs Gallery',
  description: 'digital photo gallery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DancingScript.className}>{children}</body>
    </html>
  )
}
