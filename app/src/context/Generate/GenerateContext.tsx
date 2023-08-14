import React from "react";
import { check, generate } from "@/utils/password";
import { initialOptions } from "@/utils/options";

export type ConfigSliderType = {
  label: string;
  value: number;
};

export type ConfigCheckType = {
  checked: boolean;
  text: string;
  value: string;
  title: string;
};

const Strong = {
  VeryLow: 0,
  Low: 1,
  Moderate: 2,
  High: 3,
  VeryHigh: 4,
} as const;

export type KeyStrong = keyof typeof Strong;

export type PasswordType = {
  value: string;
  strong: KeyStrong;
};

type GenerateContextType = {
  password: PasswordType;
  config: typeof initialOptions;
  handleChangeLength?: (length: number) => void;
  handleChangeOption?: (c: keyof typeof initialOptions, value: boolean) => void;
};

type GenerateProps = { children: React.ReactNode };

const GenerateContext = React.createContext<GenerateContextType>({
  password: {
    value: "",
    strong: "VeryLow",
  },
  config: initialOptions,
});

export const GenerateProvider = ({ children }: GenerateProps) => {
  const [config, setConfig] =
    React.useState<typeof initialOptions>(initialOptions);

  const _passGenerate = generate(config.length.value, config);

  const password: PasswordType = {
    value: _passGenerate,
    strong: check(_passGenerate),
  };

  const handleChangeLength = (length: number) => {
    setConfig(v => ({
      ...v,
      length: {
        ...v.length,
        value: length,
      },
    }));
  };

  const handleChangeOption = (
    c: keyof typeof initialOptions,
    value: boolean,
  ) => {
    const cf = {
      ...config,
      [c]: {
        ...config[c],
        checked: value,
      },
    };

    setConfig({ ...cf });
  };

  return (
    <GenerateContext.Provider
      value={{
        password,
        config,
        handleChangeLength,
        handleChangeOption,
      }}
    >
      {children}
    </GenerateContext.Provider>
  );
};

export const useGenerate = () => React.useContext(GenerateContext);
