import Head from 'next/head'
import Footer from '@components/Footer'
import { Button, Table} from 'react-bootstrap'


export default function Home() {
  return (
    <>
      <div className="container">
        
        <Head>
          <title>Gauge Your Garden</title>
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon_gyg.png" />
        </Head>
        
        <main>
          
          <p>Welcome to the app for plant lovers!</p>
          <p>I created this app to help my relatives who're interested in gardening.</p>
          <p>Here, you will be able to journal the data of your plant growth based on height which will be predicted for your future use.</p>
          <p>This app will be mobile-friendly and include:</p>

          <ul>
            <li>Plant Information and Identification</li>
            <li>Journaling and Prediction</li>
            <li>Interaction with Other Users</li>
          </ul>

        </main>

        <Footer />

      </div>

    </>
  );
}
