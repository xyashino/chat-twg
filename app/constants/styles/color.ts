export const Colors = {
  //PLUM
  plum: "#5603AD",
  plumAccent: "#390273",
  plumLight: "#C692FD",
  plumLightAccent: "#993AFC",

  //BLUE
  blue: "#03A9F4",
  blueSoft: "#B6DEFD",

  //WHITE
  white: "#FFFFFF",
  whiteBlue: "#F0F8FF",
  whiteGray: "#D9DAE0",

  //GRAY
  gray: "#9FA2B2",
  graySoft: "#BFC1CC",

  //OTHERS
  black: "#1A1A1A",
  active: "#A8FF76",
  error: "#FF445A",
} as const;

export type ColorName = keyof typeof Colors;
