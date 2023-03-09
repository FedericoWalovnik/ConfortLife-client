import React, { useState, useEffect } from 'react'

import { useCartContext } from '../../context/CartContext'
import { useCheckoutContext } from '../../context/CheckoutContext'

import { useNavigate } from 'react-router-dom'

import CheckoutForm from './CheckoutForm/CheckoutForm'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import { v4 as uuidv4 } from 'uuid'

import config from '../../config.js'

import './Checkout.scss'

const Checkout = () => {
  const FORM_ID = 'payment-form'

  const navigate = useNavigate()

  const { cartList, totalPrice, emptyCart } =
    useCartContext()
  const { validateForm, validateInputsForm, isFormValid } =
    useCheckoutContext()

  const [preferenceId, setPreferenceId] = useState(null)

  const createPreference = async () => {
    const orderItems = cartList.map(
      ({ description, title, price, quantity }) => {
        return { description, title, price, quantity }
      }
    )

    if (orderItems.lenght === 0) {
      navigate('/')
      return
    }

    const order = {
      id: uuidv4(),
      items: [...orderItems],
      total: totalPrice(),
      date: Date()
    }

    const rawOrderId = await fetch(
      `${config.url}/api/createPreference`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      }
    )
    const orderId = await rawOrderId.json()
    setPreferenceId(orderId)
  }

  const checkForm = () => {
    const modal = document.getElementsByClassName(
      'mp-mercadopago-checkout-wrapper'
    )
    if (!validateInputsForm()) {
      modal[0].style.display = 'none'
      modal[0].style.zindex = 0
    } else {
      modal[0].style.display = 'block'
      modal[0].style.zindex = 999
    }
  }

  useEffect(() => {
    if (preferenceId) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
      script.setAttribute(
        'data-preference-id',
        preferenceId
      )
      const form = document.getElementById(FORM_ID)
      if (!form.hasChildNodes()) form.appendChild(script)
    }
  }, [preferenceId])

  useEffect(() => {
    if (cartList.length === 0) {
      navigate('/')
    } else {
      console.log('createPreference')
      createPreference()
    }
  }, [])

  return (
    <div className="Checkout">
      <h1 className="Checkout__title">Detalles del pago</h1>
      <div className="Checkout__info">
        <div className="Checkout__form">
          <CheckoutForm />
        </div>
        <div className="Checkout__summary">
          <CheckoutSummary />
        </div>
      </div>

      <div className="Checkout__pay-buttons">
        <button
          className="Checkout__pay-button Checkout__pay-button-2"
          style={{
            display: validateForm() ? 'none' : 'flex'
          }}
          onClick={checkForm}
        >
          Pagar
        </button>
        <div
          id={FORM_ID}
          className="Checkout__pay-button"
          style={{
            display: validateForm() ? 'flex' : 'none'
          }}
          onClick={checkForm}
        />
      </div>
    </div>
  )
}

export default Checkout
