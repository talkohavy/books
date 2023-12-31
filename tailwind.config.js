/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        19: '4.75rem',
        30: '7.5rem',
      },
      width: {
        '10/100': '10%',
        '20/100': '20%',
        '30/100': '30%',
        '40/100': '40%',
        '60/100': '60%',
        '70/100': '70%',
        '80/100': '80%',
        '90/100': '90%',
        '95/100': '95%',
        15: '3.75rem',
        px: '1px',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      minWidth: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      maxWidth: {
        thirdish: '32.5%',
        '1/3': '33.33%',
        '2/3': '66.66%',
        '10/100': '10%',
        '20/100': '20%',
        '30/100': '30%',
        '40/100': '40%',
        '50/100': '50%',
        '60/100': '60%',
        '70/100': '70%',
        '80/100': '80%',
        '90/100': '90%',
        '95/100': '95%',
        '96/100': '96%',
        '97/100': '97%',
        '98/100': '98%',
        '99/100': '99%',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      height: {
        // 38: '152px',
        '80/100': '80%',
        '85/100': '85%',
        '90/100': '90%',
        '95/100': '95%',
        15: '3.75rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      minHeight: {
        mainWindow: 'calc(100vh - 230px)',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      maxHeight: {
        '10/100': '10%',
        '20/100': '20%',
        '30/100': '30%',
        '40/100': '40%',
        '50/100': '50%',
        '60/100': '60%',
        '70/100': '70%',
        '80/100': '80%',
        '90/100': '90%',
        '95/100': '95%',
        '96/100': '96%',
        '97/100': '97%',
        '98/100': '98%',
        '99/100': '99%',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      borderWidth: {
        0.5: '0.5px',
        1: '1px',
        1.5: '1.5px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        tiny: '.875rem',
      },
      boxShadow: {
        mini: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
      },
      saturate: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
        110: '1.1',
        120: '1.2',
        130: '1.3',
        140: '1.4',
      },
      contrast: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
      },
      invert: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
      },
      translate: {
        10: '10%',
        half: '-50%',
      },
      scale: {
        80: '0.8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle,var(--tw-gradient-stops))',
        'gradient-radial-bottom': 'radial-gradient(circle at bottom,var(--tw-gradient-stops))',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  variants: {
    animation: ({ after }) => after(['motion-safe', 'motion-reduce']),
    transitionProperty: ({ after }) => after(['motion-reduce']),
  },
  plugins: [],
};
