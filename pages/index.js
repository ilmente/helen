import Layout from '../layouts/main'
import Login from '../components/login'

export default () => (
    <Layout title="Hi!">
        <h1>Hi!</h1>
        <p>
            <strong>Helen turns 27.<br/>Oh my deer, she is so old...</strong>
        </p>
        <Login password={process.env.auth.password} />
    </Layout>
)
