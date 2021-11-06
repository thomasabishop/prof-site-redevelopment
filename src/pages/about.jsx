import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { Container } from "../styles/Container";
import Freelance from "../components/Freelance";
import Salaried from "../components/Salaried";
export default function Posts() {
  return (
    <MainTemplate>
      <Container>
        <h1>About</h1>
        <p>
          I was born in 1988 and grew up in south London. I was educated at
          Wimbledon College (2001-2006) and studied philosophy at the University
          of Warwick (2006-2009).
        </p>
        <p>
          Later I trained as a primary school teacher, completing my
          Postgraduate Certificate of Education at Middlesex University{" "}
          (2011-2012). I taught in schools throughout south London for several
          years and then taught myself how to code and switched to web
          development, later software engineering.
        </p>
        <p>
          In my free time, outside of computing and improving my technical
          knowledge, I enjoy reading popular science, philosophy and
          science-fiction; listening to podcasts and electronica / heavy metal;
          spending time with Staffies; lifting weights and thinking about
          politics.
        </p>
      </Container>
      <Salaried />

      <Freelance />
    </MainTemplate>
  );
}
