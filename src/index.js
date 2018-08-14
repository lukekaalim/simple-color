// @flow

opaque type HSLAColor = {
  type: 'HSLA',
  hue: number,
  saturation: number,
  lightness: number,
  alpha: number,
};

opaque type RGBAColor = {
  type: 'RGBA',
  red: number,
  green: number,
  blue: number,
  alpha: number,
};

type Color =
  | RGBAColor
  | HSLAColor;

const makeHSLAColor = (hue: number, saturation: number, lightness: number, alpha?: number = 1): HSLAColor => ({
  type: 'HSLA',
  hue,
  saturation,
  lightness,
  alpha,
});
const makeRGBAColor = (red: number, green: number, blue: number, alpha?: number = 1): RGBAColor => ({
  type: 'RGBA',
  red,
  green,
  blue,
  alpha,
});

const colorToString = (color: Color): string => {
  switch (color.type) {
    case 'HSLA':
      if (color.alpha === 1) {
        return `hsl(${color.hue},${color.saturation},${color.lightness})`;
      }
      return `hsla(${color.hue},${color.saturation},${color.lightness},${color.alpha})`;
    case 'RGBA':
      if  (color.alpha === 1) {
        return `rgb(${color.red},${color.green},${color.blue})`;
      }
      return `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
    default:
      throw new Error('Don\' know this type of color object');
  }
};

export {
  makeHSLAColor,
  makeRGBAColor,
  colorToString,
};
