import { withRouter } from 'next/router'
import Layout from '../layouts/main'
import Figure from '../components/figure'
import Gallery from '../components/gallery'
import Nope from './nope'

export default withRouter(({ router }) => {
    const isAuthorized = !!router.query.dog
        && router.query.dog === process.env.auth.password;

    return isAuthorized ? (
        <Layout title="Baba">
            <h1>Hello baba!</h1>
            <p>
                So! Here we are!
            </p>
            <Figure image="face" caption='wave' />
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <Gallery images={[
                'odessa1', 'odessa2', 'odessa3'
            ]} caption="Odessa"/>
            <p>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>

            <hr/>

            <h4>Disclaimer</h4>
            <p>
                This site has been totally <em>hand crafted</em>
                in around 12 hours stolen from work, sleep and sex. 👉👌🙈
                It's based only on nextjs and react.
                I'm writing these details down just to brag. 😎
            </p>

            <hr />

            <h4>Photos</h4>
            <p>
                If you want to take a better look at the images,
                you can <a href="/static/files/photos.zip">download them from here (~63mb)</a>.
            </p>
        </Layout>
    ) : Nope()
})
