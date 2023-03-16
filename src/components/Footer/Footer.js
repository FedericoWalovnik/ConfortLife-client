import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faSquareFacebook
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__links">
        <h3 className="Footer__title">Seguinos!</h3>
        <div className="Footer__social">
          <a href="https://www.instagram.com/confort.lifeok/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/confortlifeok/">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a href="mailto:confortlifeok@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="Footer__links">
        <h3 className="Footer__title">Dirección</h3>
        <p>Padilla 825, C1414 CABA</p>
      </div>
      <div className="Footer__copyright">
        <p>
          Producido por Federico Walovnik. Buenos Aires,
          Argentina. 2023
        </p>
      </div>
    </div>
  )
}

export default Footer
