import { useState, useEffect } from 'react';

export default function FormValidation() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [emailError, setEmailError] = useState('Мейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    const [loginFormValid, setLoginFormValid] = useState(false)

    const [profileFormValid, setProfileFormValid] = useState(false)


    const nameHandler = (e) => {
        setName(e.target.value)
        if ((e.target.value.length < 3 || e.target.value.length > 40)) {
            setNameError('Имя должно быть длиннее 2-х символов')
            if (!e.target.value) {
                setNameError('Имя не должно быть пустым')
            }
        } else {
            setNameError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if ((e.target.value.length < 3 || e.target.value.length > 40)) {
            setPasswordError('Пароль должен быть длиннее 2-х символов')
            if (!e.target.value) {
                setPasswordError('Пароль не должен быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('E-mail неккоректный')
        } else {
            setEmailError('')
        }
    }

    useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [emailError, passwordError, nameError])


    useEffect(() => {
        if (emailError || passwordError) {
            setLoginFormValid(false)

        } else {
            setLoginFormValid(true)
        }

    }, [emailError, passwordError])

    useEffect(() => {
        if (nameError || emailError) {
            setProfileFormValid(false)

        } else {
            setProfileFormValid(true)
        }

    }, [emailError, nameError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }


    return {
        nameDirty,
        emailDirty,
        passwordDirty,
        emailError,
        passwordError,
        nameError,
        blurHandler,
        nameHandler,
        emailHandler,
        passwordHandler,
        formValid,
        loginFormValid,
        profileFormValid
    };
}