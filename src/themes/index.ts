import { DefaultTheme } from 'styled-components';
import { typographyVariants } from './typographyVariants';
import { ModeType } from '@/types/themeModeType';

const light: ModeType = {
  background: {
    light: {
      color: '#f0f0f0',
    },
    main: {
      color: '#e5e5e5',
    },
  },
  primary: {
    main: {
      color: '#32363a',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#2c3248',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#e3e6ea',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    }
  },
  light: {
    color: '#88989E',
    contrastText: '#fff',
  },
};

const dark: ModeType = {
  background: {
    light: {
      color: '#000',
    },
    main: {
      color: '#e5e5e5',
    },
  },
  primary: {
    main: {
      color: '#32363a',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#2c3248',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
};

const colors = {
  light: light,
  dark: dark,
};

let mode: string = 'light';
export function toggleThemeMode() {
  if (mode === 'dark') {
    mode = 'light';
  }
  else {
    mode = 'dark';
  };
};

export const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

const theme: DefaultTheme = {
  colors,
  mode,
  typographyVariants,
  breakpoints,
  padding: '20px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};

export default theme;
