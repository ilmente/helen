import Layout from '../layouts/main'

export default () => (
    <Layout title="404">
        <h1>404! 🖕</h1>
        <p>
            Sorry, what you're looking for it's not here.<br />
            <strong>What about 10 straight hours of Nyan cat instead?</strong>
        </p>
        <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/wZZ7oFKsKzY?autoplay=1&controls=0&loop=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </Layout>
)
