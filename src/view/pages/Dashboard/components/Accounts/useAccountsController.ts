import { useState } from 'react';
import { useWindowWidth } from 'src/app/hooks/useWindowWidth';

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  const windowWidth = useWindowWidth();

  return { sliderState, setSliderState, windowWidth };
}
