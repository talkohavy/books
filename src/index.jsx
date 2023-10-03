import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './layout/App';
import DarkThemeProvider from './providers/DarkThemeProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') ?? document.body);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DarkThemeProvider>
          <App />
        </DarkThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
