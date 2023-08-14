import { ConfigCheckType, KeyStrong } from "@/context/Generate/GenerateContext";
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
) => string = (length, config) => {
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

    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * tempChars.length);
      resultPass += tempChars[rand];
    }
  }

  return resultPass;
};

export const check: (password: string) => KeyStrong = (password: string) => {
  const length = password.length;

  if (length < 8) {
    return "VeryLow";
  }

  const containsLower = /[a-z]/.test(password);
  const containsUpper = /[A-Z]/.test(password);
  const containsDigit = /[0-9]/.test(password);
  const containsSymbol = /[^a-zA-Z0-9]/.test(password);

  // Additional criteria
  const hasMixedCase = containsLower && containsUpper;
  const hasSpecialCharacter = /[!@#$%^&*()_+[\]{}|;:,.<>?/=-]/.test(password);

  if (hasMixedCase && hasSpecialCharacter && length >= 12) {
    return "VeryHigh";
  } else if (hasMixedCase && hasSpecialCharacter) {
    return "High";
  } else if (
    (hasMixedCase && containsDigit) ||
    (hasMixedCase && containsSymbol) ||
    (containsDigit && containsSymbol)
  ) {
    return "Moderate";
  } else if (hasMixedCase || containsDigit || containsSymbol) {
    return "Low";
  } else {
    return "VeryLow";
  }
};
