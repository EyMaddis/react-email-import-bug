import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Email from '../../emails'

// This works!
console.log('Hello Email Template!', Email)

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Email />
    <Component {...pageProps} />
  </>
}
