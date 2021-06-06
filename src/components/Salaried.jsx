import React from "react"
import salaried from "../data/salaried"
import { Container } from "../styles/Container"

export default function Salaried() {
  return (
    <Container>
      <h2>Employment</h2>
      {salaried.map((data, index) => (
        <div key={index}>
          <h4 className="job-listing-title">{data.jobTitle}</h4>
          <a href={data.linkUrl}>{data.linkText}</a>
          <p>
            <i>{data.dates}</i>
          </p>
          <p>{data.description}</p>
        </div>
      ))}
    </Container>
  )
}
