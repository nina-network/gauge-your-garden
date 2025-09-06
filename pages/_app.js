import Header from '@components/Header';
import '@styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
