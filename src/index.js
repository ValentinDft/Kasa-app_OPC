import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './routes/about/About';
import Footer from './components/footer/Footer';
import Topbar from './components/topbar/Topbar';
import Home from './routes/home/Home';
import ErrorPage from './routes/error/Error';
import Accommodation from './routes/accommodation/Accommodation';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Topbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      ,
      {
        path: 'accommodation/:id',
        element: <Accommodation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
