import React from 'react';
import { Container } from '../styles/Container';
import HoursChartJs from '../graphs/HoursChartJs';
import LanguagesChartJs from '../graphs/LanguagesChartJs';
export default function CodingGraphs() {
  return (
    <Container>
      <h2>Coding activity this month</h2>
      <HoursChartJs />
      <LanguagesChartJs />
      <p style={{ textAlign: 'center', fontSize: '14px' }}>
        Data is live and sourced from the{' '}
        <a href="https://wakatime.com">WakaTime</a> API.
      </p>
    </Container>
  );
}
