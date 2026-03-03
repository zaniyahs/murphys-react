'use client';
import { Container, Row, Col } from 'react-bootstrap';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopMenu />
      <Container fluid id="centerText" className="d-flex align-items-center justify-content-center">
        <Row className="text-center">
          <Col>
            <h1>Now accepting reservations for St Patrick's Day</h1>
            <h1>Please call 808-531-0422 for reservations</h1>
            <h1>St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}