import {
  ConfigCheckType,
  KeyStrong,
  PasswordType,
} from "@/context/Generate/GenerateContext";
import { initialOptions } from "@/utils/options";

const configDefault: { [key: string]: string } = {
  lower: `abcdefghijklmnopqrstuvwxyz`,
  upper: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  numbers: `0123456789`,
  symbols: `!@#$%^&*()-_=+[]{}|;:'\"<>,.?/~`,
};

export const generate: (
  length: number,
  config: typeof initialOptions,
) => PasswordType = (length, config) => {
  let tempChars = "";
  let resultPass = "";

  if (length > 0) {
    Object.keys(config).forEach((k: string) => {
      if (
        (config[k as keyof typeof initialOptions] as unknown as ConfigCheckType)
          .checked
      ) {
        if (k in configDefault) {
          tempChars += configDefault[k as unknown as string];
        }
      }
    });

    if (tempChars.length <= 0) tempChars = configDefault["lower"];

    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * tempChars.length);
      resultPass += tempChars[rand];
    }
  }

  return {
    value: resultPass,
    strong: check(resultPass),
  };
};

export const check: (password: string) => KeyStrong = (password: string) => {
  const length = password.length;

  if (length < 6) {
    return "VeryLow";
  }

  if (length < 8) {
    return "Low";
  }

  if (length < 9) {
    return "Moderate";
  }

  const containsLower = /[a-z]/.test(password);
  const containsUpper = /[A-Z]/.test(password);
  const containsDigit = /[0-9]/.test(password);
  const containsSymbol = /[!@#$%^&*()_+[\]{}|;:,.<>?/=-]/.test(password);

  let ranking = 0;

  if (containsLower) {
    ranking += 1;
  }

  if (containsUpper) {
    ranking += 1;
  }

  if (containsDigit) {
    ranking += 1;
  }

  if (containsSymbol) {
    ranking += 1;
  }

  if (ranking >= 4 || length >= 12) {
    return "VeryHigh";
  } else if (ranking === 3) {
    return "High";
  } else if (ranking === 2) {
    return "Moderate";
  } else {
    return "Low";
  }
};
