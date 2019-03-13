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
        Router.push('/baba')
    }

    return (
        <form onSubmit={onSubmit}>
            <p>
                The dog does <input type="text" value={value} onChange={onChange} />
                <button>&raquo;</button>
            </p>
            <p>{message}</p>
        </form>
    )
}
