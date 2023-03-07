import { SessionProvider, useSession } from 'next-auth/react';
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
