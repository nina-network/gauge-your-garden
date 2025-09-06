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
          <div className="description">
            <p>Welcome to the app for plant lovers!</p>
            <p>I created this app to help my relatives who're interested in gardening.</p>
            <p>Here, you will be able to journal the data of your plant growth based on height which will be predicted for your future use.</p>
            <p>This app will be mobile-friendly and include:</p>

            <ul>
              <li>Plant Information and Identification</li>
              <li>Journaling and Prediction</li>
              <li>Interaction with Other Users</li>
            </ul>
          </div>

          <p>Orange Tree - Plant 1</p>
          <div className="d-flex justify-content-center align-items-center gap-2"> 
            <Button variant="transparent">&#8249;</Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th scope="row">Date</th>
                  <th scope="row">Height (Inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jul 7, 2025</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Sep 5, 2025</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Nov 10, 2025</td>              
                  <td>30</td>
                </tr>
                <tr>
                  <td colSpan={2} className="align-middle text-center"><Button variant="transparent" >&#43;</Button></td>
                </tr>
              </tbody>
            </Table>
            
            <Button variant="transparent">&#8250;</Button>
          </div>
          
          <Button variant="success">Add Another Plant</Button>
          

        </main>

        <Footer />

      </div>

    </>
  );
}
