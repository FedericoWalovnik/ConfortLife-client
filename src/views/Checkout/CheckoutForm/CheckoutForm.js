import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { useCheckoutContext } from "../../../context/CheckoutContext"
import "./CheckoutForm.scss"

const CheckoutForm = () => {
    const {
        nameError,
        lastnameError,
        dniError,
        streetError,
        cityError,
        houseNumberError,
        postalCodeError,
        phoneError,
        emailError,
        modifyName,
        modifyLastname,
        modifyDni,
        modifyStreet,
        modifyHouseNumber,
        modifyCity,
        setApartment,
        modifyPostalCode,
        modifyPhone,
        modifyEmail,
        shipping 
    } = useCheckoutContext()

    return (
        <div className="CheckoutForm">
            <div className="CheckoutForm__billing">
                <h2>Datos de Facturacion</h2>
                <div className="CheckoutForm__flex">
                    <TextField
                        id="name-input"
                        error={!!(nameError)}
                        helperText={nameError}
                        fullWidth label="Nombre"
                        variant="outlined"
                        margin="normal"
                        onChange={e => modifyName(e.target.value)}
                    />
                    <TextField
                        id="name-input"
                        fullWidth
                        error={!!(lastnameError)}
                        helperText={lastnameError}
                        label="Apellido"
                        variant="outlined" 
                        margin="normal"
                        onChange={e => modifyLastname(e.target.value)}
                    />
                </div>
                <TextField 
                    id="name-input"
                    fullWidth
                    error={!!(dniError)}
                    helperText={dniError}
                    label="Dni"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    onChange={e => modifyDni(e.target.value)}
                />

                {
                    shipping !== 'local' ?
                        <div className="CheckoutForm__direction">
                            <h3>Direccion</h3>
                            <div className="CheckoutForm__flex">
                                <TextField
                                    id="name-input"
                                    fullWidth
                                    error={!!(streetError)}
                                    helperText={streetError}
                                    label="Calle" variant="outlined"
                                    margin="normal"
                                    onChange={e => modifyStreet(e.target.value)}
                                />
                                <TextField
                                    id="name-input"
                                    fullWidth
                                    error={!!(houseNumberError)}
                                    helperText={houseNumberError}
                                    label="Numero"
                                    type="number"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={e => modifyHouseNumber(e.target.value)}
                                />
                            </div>
                            <div className="CheckoutForm__flex">
                                <TextField
                                    id="name-input"
                                    fullWidth label="Piso y departamento (Opcional)"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={e => setApartment(e.target.value)}
                                />
                                <TextField
                                    id="name-input"
                                    fullWidth
                                    error={!!(postalCodeError)}
                                    helperText={postalCodeError}
                                    label="Codigo Postal"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={e => modifyPostalCode(e.target.value)}
                                />
                            </div>
                            <TextField
                                id="name-input"
                                fullWidth
                                label="Ciudad"
                                error={!!(cityError)}
                                helperText={cityError}
                                variant="outlined"
                                margin="normal"
                                onChange={e => modifyCity(e.target.value)}
                            />
                        </div> :
                        <></>
                }

                <div className="CheckoutForm__direction">
                    <h3>Contacto</h3>
                    <TextField
                        id="name-input"
                        fullWidth
                        label="Celular"
                        type="number"
                        error={!!(phoneError)}
                        helperText={phoneError}
                        variant="outlined"
                        margin="normal"
                        onChange={e => modifyPhone(e.target.value)}
                    />  
                    <TextField
                        id="name-input"
                        fullWidth label="Email"
                        error={!!(emailError)}
                        helperText={emailError}
                        variant="outlined"
                        margin="normal"
                        onChange={e => modifyEmail(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
