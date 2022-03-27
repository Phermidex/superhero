// Packages
import * as React from 'react';
import { ThemeProvider, Container, Row, Col } from 'react-bootstrap';

function Layout(props) {
  return (
    <ThemeProvider>
      <Container className="bg-dc" fluid>
        <Row>
          <Col>
            {props.children}
          </Col>
         </Row>
      </Container>
    </ThemeProvider>
  );
}

export default Layout;