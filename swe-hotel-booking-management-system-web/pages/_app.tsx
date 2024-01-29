import NavBar from '@/components/layout/Nav';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from './index'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Header/> 
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
