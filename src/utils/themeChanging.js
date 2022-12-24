import { DEFAULT_MODE, DARK_PALETTE, LIGHT_PALETTE } from "./constants";

export const getThemeMode = (mode) => {
  return mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
};

export const getInitialTheme = () => {
  let curMode = localStorage.getItem("mode");
  if (!curMode) {
    return DEFAULT_MODE;
  } else {
    return curMode;
  }
};

export const switchToDark = () => {
  localStorage.setItem("mode", "dark");
  return "dark";
};

export const switchToLight = () => {
  localStorage.setItem("mode", "light");
  return "light";
};

export const switchTheme = (mode, handleChange) => {
  handleChange(mode === "dark" ? switchToLight() : switchToDark());
};
