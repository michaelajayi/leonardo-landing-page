import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import toast from "react-hot-toast";
import leonardoLogo from "../../assets/img/leonardo-logo.png";
import rightFooterBg from "../../assets/img/right-footer-bg.jpeg";
// import {apiEndpoint, liveApiEndpoint} from "../../utils/constants"
import { liveApiEndpoint } from "../../utils/constants";
import "./Footer.css";

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = contact;

  const [validated, setValidated] = useState(false);

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setLoading(false);
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      onSaveContact();
      clearForm();
      setValidated(false);
    }
  };

  const onSaveContact = async () => {
    try {
      const res = await axios.post(`${liveApiEndpoint}/email-service`, {
        contact,
        reqFrom: "leonardo",
      });
      toast.success(res.data.msg);
      clearForm();
      setValidated(false);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.msg);
      setLoading(false);
    }
  };

  const clearForm = () => {
    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Container
      name='footer'
      fluid
      className='footer-container px-0'
      id='footer'
    >
      <Row className='align-items-stretch'>
        <Col lg={8} className='d-flex flex-column justify-content-between'>
          <div className='d-flex flex-column gap-4 mx-4'>
            <div className='footer-social-links d-flex gap-2 px-5 pt-4'>
              <a
                href='https://www.linkedin.com/company/sujimoto-construction-limited'
                className='hero__social-link text-light'
                target='_blank'
                rel='noreferrer'
              >
                In.
              </a>
              <a
                href='https://www.facebook.com/motoconstructionng'
                className='hero__social-link text-light'
                target='_blank'
                rel='noreferrer'
              >
                Fb.
              </a>
              <a
                href='https://www.youtube.com/channel/UC1Q3PEh495SxXY-npjegTkg'
                className='hero__social-link text-light'
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
          <Form
            noValidate
            validated={validated}
            // required
            className='footer-form py-5 d-flex flex-column'
            onSubmit={handleSubmit}
          >
            <p className='send-msg-btn bg-accent border-0 shadow-none rounded-0 text-white'>
              Send us a message
            </p>

            <Form.Group className='mb-3' controlId='fullName'>
              <Form.Control
                type='text'
                placeholder='Full Name'
                name='name'
                value={name}
                required
                onChange={onChange}
                className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2'
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a name
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col lg={6}>
                <Form.Group className='mb-3' controlId='email'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    value={email}
                    name='email'
                    required
                    onChange={onChange}
                    className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please provide a valid email
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className='mb-3' controlId='phone'>
                  <Form.Control
                    type='text'
                    minLength={11}
                    maxLength={11}
                    name='phone'
                    onChange={onChange}
                    value={phone}
                    required
                    placeholder='Phone e.g. 080 123 4569'
                    className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please provide a valid phone
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className='mb-3 mt-4' controlId='message'>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder='Type message'
                required
                name='message'
                value={message}
                onChange={onChange}
                className='footer-form__control shadow-none border-0 rounded-0 py-2 px-2 mb-3'
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a message
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className='footer-send-btn border-0 shadow-none align-self-auto align-self-md-end'
            >
              {loading ? <Spinner animation='border' size='sm' /> : "Send"}
            </Button>
          </Form>
        </Col>
        <Col lg={4} className='px-0 d-none d-lg-block'>
          <Image
            src={rightFooterBg}
            alt='right-footer-img'
            className='right-footer-img'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
