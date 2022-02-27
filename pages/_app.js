import Page from "../layout/page";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import Script from "next/script";
import { initInterceptors } from "../common/interceptors";
import { ToastContainer } from "react-toastify";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

initInterceptors();

const client = new ApolloClient({
  uri: process.env.THEGRAPH_ENDPOINT,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => <Page>{page}</Page>);

  return (
    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {getLayout(<Component {...pageProps} />)}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          src="https://www.facebook.com/tr?id=193779112946468&ev=PageView&noscript=1"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '193779112946468');
            fbq('track', 'PageView');
          `}
        </Script>
      </Web3ReactProvider>
    </ApolloProvider>
  );
}

const getLibrary = (provider) => {
  return new Web3(provider);
};

export default MyApp;
