import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ResetPassword from './pages/Auth/ResetPassword';
import Home from './pages/Home';
import AddItem from './pages/Admin/AddItem';
import Cart from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='register'
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path='login'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='cart'
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path='add-item'
            element={
              <Layout>
                <AddItem />
              </Layout>
            }
          />
          <Route
            path='password-reset'
            element={
              <Layout>
                <ResetPassword />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
