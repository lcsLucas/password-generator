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
  handleChangePassword?: (value: string) => void;
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
  const [password, setPassword] = React.useState<PasswordType>(() => {
    return generate(initialOptions.length.value, initialOptions);
  });

  const [config, setConfig] =
    React.useState<typeof initialOptions>(initialOptions);

  const handleChangePassword = (value: string) => {
    setPassword({
      value,
      strong: check(value),
    });
    handleChangeLength(value.length, true);
  };

  const handleChangeLength = (length: number, manual: boolean = false) => {
    setConfig(v => ({
      ...v,
      length: {
        ...v.length,
        value: length,
      },
    }));

    if (!manual) {
      setPassword(generate(length, config));
    }
  };

  const handleChangeOption = (
    c: keyof typeof initialOptions,
    value: boolean,
  ) => {
    const vN = {
      ...config,
      [c]: {
        ...config[c],
        checked: value,
      },
    };

    let checkAny: boolean = false;

    Object.keys(vN).forEach((k: string) => {
      if (
        k !== "length" &&
        (vN[k as keyof typeof initialOptions] as unknown as ConfigCheckType)
          .checked
      ) {
        checkAny = true;
      }
    });

    if (!checkAny) vN.lower.checked = true;

    setPassword(generate(vN.length.value, vN));
    setConfig(vN);
  };

  return (
    <GenerateContext.Provider
      value={{
        password,
        config,
        handleChangeLength,
        handleChangePassword,
        handleChangeOption,
      }}
    >
      {children}
    </GenerateContext.Provider>
  );
};

export const useGenerate = () => React.useContext(GenerateContext);
