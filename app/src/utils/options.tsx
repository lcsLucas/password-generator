import {
  ConfigCheckType,
  ConfigSliderType,
} from "@/context/Generate/GenerateContext";

export const initialOptions = {
  length: {
    label: "Length:",
    value: 8,
  } as ConfigSliderType,
  lower: {
    checked: true,
    text: "abc",
    value: "lower",
    title: "Allow lower case",
  } as ConfigCheckType,
  upper: {
    checked: true,
    text: "ABC",
    value: "upper",
    title: "Allow upper case",
  } as ConfigCheckType,
  numbers: {
    checked: true,
    text: "123",
    value: "numbers",
    title: "Allow numbers",
  } as ConfigCheckType,
  symbols: {
    checked: true,
    text: "#$&",
    value: "symbols",
    title: "Allow symbols",
  } as ConfigCheckType,
};
