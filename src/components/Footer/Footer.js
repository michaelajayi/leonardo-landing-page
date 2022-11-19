import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import leonardoLogo from "../../assets/img/leonardo-logo.png";

import rightFooterBg from "../../assets/img/right-footer-bg.jpeg";
import leftFooterBg from "../../assets/img/left-footer-bg.jpeg";

import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className='footer-container px-0' id='footer'>
      <Row className='align-items-stretch'>
        <Col lg={8} className='d-flex flex-column justify-content-between'>
          <div className='d-flex flex-column gap-4 mx-4'>
            <div className='footer-social-links d-flex gap-2 px-5 pt-4'>
              <a
                href='https://www.linkedin.com/company/sujimoto-construction-limited'
                className='hero__social-link'
                target='_blank'
                rel='noreferrer'
              >
                In.
              </a>
              <a
                href='https://www.facebook.com/motoconstructionng'
                className='hero__social-link'
                target='_blank'
                rel='noreferrer'
              >
                Fb.
              </a>
              <a
                href='https://www.youtube.com/channel/UC1Q3PEh495SxXY-npjegTkg'
                className='hero__social-link'
                target='_blank'
                rel='noreferrer'
              >
                Yt.
              </a>
            </div>
            <Image
              src={leonardoLogo}
              alt='lucrezia-logo-text'
              className='footer-leonardo-logo px-5'
            />
          </div>
          <Form className='footer-form d-flex flex-column py-5'>
            <p className='send-msg-btn bg-accent border-0 shadow-none rounded-0 text-white'>
              Send us a message
            </p>
            <Form.Group className='mb-3' controlId='fullName'>
              <Form.Control
                type='text'
                placeholder='Full Name'
                className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2'
              />
            </Form.Group>
            <Row>
              <Col lg={6}>
                <Form.Group className='mb-3' controlId='email'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2'
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className='mb-3' controlId='phone'>
                  <Form.Control
                    type='text'
                    placeholder='Phone'
                    className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className='mb-3 mt-4' controlId='message'>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder='Type message'
                className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2 mb-3'
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className='footer-send-btn border-0 shadow-none align-self-auto align-self-md-end'
            >
              Send
            </Button>
          </Form>
        </Col>
        <Col lg={4} className='px-0 d-none d-lg-block'>
          <Image
            src={rightFooterBg}
            alt='right-footer-img'
            className='right-footer-img'
            style={{ height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
