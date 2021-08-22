/**
 * This component lists technical courses that I have completed, looped from data/courses.js
 * It uses the ReactModal package to render the image url of the course certificate as a modal.
 */

import React, {useState} from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {Container} from '../styles/Container';
import {ButtonForm} from '../styles/Button';
import courses from '../data/courses';
import {useStyledDarkMode} from 'gatsby-styled-components-dark-mode';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  min-width: 0;
  min-height: 0;
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const CertImage = styled.img`
  width: 600px;
  z-index: 1;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Projects() {
  // Unable to make modal plugin work well with styled-components theme variables. Therefore in order to use consistent theming, I have used the dark mode custom hook to control styles
  const {isDark} = useStyledDarkMode(undefined);
  // Style object required by ReactModal package:
  const modalStyles = {
    overlay: {
      backgroundColor: isDark ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)',
    },
    content: {
      margin: '2rem',
      backgroundColor: isDark ? '#0d1117' : '#fff',
      borderColor: isDark ? '#21262d' : '#eaecef',
      borderWidth: '2px',
    },
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <h2>Courses</h2>
      {courses.map((data, index) => (
        <Wrapper key={index}>
          <Title>{data.courseName}</Title>
          <ButtonForm onClick={() => setModalVisible(true)}>Certificate</ButtonForm>
          <ReactModal
            isOpen={modalVisible}
            style={modalStyles}
            onRequestClose={() => setModalVisible(false)}
          >
            <CertImage
              src={data.certificate}
              alt={`A certificate for the course ${data.courseName}`}
            />
          </ReactModal>
        </Wrapper>
      ))}
    </Container>
  );
}
