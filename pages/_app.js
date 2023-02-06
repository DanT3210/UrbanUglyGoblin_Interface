import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis';
import Header from '../components/Header';
import MyFooter from '../components/MyFooter';
import NonSSRWrapper from '../components/NonSSRWrapper';

function MyApp({ Component, pageProps }) {

  return(<MoralisProvider initializeOnMount={false}>
    <NonSSRWrapper>
    <Header/>
     <Component {...pageProps} />
    <MyFooter/> 
    </NonSSRWrapper>
  </MoralisProvider>)
}

export default MyApp
