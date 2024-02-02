import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface SelectContextValue {
  selectedValue: string;
  handleSelectValue: (value: string) => void;
}

interface SelectProviderProps {
  defaultValue?: string;
  children: ReactNode;
  onChange?: (value: string) => void;
}

const SelectContext = createContext({} as SelectContextValue);

export function SelectProvider({
  defaultValue = '',
  onChange,
  children,
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
    }}>
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  return useContext(SelectContext);
}
