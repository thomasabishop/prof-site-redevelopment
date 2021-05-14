/**
 * Display temporary component (spinner) before rendering component that requires external resource request
 */

import React from 'react';
import useRenderDelay from '../components/useRenderDelay';

export default function DelayRender(props) {
  const [show] = useRenderDelay(props.delayBySeconds);

  return <>{show ? props.permanentComponent : props.temporaryComponent}</>;
}
