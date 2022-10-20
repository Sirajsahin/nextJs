// import Footer from '../component/Shared/Footer'
import Header from '../component/Shared/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log('siaraj')
  // console.log({Component})
  // console.log(pageProps)

  return (
    <>
     <Header />
     <Component {...pageProps} />
     {/* <Footer /> */}
    </>
  ) 
}

export default MyApp
