import React, { useState, createContext, useContext } from "react";

export const CheckoutContext = createContext();

export function useCheckoutContext() { return useContext(CheckoutContext) };

export const CheckoutProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [dni, setDni] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartment, setApartment] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [shipping, setShipping] = useState('');

    const [nameError, setNameError] = useState(undefined);
    const [lastnameError, setLastnameError] = useState(undefined);
    const [dniError, setDniError] = useState(undefined);
    const [streetError, setStreetError] = useState(undefined);
    const [houseNumberError, setHouseNumberError] = useState(undefined);
    const [postalCodeError, setPostalCodeError] = useState(undefined)
    const [cityError, setCityError] = useState(undefined);
    const [phoneError, setPhoneError] = useState(undefined);
    const [emailError, setEmailError] = useState(undefined);

    const [isFormValid, setIsFormValid] = useState(false);

    const validateRequiredTextInput = (value, minLenght = 1, maxLenght = 30 ) => {
        let errorMessage = ''

        if(value.length === 0) {
            errorMessage = 'Este campo es obligatorio'
        } else if(value.length < minLenght) {
            errorMessage = `El campo no puede tener menos de ${minLenght} caracteres`
        } else if (value.length > maxLenght){
            errorMessage = `El campo no puede tener mas de ${maxLenght} caracteres`
        }

        return errorMessage
    }

    const modifyName = (name) => {
        setName(name)
        setNameError(validateRequiredTextInput(name, 3))
        validateForm()
    }

    const modifyLastname = (lastname) => {
        setLastname(lastname)
        setLastnameError(validateRequiredTextInput(lastname, 3))
        validateForm()
    }

    const modifyDni = (dni) => {
        setDni(dni)
        setDniError(validateRequiredTextInput(dni,6,8))
        validateForm()
    }

    const modifyStreet = (street) => {
        setStreet(street)
        setStreetError(validateRequiredTextInput(street,4,45))
        validateForm()
    }

    const modifyHouseNumber = (houseNumber) => {
        setHouseNumber(houseNumber)
        setHouseNumberError(validateRequiredTextInput(houseNumber,1,5))
        validateForm()
    }

    const modifyPostalCode = (postalCode) => {
        setPostalCode(postalCode)
        setPostalCodeError(validateRequiredTextInput(postalCode,3,8))
        validateForm()
    }

    const modifyCity = (city) => {
        setCity(city)
        setCityError(validateRequiredTextInput(city,4,40))
        validateForm()
    }

    const modifyPhone = (phone) => {
        setPhone(phone)
        setPhoneError(validateRequiredTextInput(phone,1,40))
        validateForm()
    }

    const modifyEmail = (email) => {
        setEmail(email)
        setEmailError(validateRequiredTextInput(email,1,40))
        validateForm()
    }

    const modifyShipping = (shipping) => {
        setShipping(shipping)
        validateShipping()
        validateForm()
    }

    const validateShipping = () => {
      if (shipping !== 'local') {
            setStreetError(validateRequiredTextInput(street))
            setHouseNumberError(validateRequiredTextInput(houseNumber,1,5))
            setPostalCodeError(validateRequiredTextInput(postalCode,3,8))
            setCityError(validateRequiredTextInput(city))
        }  else {
            setStreetError('')
            setHouseNumberError('')
            setPostalCodeError('')
            setCityError('')
        }
    }

    const validateInputsForm = () => {        
        setNameError(validateRequiredTextInput(name))
        setLastnameError(validateRequiredTextInput(lastname))
        setDniError(validateRequiredTextInput(dni))
        
        validateShipping()

        setPhoneError(validateRequiredTextInput(phone))
        setEmailError(validateRequiredTextInput(email))

        return validateForm()
    }

    const validateForm = () => { 
        setIsFormValid(nameError === '' && lastnameError === '' && dniError === '' && streetError === '' && houseNumberError === '' && postalCodeError === '' && cityError === '' && phoneError === '' && emailError === '')
        return (nameError === '' && lastnameError === '' && dniError === '' && streetError === '' && houseNumberError === '' && postalCodeError === '' && cityError === '' && phoneError === '' && emailError === '')
    }

    const resetFormErrors = () => {
        setNameError(undefined)
        setLastnameError(undefined)
        setDniError(undefined)
        setStreetError(undefined)
        setHouseNumberError(undefined)
        setPostalCodeError(undefined)
        setCityError(undefined)
        setPhoneError(undefined)
        setEmailError(undefined)
    }

    return <CheckoutContext.Provider value={{
        validateForm,
        validateInputsForm,
        nameError,
        name,
        modifyName,
        lastnameError,
        lastname,
        modifyLastname,
        dniError,
        dni,
        modifyDni,
        streetError,
        street,
        modifyStreet,
        houseNumberError,
        houseNumber,
        modifyHouseNumber,
        apartment,
        setApartment,
        postalCodeError,
        postalCode,
        modifyPostalCode,
        cityError,
        city,
        modifyCity,
        phoneError,
        phone,
        modifyPhone,
        emailError,
        email,
        modifyEmail,
        shipping,
        modifyShipping,
        isFormValid,
        resetFormErrors
    }}>
        {children}
    </CheckoutContext.Provider>
}
