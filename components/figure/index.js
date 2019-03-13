import { useState } from 'react'
import css from './style.css'
import Loader from '../loader'

export default ({ src, caption }) => {
    const [source, setSource] = useState()
    const [isLoaded, setLoaded] = useState(false)

    if (process.browser) {
        const image = new Image();

        image.onload = () => {
            setSource(src)
            setLoaded(true)
        }

        image.src = src;
    }

    return (
        <figure className={css.figure}>
            <img src={source} className={`${css.image} ${isLoaded ? css.isLoaded : ''}`} />
            <Loader visible={!isLoaded} />
            <figcaption className={css.caption}>
                <em>{caption}</em>
            </figcaption>
        </figure>
    )
}
