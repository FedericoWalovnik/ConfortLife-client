import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import config from '../../../config.js'

import './CheckoutSummary.scss'
import { useCheckoutContext } from '../../../context/CheckoutContext'

const CheckoutSummary = () => {
  const { cartList, totalPrice, emptyCart } =
    useCartContext()
  const { modifyShipping } = useCheckoutContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (cartList.length === 0) {
      navigate('/')
    }
  }, [])

  return (
    <div className="CheckoutSummary">
      <h2>Resumen</h2>
      <div>
        <div className="CheckoutSummary__products">
          <div className="Cart__list">
            {cartList.map(item => {
              return (
                <div
                  className="CheckoutSummary__product"
                  key={item.title}
                >
                  <h3 className="CheckoutSummary__product-name">
                    {item.title}
                  </h3>
                  {config.showPrices ? (
                    <p className="CheckoutSummary__product-price">
                      ${item.price}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              )
            })}
          </div>
          <div className="CheckoutSummary__totalPrice">
            <p className="Cart__total-title">Total</p>
            <p className="Cart__total-number">
              ${totalPrice()}
            </p>
          </div>
        </div>
        <div className="CheckoutSummary__shipping">
          <FormControl>
            <h3>Envio</h3>
            <RadioGroup
              aria-labelledby="radio-buttons-group-shippment"
              defaultValue="CABA"
              name="radio-buttons-group"
              onChange={event =>
                modifyShipping(event.target.value)
              }
            >
              <FormControlLabel
                value="CABA"
                control={<Radio />}
                label="Envio a domicilio CABA"
              />
              <FormControlLabel
                value="fueraCaba"
                control={<Radio />}
                label="Envio a domicilio fuera de Capital"
              />
              <FormControlLabel
                value="local"
                control={<Radio />}
                label="Retiro por el local"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
