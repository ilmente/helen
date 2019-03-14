import { withRouter } from 'next/router'
import Layout from '../layouts/main'
import Figure from '../components/figure'
import Gallery from '../components/gallery'
import Nope from './_error'

export default withRouter(({ router }) => {
    const isAuthorized = !!router.query.dog
        && router.query.dog === process.env.auth.password;

    return isAuthorized ? (
        <Layout title="Baba">
            <h1>Baba</h1>
            <Figure image="test" caption='test' />
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <Gallery images={[
                'test', 'test', 'test', 'test'
            ]} caption="test"/>
            <p>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>
        </Layout>
    ) : Nope()
})