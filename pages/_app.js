import store from '../store'
import { Provider } from 'react-redux'
import Script from 'next/script'
import '../styles/globals.css'

store.subscribe(() => console.log("subscribed"))

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Script 
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      ></Script>
      <Script id="google-analytics-script"
        strategy='lazyOnload'
      >
        {
          `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', "${process.env.NEXT_PUBLIC_GOOOGLE_ANALYTICS_MEASUREMENT_ID}");
      `
        }
      </Script>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
