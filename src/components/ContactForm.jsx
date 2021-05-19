import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '../styles/Container';
import { ButtonForm } from '../styles/Button';
const Wrapper = styled.div`
  margin-top: 1.5rem;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 6px;
  padding: 1.5rem;
`;

const formField = css`
  border-color: ${({ theme }) => theme.borders};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 6px;
  border-width: 1px;
  background: transparent;
  width: 100%;
  border-style: solid;
  box-shadow: none;
  margin: 0.5rem 0;
  padding: 0.3rem;
  text-indent: 10px;
  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }
`;

const Input = styled.input`
  ${formField}
`;

const TextArea = styled.textarea`
  ${formField}
`;
export default function ContactForm() {
  return (
    <Container>
      <h2 id="contact">Contact</h2>
      <Wrapper>
        <form
          name="contact-form-thomas"
          method="POST"
          data-netlify="true"
          action="/form-confirmation"
          style={{ marginBottom: '0' }}
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="contact-form-thomas" value="contact" />
          <Input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            required
          />
          <Input
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            required
          />
          <TextArea
            placeholder="Your message"
            id="message"
            name="message"
            required
          />
          <p style={{ fontSize: '14px', fontWeight: '300' }}>
            If you prefer not to send details via the form, you can contact me
            at tactonbishop[at]gmail.com
          </p>
          <ButtonForm type="submit">Submit</ButtonForm>
        </form>
      </Wrapper>
    </Container>
  );
}
