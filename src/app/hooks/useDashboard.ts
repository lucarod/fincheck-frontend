import { useContext } from 'react';
import { DashboardContext } from 'src/app/contexts/DashboardContext';

export function useDashboard() {
  return useContext(DashboardContext);
}
