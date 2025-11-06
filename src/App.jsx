import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import QueryProvider from './providers/QueryProvider';
import { AuthProvider } from './context/AuthContext';
import useTheme from './hooks/useTheme';

function App() {
  useTheme();
  return (
    <QueryProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;