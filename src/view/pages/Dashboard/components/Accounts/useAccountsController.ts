import { useState } from 'react';

import { useWindowWidth } from 'src/app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const windowWidth = useWindowWidth();
  const {
    areValuesVisible,
    toggleValuesVisibility,
    openNewAccountModal,
  } = useDashboard();

  const slidesPerViewValue =
    windowWidth >= 1024 || windowWidth < 768 && windowWidth >= 425
      ? 2.15
      : 1.25;

  return {
    sliderState,
    setSliderState,
    slidesPerViewValue,
    areValuesVisible,
    toggleValuesVisibility,
    openNewAccountModal,
    isLoading: false,
    accounts: [],
  };
}
