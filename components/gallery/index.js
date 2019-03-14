import css from './style.css'
import Figure from '../figure'

export default ({ images, caption }) => (
    <section className={css.gallery}>
        {images.map((image, index) => (
            <div className={css.cell} key={`${css.gallery}-${index}`}>
                <Figure image={image} />
            </div>
        ))}
        <div className={css.clear}></div>
        <cite>{caption}</cite>
    </section>
)
