import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

import Button from '@mui/material/Button'
import CartListItem from '../../components/CartListItem/CartListItem'
import config from '../../config.js'

import './Cart.scss'

const Home = () => {
  const { cartList, totalPrice } = useCartContext()
  const FORM_ID = 'payment-form'

  return (
    <div className="Cart">
      <h1 className="Cart__title">Cart</h1>
      {cartList.length === 0 ? (
        <div className="Cart__empty">
          <p className="Cart__empty-message">
            No hay elementos en el carrito...
          </p>
          <Link to="/">
            <Button
              variant="contained"
              className="Cart__empty-button"
            >
              Seguir comprando
            </Button>
          </Link>
        </div>
      ) : (
        <div className="Cart__not-empty">
          <div className="Cart__list">
            {cartList.map(item => {
              return (
                <CartListItem
                  key={item.id}
                  item={item}
                />
              )
            })}
            <div>
              {config.allowPayments ? (
                <Link to={'/checkout'}>
                  <Button
                    variant="contained"
                    className="Cart__empty-button"
                  >
                    Continuar con la compra
                  </Button>
                </Link>
              ) : (
                <></>
              )}
              <div id={FORM_ID} />
            </div>
          </div>
          <div className="Cart__summary">
            <h3 className="Cart__summary-title">Summary</h3>
            <div className="Cart__total">
              <p className="Cart__total-title">Total</p>
              <p className="Cart__total-number">
                ${totalPrice()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
