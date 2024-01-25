import { colors, ColorScheme } from "@vechaiui/react";


export const iLight: ColorScheme = {
    id: "iLight",
    type: "light",
    colors: {
      bg: {
        base: colors.trueGray['50'],
        fill: colors.warmGray["100"],
      },
      text: {
        foreground: colors.warmGray["900"],
        muted: colors.warmGray["700"],
      },
      primary: colors.amber,
      neutral: colors.trueGray,
    },
  }

  export const iDark: ColorScheme = {
    id: "iDark",
    type: "dark",
    colors: {
      bg: {
        base: colors.trueGray['900'],
        fill: colors.warmGray["100"],
      },
      text: {
        foreground: colors.white,
        muted: colors.warmGray["100"],
      },
      primary: colors.amber,
      neutral: colors.trueGray,
    },
  }