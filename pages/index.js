import Layout from '../layouts/main'
import Login from '../components/login'

export default () => (
    <Layout>
        <h1>16.03.2019</h1>
        <p>
            <strong>Helen turns 27.<br/>Oh my deer, she is so old...</strong>
        </p>
        <p>
            Happy birthday!<br />
            I guess you want to access.<br />
            Well, find the password then... 😜
        </p>
        <Login password={process.env.auth.password} />
    </Layout>
)
