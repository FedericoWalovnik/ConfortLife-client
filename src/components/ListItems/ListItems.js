import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

import config from '../../config.js'

import './ListItems.scss'

const ListItem = ({ categoryId }) => {
  const loadingItemsPLaceholder = () => {
    const items = []
    for (let i = 0; i < 12; i++) {
      items.push(
        <Item
          loading={true}
          key={i}
        />
      )
    }
    return items
  }

  const [products, setProducts] = useState([])
  const [categoryTitle, setCategoryTitle] = useState([])

  const getProducts = async () => {
    const products = await fetch(
      `${config.url}/api/${categoryId}`
    )
    return await products.json()
  }

  const setMockProducts = async () => {
    try {
      setCategoryTitle(categoryId)
      const products = await getProducts()
      setProducts(products)
    } catch (error) {
      console.error('error prossesing the products', error)
    }
  }

  useEffect(() => {
    setProducts([])
    setMockProducts()
  }, [categoryId])

  return (
    <div className="ListItems">
      <h2 className="ListItems__title">{categoryTitle}</h2>
      <div className="ListItems__list">
        {products.length <= 0 && loadingItemsPLaceholder()}
        {products.map((product, i) => {
          return (
            <Link
              to={`/product/${product.id}`}
              key={i}
              className="ListItems__item-container"
            >
              <Item item={product} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ListItem
