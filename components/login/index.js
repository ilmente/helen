import { useState } from 'react'
import Router from 'next/router'

export default ({ password }) => {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')

    const onChange = ({ target }) => setValue(target.value)
    const onSubmit = (e) => {
        e.preventDefault()

        if (value != password) {
            setMessage('Nope!')
            return
        }

        setMessage('Yep!')
        Router.push({ pathname: '/baba', query: { dog: value } })
    }

    return (
        <form onSubmit={onSubmit} action="/baba">
            <p>
                Italian dogs 🐶 do <input type="text" value={value} onChange={onChange} maxLength="6" name="dog" />
                <button>&raquo;</button>
            </p>
            <p>{message}</p>
        </form>
    )
}
