import React from "react";

type ConfigType = {
  length: number;
  lower: boolean;
  upper: boolean;
  numbers: boolean;
  symbols: boolean;
};

type GenerateContextType = {
  config: ConfigType;
  handleChangeLength?: (length: number) => void;
};

type GenerateProps = { children: React.ReactNode };

const defaultValues = {
  length: 8,
  lower: true,
  upper: true,
  numbers: true,
  symbols: true,
} as const;

const GenerateContext = React.createContext<GenerateContextType>({
  config: defaultValues,
});

export const GenerateProvider = ({ children }: GenerateProps) => {
  const [config, setConfig] = React.useState<ConfigType>(defaultValues);

  const handleChangeLength = (length: number) => {
    setConfig(v => ({
      ...v,
      length,
    }));
  };

  return (
    <GenerateContext.Provider
      value={{
        config,
        handleChangeLength,
      }}
    >
      {children}
    </GenerateContext.Provider>
  );
};

export const useGenerate = () => React.useContext(GenerateContext);
