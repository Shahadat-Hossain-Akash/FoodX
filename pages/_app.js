import Layout from '../view/Layout';
import '../styles/globals.css'
import shop from "../redux/shop";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={shop}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </Provider>
  );
}

export default MyApp
