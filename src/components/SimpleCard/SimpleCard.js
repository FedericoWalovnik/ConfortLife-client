import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

import './SimpleCard.scss'

const SimpleCard = ({ props }) => {
  const {
    images,
    title,
    description,
    action,
    redirectLink
  } = props

  return (
    <div className="SimpleCard">
      <img
        className="SimpleCard__image"
        src={images[0].url}
        alt={title}
      />
      <div className="SimpleCard__info">
        <h2 className="SimpleCard__title">{title}</h2>
        {description && (
          <p className="SimpleCard__description">
            {description}
          </p>
        )}
        {redirectLink && (
          <Link
            to={redirectLink}
            className="ListItems__item-container"
          >
            <Button
              className="SimpleCard__button"
              variant="contained"
              color="secondary"
            >
              {action}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default SimpleCard
