import { store } from '@/store/store'
import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'
import '@/styles/articles.css'
import '../styles/atropos.css'

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  )
}
