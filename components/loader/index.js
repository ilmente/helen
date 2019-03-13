import css from './style.css'

export default ({ visible }) => visible ? (
    <span className={css.container}>
        <span className={css.loader}>
            <span></span>
            <span></span>
        </span>
    </span>
) : null
