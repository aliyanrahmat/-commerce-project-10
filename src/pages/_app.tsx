import Footer from '@/components/Footer'
import Navebar from '@/components/Navebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <> <Navebar/><Component {...pageProps} /> <Footer /> </>
}
