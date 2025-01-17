import 'bootstrap/dist/css/booststrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ pageProps, Component }: AppProps) {
    return (
        <>
            <Head>
                <meta name='viewport'
                    content='width=device-width, initial-scale=1' />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
export default MyApp