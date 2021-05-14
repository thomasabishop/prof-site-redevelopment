import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Container';
import { ButtonMain } from '../styles/Button';
const Wrapper = styled.div`
  margin-top: 1.5rem;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 6px;
  padding: 1.5rem;
`;

const FormInput = styled.input`
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

const FormMessage = styled.textarea`
  color: ${({ theme }) => theme.fontColor};
  border-color: ${({ theme }) => theme.borders};
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

export default function ContactForm() {
  return (
    <Container>
      <h2>Contact</h2>
      <Wrapper>
        <form style={{ marginBottom: '0' }}>
          <FormInput placeholder="Name" type="text" id="name" />
          <FormInput placeholder="Email" type="email" id="email" />
          <FormMessage placeholder="Your message" type="text" id="message" />
          <p style={{ fontSize: '14px', fontWeight: '300' }}>
            If you prefer not to send details via the form, you can contact me
            at tactonbishop[at]gmail.com
          </p>
          <ButtonMain>Submit</ButtonMain>
        </form>
      </Wrapper>
    </Container>
  );
}
