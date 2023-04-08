import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import Skeleton from '@mui/material/Skeleton'
import Button from '@mui/material/Button'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.scss'

const ItemDetail = ({ details, loading }) => {
  const [itemsSelected, setItemsSelected] = useState(1)

  const { addItem } = useCartContext()

  const addToCart = () => {
    addItem({ ...details, quantity: itemsSelected })
  }

  const modifyItemsSelected = operation => {
    const newItemsSelected =
      operation === 'remove'
        ? itemsSelected - 1
        : itemsSelected + 1
    if (
      newItemsSelected >= 0 &&
      newItemsSelected <= details.stock
    ) {
      setItemsSelected(newItemsSelected)
    }
  }

  return (
    <div className="ItemDetail__container">
      {!loading ? (
        <div className="ItemDetail">
          <div className="ItemDetail__gallery">
            {details.images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  alt=""
                />
              )
            })}
            {/* <img
              src={details.image}
              alt=""
            /> */}
          </div>
          <div className="ItemDetail__info">
            <h1 className="ItemDetail__title">
              {details.title}
            </h1>
            <p className="ItemDetail__price">
              ${details.price}
            </p>
            {/* <div className="ItemDetail__sizes">
                                <p className="ItemDetail__sizes-title">Select your size</p>
                                <div className="ItemDetail__sizes-list">
                                    {
                                        sizes.map((size, i) => {
                                            return (
                                                <div key={i} className="ItemDetail__size">
                                                    {size}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> */}
            <div className="ItemDetail__actions">
              <ItemCount
                modifyItemsSelected={modifyItemsSelected}
                itemsSelected={itemsSelected}
              />
              {itemsSelected > 0 && (
                <Link to={'/cart'}>
                  <Button
                    variant="contained"
                    onClick={addToCart}
                    className="ItemDetail__button"
                  >
                    Agregar al carrito
                  </Button>
                </Link>
              )}
            </div>
            <p className="ItemDetail__description">
              {details.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="ItemDetail">
          <div className="ItemDetail__gallery">
            <Skeleton
              variant="rectangular"
              animation="wave"
              className="ItemDetail__image-loading"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              className="ItemDetail__image-loading"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              className="ItemDetail__image-loading"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              className="ItemDetail__image-loading"
            />
          </div>
          <div className="ItemDetail__info">
            <Skeleton
              variant="text"
              animation="wave"
              className="ItemDetail__text-loading"
            />
            <Skeleton
              variant="text"
              animation="wave"
              className="ItemDetail__title-loading"
            />

            <Skeleton
              variant="rectangular"
              animation="wave"
              className="ItemDetail__size-loading"
            />

            <Skeleton
              variant="rectangular"
              animation="wave"
              className="ItemDetail__button-loading"
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              className="ItemDetail__button-loading"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemDetail
