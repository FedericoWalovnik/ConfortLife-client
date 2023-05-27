import React from 'react'
import './WhatsappButton.scss'
import whatsappLogo from '../../assets/whatsapp.svg'

const WhatsappButton = () => {
    return (
        <div className="WhatsappButton">
            <div className="Wpp-button">
                <a
                    href="https://wa.me/5491141844979"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img
                        src={whatsappLogo}
                        alt="whatsapp icon"
                    />
                </a>
            </div>
        </div>
    )
}

export default WhatsappButton
