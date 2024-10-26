import React from 'react';
import MainBody from './components/MainBody';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MainBody />
        <FAQ />
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: <>
        <Contact />
        <Footer />
      </>,
  },
  {
    path: '/about',
    element:<>
    <About />
    <Footer />
    </> 
  },
]);

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
