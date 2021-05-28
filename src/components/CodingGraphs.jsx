import React from 'react';
import Spinner from './Spinner';
import DelayRender from './DelayRender';
import { Container } from '../styles/Container';
import HoursChartJs from '../components/graphs/HoursChartJs';
import LanguagesChartJs from '../components/graphs/LanguagesChartJs';

export default function CodingGraphs() {
  return (
    <Container>
      <h2>Coding activity this month</h2>
      <DelayRender
        delayBySeconds={2}
        permanentComponent={<HoursChartJs />}
        temporaryComponent={<Spinner />}
      />
      <DelayRender
        delayBySeconds={2}
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
