import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import '@radix-ui/themes/styles.css';
// import App from './App';
import { Theme } from '@radix-ui/themes'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path:'/register',
    element: <span>Página de cadastro</span>
  },
  {
    path:'/login',
    element: <LoginPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={routes}/>
      {/* <App /> */}
    </Theme>
  </React.StrictMode>
);
