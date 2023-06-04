import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-calendar/dist/Calendar.css';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { AuthProvider } from './contexts/auth-context';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster 
        position='top-right'
        toastOptions={{
          duration: 5000
        }}
      /> 
    </AuthProvider>
  </React.StrictMode>
);
