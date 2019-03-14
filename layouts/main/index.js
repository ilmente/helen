import Head from 'next/head'
import './style.css'

export default ({ title, children }) => {
    const name = !!title
        ? `${title} | ${process.env.site.name}`
        : process.env.site.name;

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="title" content={name} />
                <meta name="description" content={process.env.site.description} />
                <title>{name}</title>
            </Head>
            <main>{children}</main>
        </>
    )
}
