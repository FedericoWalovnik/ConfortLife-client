import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton'

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
    if (categoryId === 'Colchones') {
      const Colchones = await fetch(`${config.url}/api/Colchones`)
      const ColchonesEspuma = await fetch(`${config.url}/api/ColchonesEspuma`)
      const ColchonesResortes = await fetch(`${config.url}/api/ColchonesResortes`)
      const Sommiers = await fetch(`${config.url}/api/Sommiers`)

      const ColchonesParsed = await Colchones.json()
      const parsedColchonesEspuma = await ColchonesEspuma.json()
      const parsedColchonesResortes = await ColchonesResortes.json()
      const parsedSommiers = await Sommiers.json()

      return [...ColchonesParsed, ...parsedColchonesEspuma, ...parsedColchonesResortes, ...parsedSommiers]
    } else {
      const products = await fetch(`${config.url}/api/${categoryId}`)
      return await products.json()
    }
  }

  const setMockProducts = async () => {
    try {
      setCategoryTitle(categoryId)
      const products = await getProducts()
      console.log(products)
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
      <WhatsappButton />
      <h2 className="ListItems__title">{categoryTitle}</h2>
      <div className="ListItems__list">
        {products.length <= 0 && loadingItemsPLaceholder()}
        {products.length <= 0 && <h2>Aun no hay productos para esta categoria</h2>}
        {products.length > 1 &&
          products.map((product, i) => {
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
