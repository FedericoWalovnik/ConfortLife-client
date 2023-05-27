import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './views/Home/Home'
import Cart from './views/Cart/Cart'
import OrderConfirmation from './views/OrderConfirmation/OrderConfirmation'
import Checkout from './views/Checkout/Checkout'
import PageNotFound from './views/PageNotFound/PageNotFound'
import PaymentSuccessful from './views/PaymentSuccessful/PaymentSuccessful'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ThemeProvider } from '@mui/material/styles'
import { CartProvider } from './context/CartContext'
import { CheckoutProvider } from './context/CheckoutContext'

import theme from './material-theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer title={'Mens Lifestyle Shoes'} />}
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/checkout"
              element={
                <CheckoutProvider>
                  <Checkout />
                </CheckoutProvider>
              }
            />
            <Route
              path="/order-confirmation/:orderId"
              element={<OrderConfirmation />}
            />
            <Route
              path="/notFound"
              element={<PageNotFound />}
            />
            <Route
              path="/success"
              element={<PaymentSuccessful />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
