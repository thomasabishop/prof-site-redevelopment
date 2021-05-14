/**
 * Custom hook to delay rendering for n seconds. Use in combination with Delay Render component, to toggle two components based status of the delay
 */

import { useState, useEffect } from 'react';

export default function useRenderDelay(delay) {
  const [renderDelay, setRenderDelay] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setRenderDelay(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return [renderDelay, setRenderDelay];
}
