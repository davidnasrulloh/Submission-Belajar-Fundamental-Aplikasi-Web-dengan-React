import React, { useContext } from 'react'
import useLanguage from '../hooks/useLanguage'
import useInput from '../hooks/useInput'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../utils/network-data'
import LocaleContext from '../contexts/LocaleContext'
import CustomInput from '../components/customComponent/CustomInput'

const RegisterPage = () => {

    const [name, onNameChangeHandler] = useInput('')
    const [email, onEmailChangeHandler] = useInput('')
    const [password, onPasswordChangeHandler] = useInput('')
    const [confirmPassword, onConfirmPasswordChangeHandler] = useInput('')

    const { locale } = useContext(LocaleContext)
    const navigate = useNavigate()
    const textLangApp = useLanguage('mainApp')
    const textRegister = useLanguage('register')


    const onHandleSubmit = (ev) => {
        ev.preventDefault();

        if(password !== confirmPassword){
            const infoAlert = locale === 'id' ? 'Konfirmasi password tidak sesuai' : 'Confirmation Password is Not Valid'
            alert(infoAlert)
        }

        register({name, email, password})
            .then((res)=>{
                if(!res.error){
                    alert(textRegister.message.success)
                    navigate('/')
                }
            })
            .catch(()=>{
                alert(textLangApp.message.error)
            })
    }

    return (
        <div className='register-page'>
            <h2>{textRegister.title}</h2>
            <form className='input-register' onSubmit={onHandleSubmit}>
                <label htmlFor='name'>Name</label>
                <CustomInput 
                    type="text"
                    name="name"
                    value={name}
                    onChange={onNameChangeHandler}
                    minLength="6"
                    maxLength="255"
                    required={true}
                    />
                <label htmlFor="email">Email</label>
                <CustomInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={onEmailChangeHandler}
                    minLength="6"
                    maxLength="255"
                    required={true}
                    />
                <label htmlFor="password">Password</label>
                <CustomInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={onPasswordChangeHandler}
                    minLength="6"
                    maxLength="255"
                    required={true}
                    />
                <label htmlFor="password">Confirm Password</label>
                <CustomInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChangeHandler}
                    minLength="6"
                    maxLength="255"
                    required={true}
                    />
                <button type="submit">Register</button>
            </form>
            <p className='register-page__footer'>
                {textRegister.textFooter} {" "} <Link to="/login">{textRegister.linkRegister}</Link>
            </p>
        </div>
    )
}

export default RegisterPage