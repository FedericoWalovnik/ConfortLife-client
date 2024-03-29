import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'

import config from '../../config.js'

const ItemDetailContainer = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const [product, setProduct] = useState([])

  const getProduct = async () => {
    const product = await fetch(
      `${config.url}/api/product/${productId}`
    )
    return await product.json()
  }

  const setProducts = async () => {
    try {
      const product = await getProduct()
      !product ? navigate('/notFound') : setProduct(product)
    } catch (error) {
      console.error('error prossesing the products')
    }
  }

  useEffect(() => {
    setProducts()
  }, [])

  return (
    <div className="ItemDetailContainer">
      {product.images ? (
        <ItemDetail
          details={{ id: productId, ...product }}
        />
      ) : (
        <ItemDetail loading={true} />
      )}
    </div>
  )
}

export default ItemDetailContainer
