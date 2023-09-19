import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
import { useCartContext } from '../../context/CartContext'
import Dropdown from 'react-bootstrap/Dropdown'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss'

const Navbar = () => {
  const { countItemsInCart } = useCartContext()

  return (
      <nav className="navbar">
          <div className="navbar__logo">
              <h1 tabIndex="0">
                  <Link to={'/'}>Confort Life</Link>
              </h1>
          </div>
          <ul className="navbar__categories">
              {/* <Link
          to={'/category/Colchones'}
          className="navbar__category"
        >
          <li tabIndex="0">
            <p>Colchones</p>
          </li>
        </Link> */}

              <Dropdown size="lg">
                  <Dropdown.Toggle id="dropdown-basic">Colchones</Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item>
                          <Link
                              to={'/category/Colchones'}
                              className="navbar__subcategory"
                          >
                              Todos
                          </Link>
                      </Dropdown.Item>

                      <Dropdown.Item>
                          <Link
                              to={'/category/ColchonesEspuma'}
                              className="navbar__subcategory"
                          >
                              Colchones Espuma
                          </Link>
                      </Dropdown.Item>

                      <Dropdown.Item>
                          <Link
                              to={'/category/ColchonesResortes'}
                              className="navbar__subcategory"
                          >
                              Colchones Resortes
                          </Link>
                      </Dropdown.Item>

                      <Dropdown.Item>
                          <Link
                              to={'/category/Sommiers'}
                              className="navbar__subcategory"
                          >
                              Sommiers
                          </Link>
                      </Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              <Link
                  to={'/category/PillowTop'}
                  className="navbar__category"
              >
                  <li tabIndex="0">
                      <p>Pillow Top</p>
                  </li>
              </Link>
              <Link
                  to={'/category/AlmohadonesOrtopedicos'}
                  className="navbar__category"
              >
                  <li tabIndex="0">
                      <p>Almohadones Ortopedicos</p>
                  </li>
              </Link>
              <Link
                  to={'/category/Almohadas'}
                  className="navbar__category"
              >
                  <li tabIndex="0">
                      <p>Almohadas</p>
                  </li>
              </Link>
              <Link
                  to={'/category/Mascotas'}
                  className="navbar__category"
              >
                  <li tabIndex="0">
                      <p>Mascotas</p>
                  </li>
              </Link>
              <Link
                  to={'/category/PlacaEspuma'}
                  className="navbar__category"
              >
                  <li tabIndex="0">
                      <p>Placas de Espuma</p>
                  </li>
              </Link>
              <Link
                  to={'/category/Confort'}
                  className="navbar__category"
              >
                  <li tabIndex="0">
                      <p>Confort</p>
                  </li>
              </Link>
              <Link
                  to={'/category/Accesorios'}
                  className="navbar__category"
              >
                  <li tabIndex="0">
                      <p>Accesorios</p>
                  </li>
              </Link>
          </ul>
          <div className="navbar__actions">
              {/* Search box without functionality
                 <TextField
                    variant="outlined"
                    size="small"
                    id="input-with-icon-adornment"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputAdornment>
                        ),
                    }}
                /> */}
              <div
                  className="navbar__icon"
                  tabIndex="0"
              >
                  <Link to={'/cart'}>
                      <CartWidget cartItems={countItemsInCart()} />
                  </Link>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
