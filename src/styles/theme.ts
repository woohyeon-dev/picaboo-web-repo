import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  clr: {
    base: '#000000',
    primary: '#373A40',
    secondary: '#686D76',
    tertiary: '#ffffff',
    quaternary: '#b9b9b9',
    accent: '#DCA11D',
  },
  bgclr: {
    base: '#373A40',
    primary: '#ffffff',
    secondary: '#EEEEEE',
    enabled: '#686D76',
    disabled: '#EEEEEE',
  },
  boxShadow: {
    normal:
      '0 4px 10px 0  rgba(0, 0, 0, 0.25), 0 2px 5px 0  rgba(0, 0, 0, 0.5)',
    layout: '0 0 20px 0 rgba(0, 0, 0, 0.25), 0 0px 10px 0  rgba(0, 0, 0, 0.5)',
    image: '0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 2px 2px 0  rgba(0, 0, 0, 0.5)',
  },
  mixins: {
    flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    `,
  },
  media: {
    xl: '(min-width: 1200px)',
    lg: '(min-width: 769px)',
    md: '(min-width: 481px)',
  },
};
