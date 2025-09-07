

export default function Journal() {
    return (
        <>
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
        </>
    );
}