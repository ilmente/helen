import { useState } from 'react'
import Router from 'next/router'
import Main from '../../layouts/main'

export default () => {
    const [my, setMy] = useState('')
    const [message, setMessage] = useState('')

    const onChange = ({ target }) => setMy(target.value)
    const onSubmit = (e) => {
        e.preventDefault()

        if (my != process.env.auth.my) {
            setMessage('Nope!')
            return
        }

        setMessage('')
        Router.push('/baba')
    }

    return (
        <Main title="Welcome">
            <p>
                <strong>Helen turns 27: oh my deer, she is so old!</strong>
            </p>
            <form onSubmit={onSubmit}>
                <p>
                    Welcome, my <input type="text" value={my} onChange={onChange} />
                    <button type="submit">Go!</button>
                </p>
            </form>
            <p>{message}</p>
        </Main>
    )
}
