import '../styles/globals.css'
import DefaultLayout from '../layouts/default'

//default layout
/* function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
} 
 */

//One Layout theme
const MyApp = ({ Component, pageProps }) => {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>

}

/* const MyApp = ({Component,pageProps}) =>{

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
} */
export default MyApp
