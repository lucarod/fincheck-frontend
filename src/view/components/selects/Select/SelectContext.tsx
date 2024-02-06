import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface SelectContextValue {
  selectedValue: string;
  handleSelectValue: (value: string) => void;
  error?: string;
}

interface SelectProviderProps {
  defaultValue?: string;
  children: ReactNode;
  error?: string;
  onChange?: (value: string) => void;
}

export const SelectContext = createContext({} as SelectContextValue);

export function SelectProvider({
  defaultValue = '',
  onChange,
  children,
  error,
}: SelectProviderProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectValue = useCallback((value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  }, []);

  return (
    <SelectContext.Provider value={{
      selectedValue,
      handleSelectValue,
      error,
    }}>
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  return useContext(SelectContext);
}
