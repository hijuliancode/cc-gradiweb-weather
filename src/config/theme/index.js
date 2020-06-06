// COLORS
export const primaryColor = "#7d67f0"
export const primaryColor_dark = "#102e84"
export const primaryColor_light = "#dce8f4"
export const primaryColor_light2 = "#efeffb"

export const secondaryColor = "#dce8f4"

export const lightColor = "#e1e8f0"
export const grayColor = "#b3b2b7";
export const blackColor = "#090810"
export const whiteColor = "#ffffff"

export const gradiBrandColor1 = "#02d569"
export const gradiBrandColor2 = "#39bee3"

// SIZES
export const baseSize = 4

// HELPERS
export const isRadious = {
  x1: `border-radius: ${baseSize}px;`,
  x2: `border-radius: ${baseSize * 2}px;`,
  x3: `border-radius: ${baseSize * 3}px;`,
  x4: `border-radius: ${baseSize * 4}px;`,
  x5: `border-radius: ${baseSize * 5}px;`,
  x6: `border-radius: ${baseSize * 6}px;`,
  x7: `border-radius: ${baseSize * 7}px;`,
  x8: `border-radius: ${baseSize * 8}px;`,
  x9: `border-radius: ${baseSize * 9}px;`,
  x10: `border-radius: ${baseSize * 10}px;`,
}

// MEDIA QUERIES
// xm (Mobile) < 576px
// sm (Tablets Vertical) >= 576px
// md (Tablets Horizontal) >= 768px
// lg (Desktop) >= 992px
// xl (Desktop large) >= 1200px
export const mq = {
  xm: 'max-width: 576px',
  sm: 'min-width: 576px',
  md: 'min-width: 768px',
  lg: 'min-width: 992px',
  xl: 'min-width: 1200px'
}

// FONTS
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Poppins', sans-serif;
export const font = {
  base: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  primary: {
    name: "'Poppins', sans-serif",
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
  },
  numbers: {
    name: "'Barlow Condensed', sans-serif",
    300: 300,
    400: 400,
    500: 500,
  }
}
