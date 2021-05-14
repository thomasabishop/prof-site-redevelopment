import React from 'react';
import Spinner from '../components/Spinner';
import DelayRender from '../components/DelayRender';
import { Container } from '../styles/Container';
import HoursChartJs from '../graphs/HoursChartJs';
import LanguagesChartJs from '../graphs/LanguagesChartJs';

export default function CodingGraphs() {
  return (
    <Container>
      <h2>Coding activity this month</h2>
      <DelayRender
        delayBySeconds={4}
        permanentComponent={<HoursChartJs />}
        temporaryComponent={<Spinner />}
      />
      <DelayRender
        delayBySeconds={4}
        permanentComponent={<LanguagesChartJs />}
        temporaryComponent={<Spinner />}
      />

      <p style={{ textAlign: 'center', fontSize: '14px' }}>
        Data is live and sourced from the{' '}
        <a href="https://wakatime.com">WakaTime</a> API.
      </p>
    </Container>
  );
}
