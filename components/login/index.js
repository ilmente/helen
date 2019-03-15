import { useState } from 'react'
import Router from 'next/router'

const defaultMessage = 'Complete the following sentence with the proper animal call 🙊 (x2 times).'
const successMessage = 'Yep! Wait for it... 😘'
const errorMessages = [
    'Not really... 🤔',
    'Nope. 😤',
    'Don\'t you remember? 😱',
    'I don\'t think so. 💩',
    'C\'mon! 😜',
    'NOOOOOOOOOOOOOO! No. 😈'
]

const getErrorMessage = () => errorMessages[Math.floor(Math.random() * errorMessages.length)]

export default ({ password }) => {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState(defaultMessage)

    const onChange = ({ target }) => setValue(target.value)
    const onSubmit = (e) => {
        e.preventDefault()

        if (value != password) {
            setMessage(getErrorMessage())
            return
        }

        setMessage(successMessage)
        Router.push({ pathname: '/baba', query: { dog: value } })
    }

    return (
        <form onSubmit={onSubmit} action="/baba">
            <p>{message}</p>
            <p>
                Italian dogs 🐶 do <input type="text" value={value} onChange={onChange} maxLength="6" name="dog" autoComplete="off" />
                <button>&raquo;</button>
            </p>
        </form>
    )
}
