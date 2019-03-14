import Link from 'next/link'
import Layout from '../layouts/main'

export default () => (
    <Layout title="Nope!">
        <h1>Nope! 🖕</h1>
        <p>
            Nice try, but I need to know how
            the Italian dogs do... <Link href="/"><a>Go back and try again.</a></Link>
        </p>
    </Layout>
)
