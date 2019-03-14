import { useState } from 'react'
import css from './style.css'
import Loader from '../loader'

export default ({ image, caption }) => {
    const path = `/static/images/${image}.jpg`
    const [source, setSource] = useState()
    const [isLoaded, setLoaded] = useState(false)
    const [isPreview, setPreview] = useState(false)

    if (process.browser) {
        const image = new Image();

        image.onload = () => {
            setSource(path)
            setLoaded(true)
        }

        image.src = path;
    }

    const onClick = () => {
        setPreview(!isPreview)
    }

    return (
        <figure className={css.figure}>
            <img
                src={source}
                alt={image}
                onClick={onClick}
                className={`${css.image} ${isLoaded ? css.isLoaded : ''}`} />

            <Loader visible={!isLoaded} />

            <div onClick={onClick} className={`${css.preview} ${isPreview ? css.isPreview : ''}`}>
                <div className={css.previewContainer}>
                    <img
                        src={source}
                        alt={image}
                        className={css.previewImage} />
                    <cite className={css.previewCaption}>{caption}</cite>
                </div>
                <a className={css.previewClose}>
                    Click to close (x)
                </a>
            </div>

            {!!caption ? (
                <figcaption className={css.caption}>
                    <cite>{caption}</cite>
                </figcaption>
            ) : ''}
        </figure>
    )
}
