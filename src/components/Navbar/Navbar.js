import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
import { useCartContext } from '../../context/CartContext'
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
        <Link
          to={'/category/Colchones'}
          className="navbar__category"
        >
          <li tabIndex="0">
            <p>Colchones</p>
          </li>
        </Link>
        <Link
          to={'/category/Colchones'}
          className="navbar__category"
        >
          <li tabIndex="0">
            <p>Pillow Top</p>
          </li>
        </Link>
        <Link
          to={'/category/Colchones'}
          className="navbar__category"
        >
          <li tabIndex="0">
            <p>Almohadones Ortopedicos</p>
          </li>
        </Link>
        <Link
          to={'/category/Colchones'}
          className="navbar__category"
        >
          <li tabIndex="0">
            <p>Almohadas</p>
          </li>
        </Link>
        <Link
          to={'/category/Colchones'}
          className="navbar__category"
        >
          <li tabIndex="0">
            <p>Mascotas</p>
          </li>
        </Link>
        <Link
          to={'/category/Colchones'}
          className="navbar__category"
        >
          <li tabIndex="0">
            <p>Confort</p>
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
