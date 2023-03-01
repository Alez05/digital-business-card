import React from 'react';
import { createRoot } from 'react-dom/client';
import { Digital } from './components';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

const digital = <Digital />;

root.render(digital);
