import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/routes.jsx';
import AuthProvider from './context/AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
