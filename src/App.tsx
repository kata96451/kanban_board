import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Col, Row, Button, Card, Stack } from 'react-bootstrap';

function BasicExample () {
  return (
    <Container>
      <Stack direction="horizontal" gap={3} style={{ marginBottom: '10px' }}>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Submit</Button>
      </Stack>

      <Row>
        <Col>
          <Card>
            <Card.Header>To do</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>In Progress</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Done</Card.Header>
            <Card.Body>
              <Card style={{ marginBottom: '10px' }}>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>

              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default BasicExample;

// import React from 'react';
// import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import { Container, Grid } from 'semantic-ui-react';

// export const App: React.FC = () => {
//   return (
//     <Container>
//       <Grid columns={3} divided>
//         <Grid.Row>
//           <Grid.Column>
//             yuguh
//           </Grid.Column>
//           <Grid.Column>
//             ijhk
//           </Grid.Column>
//           <Grid.Column>
//             jhyjgjhk
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Container>
//   );
// };

// export default App;
