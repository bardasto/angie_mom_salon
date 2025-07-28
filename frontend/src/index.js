import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

// ВОТ ЭТА СТРОКА - КЛЮЧ К РЕШЕНИЮ ПРОБЛЕМЫ
// Она подключает все базовые стили для компонентов Mantine
import '@mantine/core/styles.css';

import App from './App.js';
import './styles/globals.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
      <Notifications /> 
      <App />
    </MantineProvider>
  </React.StrictMode>
);