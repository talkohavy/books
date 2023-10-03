import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainWindow from './MainWindow';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const BooksPage = lazy(() => import('../pages/BooksPage'));
const SingleBookPage = lazy(() => import('../pages/SingleBookPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

function App() {
  return (
    <>
      <Header />

      <MainWindow>
        <Suspense>
          <Routes>
            <Route path='/index.html' element={<LoginPage />} />
            <Route path='/' element={<LoginPage />} />
            <Route path='/books' element={<BooksPage />} />
            <Route path='/books/:bookId' element={<SingleBookPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />

            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </MainWindow>

      <Footer />
    </>
  );
}

export default App;
