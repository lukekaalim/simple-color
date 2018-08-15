# Simple Color

Simple color operations and abstractions.

### colorToString
*_(color: Color) => string_*

This function takes a Color object and returns the CCS string version of the color.

### makeHSLColor
_(hue: number, saturation: number, lightness: number, alpha?: number) => HSLAColor_

This function takes some arguments and creates a HSLAColor object.

### makeRGBColor
_(red: number, green: number, blue: number alpha?: number) => RGBAColor_

This function takes some arguments and creates a RGBAColor object.

### Color
This interface describes a color object. Implementing objects are:
  - HSLAColor
  - RGBAColor
