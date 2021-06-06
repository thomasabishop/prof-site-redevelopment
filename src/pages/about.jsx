import React from "react"
import MainTemplate from "../templates/MainTemplate"
import { Container } from "../styles/Container"
import Freelance from "../components/Freelance"
import Salaried from "../components/Salaried"
export default function Posts() {
  return (
    <MainTemplate>
      <Container>
        <h1>About</h1>
        <p>
          I was born in 1988 and grew up in south/central London. I was educated
          at <b>Wimbledon College</b> (2001-2006) and studied philosophy at the{" "}
          <b>University of Warwick</b> (2006-2009).
        </p>
        <p>
          Later I trained as a primary school teacher, completing my
          Postgraduate Certificate of Education at <b>Middlesex University</b>{" "}
          (2011-2012). I taught in schools throughout south London for several
          years and then taught myself how to code and switched to web
          development. I have worked as a developer in both a salaried and
          freelance capacity. I now work exclusively as a frontend software
          engineer in Scotland.
        </p>
        <p>
          In my free time, outside of computing and improving my technical
          knowledge, I enjoy reading popular science, philosophy and
          science-fiction; learning languages; listening to podcasts and
          electronic/heavy metal music; spending time with Staffies; lifting
          weights and exploring Scotland.
        </p>
      </Container>
      <Salaried />

      <Freelance />
    </MainTemplate>
  )
}
