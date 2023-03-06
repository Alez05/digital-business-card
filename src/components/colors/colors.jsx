import { ThemeProvider } from '@emotion/react';
import React from 'react';

const theme = {
  color: {
    white: '#FFFFFF',
    manhattan: '#F3BF99',
    wild: '#F5F5F5',
    oxford: '#374151',
    alto: '#DCDCDC',
    mantee: '#918E9B',
    shark: '#1A1B21',
    woodsmoke: '#161619',
    harp: '#23252C',
  },
};

const Themes = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themes;
