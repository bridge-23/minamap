import '@/styles/globals.css'
import '@/styles/map.page.css';
import type { AppProps } from 'next/app'

import './reactCOIServiceWorker';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
