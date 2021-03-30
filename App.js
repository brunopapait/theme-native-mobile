import React from 'react';

import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components';

import Home from './src/Home';
import themes from './src/themes';

export default function App() {
  /**
   * useColorScheme => Retornar 3 valores -> Dark, Light, Null
   */
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
