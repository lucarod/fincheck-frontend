import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface SelectContextValue {
  selectedValue: string;
  handleSelectValue: (value: string) => void;
}

const SelectContext = createContext({} as SelectContextValue);

export function SelectProvider({ children }: {children: ReactNode}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectValue = useCallback((value: string) => {
    setSelectedValue(value);
  }, []);

  return (
    <SelectContext.Provider value={{
      selectedValue,
      handleSelectValue,
    }}>
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  return useContext(SelectContext);
}
