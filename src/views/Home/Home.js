import React from 'react'
import './Home.scss'
import SimpleCard from '../../components/SimpleCard/SimpleCard'
import Item from '../../components/Item/Item'

const Home = () => {
  const cards = [
    {
      image:
        'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_953,c_limit/965f33b5-ce1b-4a23-82b5-0c39c7f603df/nike-just-do-it.jpg',
      title: 'Style Your Air',
      redirectLink: '/product/L9fa4cIwlR1Ju8WP52Be',
      action: 'Shop'
    },
    {
      image:
        'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_738,c_limit/7165e42f-248a-4dca-ae1f-f4c813940e3a/nike-just-do-it.jpg',
      title: 'Shoes Always $100 & Under',
      redirectLink: '/product/2',
      action: 'Shop'
    },
    {
      image: 'images/Arcoiris.jpg',
      title:
        'COLCHONES, SOMMIER y PRODUCTOS PARA EL CONFORT Y EL HOGAR',
      description: '',
      redirectLink: '/category/Colchones',
      action: 'Comprar'
    },
    {
      image: 'images/maps.png',
      title: '',
      description: ''
    }
  ]

  const popularItems = [
    {
      id: 'L9fa4cIwlR1Ju8WP52Be',
      title: 'Pillow Top',
      price: 30,
      category: 'Almohadones Ortopedicos',
      bestSeller: false,
      image: 'images/Rectangle3.png',
      stock: 1
    },
    {
      id: 'PdcBvyp5XPWKPhoGfS6r',
      title: 'Almohada Triangulo Bajo',
      price: 30,
      category: 'Almohadones Ortopedicos',
      bestSeller: false,
      image: 'images/Rectangle3.png',
      stock: 1
    },
    {
      id: 2,
      title: 'FOAM NATURE',
      price: 210,
      category: 'Colchones',
      bestSeller: false,
      image: 'images/Rectangle3.png',
      stock: 1
    }
  ]

  return (
    <div className="Home">
      <div className="Home__section">
        <SimpleCard
          className="Home__card"
          props={cards[2]}
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
          {popularItems.map(item => {
            return (
              <span
                className="Home__item"
                key={item.id}
              >
                <Item item={item} />
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
              Alejandro Perez
            </p>
          </div>
          <div className="Home__testimonial-card">
            <p className="Home__testimonial-icon">“</p>
            <p className="Home__testimonial-text">
              Excelente trato, muy buenos productos es
              exactamente lo que me dijeron.
            </p>
            <p className="Home__testimonial-author">
              Alejandro Perez
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
              Alejandro Perez
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
          props={cards[3]}
        />
      </div>
    </div>
  )
}

export default Home
