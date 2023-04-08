import React from 'react'
import './Home.scss'
import SimpleCard from '../../components/SimpleCard/SimpleCard'
import Item from '../../components/Item/Item'
import { Link } from 'react-router-dom'

const Home = () => {
  const cards = [
    {
      images: [{ url: 'images/Arcoiris.jpg' }],
      title:
        'COLCHONES, SOMMIER y PRODUCTOS PARA EL CONFORT Y EL HOGAR',
      description: '',
      redirectLink: '/category/Colchones',
      action: 'Comprar'
    },
    {
      images: [{ url: 'images/maps.png' }],
      title: '',
      description: ''
    }
  ]

  const mostPopularItems = [
    {
      id: '4b61b1a5-934d-4324-a5fc-c3df36d8cf82',
      title: 'Colchon Foam Nature',
      price: 30,
      category: 'Colchones',
      bestSeller: false,
      images: [{ url: 'images/foamNature.jpeg' }],
      stock: 1
    },
    {
      id: '303b8038-7c95-42ea-88f1-a37cd2f2a8d6',
      title: 'Colchon Resortes Pacific',
      price: 30,
      category: 'Colchones',
      bestSeller: false,
      images: [{ url: 'images/colchonResort.jpeg' }],
      stock: 1
    }
  ]

  const popularItems = [
    {
      id: '74cd7ee4-0a20-48c2-bc4d-097699436cfd',
      title: 'Pillow Desmontable Espuma Visco Memoria 5cm',
      price: 30,
      category: 'PillowTop',
      bestSeller: false,
      images: [{ url: 'images/PillowTop2.jpeg' }],
      stock: 1
    },
    {
      id: '442e1e12-b047-4ec1-8a35-0e299ee5c285',
      title: 'Almohada Triangulo Bajo',
      price: 30,
      category: 'AlmohadonesOrtopedicos',
      bestSeller: false,
      images: [{ url: 'images/triangulo.jpeg' }],
      stock: 1
    },
    {
      id: '3f8669e4-1275-4247-822d-ed633ef2ff01',
      title: 'Pillow Rocks',
      price: 210,
      category: 'Confort',
      bestSeller: false,
      images: [{ url: 'images/confort3.jpeg' }],
      stock: 1
    }
  ]

  return (
    <div className="Home">
      <div className="Home__section">
        <SimpleCard
          className="Home__card"
          props={cards[0]}
        />
      </div>
      <div className="Home__wpp-button">
        <a
          href="https://wa.me/5491141844979"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="images/whatsapp.svg"
            alt="whatsapp icon"
          />
        </a>
      </div>
      <div className="Home__section">
        <h2 className="Home__title">
          Nuestros Productos Favoritos
        </h2>
        <div className="Home__cards">
          {mostPopularItems.map(item => {
            return (
              <span
                className="Home__item"
                key={item.id}
              >
                <Link
                  to={`/product/${item.id}`}
                  key={item.id}
                  className="ListItems__item-container"
                >
                  <Item item={item} />
                </Link>
              </span>
            )
          })}
        </div>
        <div className="Home__cards">
          {popularItems.map(item => {
            return (
              <span
                className="Home__item"
                key={item.id}
              >
                <Link
                  to={`/product/${item.id}`}
                  key={item.id}
                  className="ListItems__item-container"
                >
                  <Item item={item} />
                </Link>
              </span>
            )
          })}
        </div>
      </div>
      <div className="Home__who-are-we">
        <div className="Home__text">
          <h2>Quienes somos?</h2>
          <p>
            Confort Life Fabrica de Colchones te ofrece hace
            10 años lo último en productos unicos e
            innovadores para el confort, la decoración y
            mucho mas, utilizando espumas de Alta densidad y
            Espumas Memory a precios increibles: Colchones y
            Sommier, Pillow, Almohadones con formas,
            asientos de espuma, Colchonetas y ahora también
            camitas para mascotas.
          </p>
          <button>Conocenos más!</button>
        </div>
        <div className="Home__image"></div>
      </div>
      <div className="Home__testimonials">
        <h2 className="Home__testimonials-title">
          Clientes contentos desde hace más de 10 años
        </h2>
        <div className="Home__testimonials-cards-container">
          <div className="Home__testimonial-card">
            <p className="Home__testimonial-icon">“</p>
            <p className="Home__testimonial-text">
              Excelente trato, muy buenos productos es
              exactamente lo que me dijeron.
            </p>
            <p className="Home__testimonial-author">
              Matias G.
            </p>
          </div>
          <div className="Home__testimonial-card">
            <p className="Home__testimonial-icon">“</p>
            <p className="Home__testimonial-text">
              Lo primero que cabe destacar es la atención,
              súper amable,me entrego lo que compré un
              sábado aunque tienen cerrado ese día. El
              producto que adquirí superó mis expectativas,
              yo un colchón durísimo y con el sobre colchón
              viscoelastico logre tener un descanso
              placentero sin levantarme con dolores. Muchas
              gracias!!!
            </p>
            <p className="Home__testimonial-author">
              Alejandra T.
            </p>
          </div>
          <div className="Home__testimonial-card">
            <p className="Home__testimonial-icon">“</p>
            <p className="Home__testimonial-text">
              Muy amable. necesité cambiar la almohada por
              otro modelo y lo hizo sin problemas. Muy buena
              atención.
            </p>
            <p className="Home__testimonial-author">
              Nicole E.
            </p>
          </div>
        </div>
      </div>
      <div className="Home__section">
        <h2 className="Home__title">
          Visitanos en nuestro Showroom!
        </h2>
        <SimpleCard
          className="Home__card"
          props={cards[1]}
        />
      </div>
    </div>
  )
}

export default Home
