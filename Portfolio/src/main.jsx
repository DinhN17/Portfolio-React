import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Pages for the router use
import App from './App';
import AboutMe from './pages/AboutMe';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Router
const router = new createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/about',
        element: <AboutMe />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
