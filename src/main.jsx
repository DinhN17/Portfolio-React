import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

// Pages for the router use
import App from './App';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Education from './pages/Education';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Router
const router = new createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: 'aboutMe',
        element: <AboutMe />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
