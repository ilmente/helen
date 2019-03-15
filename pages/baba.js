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
                So here we are! I'm starting to write this text while I'm at work,
                at Valerii's desk, listening to <em>Waterways</em>, watching
                you fighting with that for-sure-crappy php code,
                making funny faces and listening to some loud music in a headset
                that is bigger than your own head.
            </p>

            <iframe width="100%" height="100" src="https://www.youtube.com/embed/t7Ca7Va-GHY?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <p>
                It's Thursday, 14 March, 17.54.<br />
                In six minutes we're heading to the theatre.
            </p>

            <Figure image="airplane" caption="Ukranian snowy fields on the way to Kharkiv" />

            <p>
                The reason why I'm doing this is because I feel the need
                to give and share with you something strictly and intimately mine;
                I chose to give you my time (<em>~18 hours to bake this &quot;masterpiece&quot;</em>),
                my passion (<em>coding</em>) and my creativity (<em>something that,
                I hope, still works as it used to be when I was a child</em>).
            </p>

            <p>
                <strong>This is your birthday gift.</strong>
            </p>

            <p>
                Probably it's not the best gift as we both work on web stuff everyday,
                but that's what I know and do better. Obviously, it's not as amazing
                as my home-made pasta, my ability to talk with hands,
                my super-power of falling asleep on-demand, my capacity of always arrive
                to places exactly when I intended to (that usually is at
                least 15 minutes late) and my undeniably wide set of skills in
                mastering the art of <em>very quick</em> sex 🐒. But it's good enough.
            </p>

            <Figure image="kharkiv" caption="The view from the Kharkiv theatre" />

            <p>
                You're late: now I have 10-20 minutes more to write,
                before we leave for the <em>pantomime</em>. Another
                thing you'll notice here are the images:
                yep, I took a lot of photos of you because I wanted to use them here.
                Some sort of <em>#helenproject</em>. Enjoy
                your big smily funny face, baba!
            </p>

            <Figure image="face" caption="Big smily funny baba face" />

            <p>
                Friday, 15 March, 14.37.<br/>
                In these 2 weeks I really enjoyed Kharkiv, the office people,
                the cities and the daily life. Five more weeks are ahead of us, together.
                It might be scary. I know. But I really like to spend time with you,
                or at least knowing that, at some point in my day, I can touch,
                kiss and hug you. And, why not, have you... 😎
            </p>

            <Gallery images={[
                'kharkiv2', 'smoke'
            ]} caption="Kharkiv" />

            <p>
                Because sex is awesome with you. It really is.
                But even sleeping, cooking, eating, talking, laughing, fighting,
                working, staring, playing, drinking tea, travelling and walking
                with you is just as awesome. I'm learning back how beautiful it is
                to share life with someone, from big confused thoughts to daily details.
                I'm learning to be less cynic and more focused on my goals.
                You challenge me, making me a better person, less superficial
                and prone to belly conclusions. You're showing me a better side of myself.
            </p>

            <p><strong>So, thank you.</strong></p>

            <Gallery images={[
                'still', 'sexy', 'train', 'book', 'meal', 'mumble'
            ]} caption="Some stolen picture of you doing things..."/>

            <p>
                Friday, 15 March, 19.16.<br />
                You're in the train, I'm fixing last minute things on this site.
                A few people here in the office.
                Time to deploy last version of your 12th gift...
            </p>

            <Gallery images={[
                'sea', 'pier', 'seaside', 'wave'
            ]} caption="The Black Sea" />

            <p>
                Come back here every time you feel off or sad,
                when you think you're not good enough or prepared enough,
                when you're confused and upset about your choices and future,
                when you think about running away because life hit a little harder on you.<br/>
                Come back here and read how remarkable you are,
                how much you've done at least for this fat Italian guy
                and how much I'm happy to have you snoring in my ears,
                pushing me on the edge of the bed every fucking single night
                we sleep together. 😴
            </p>

            <Gallery images={[
                'odessa1', 'candle', 'odessa2', 'odessa3'
            ]} caption="Odessa" />

            <p>
                I'll leave you with the best photo of all.
                The one that you made.
                The one that explains why I'm the architect in Spryker sexiest team.
                Hands down.
            </p>

            <Figure image="me" caption="Me on the Think Tank Throne" />

            <p>
                <strong>I love you, my deer.</strong><br />Happy birthday.<br />
                Enjoy <em>your</em> day and don't be sad: 27 is just a number.
            </p>

            <p>
                Yours,<br />
                <em>Alessandro</em>
            </p>

            <hr/>

            <footer>
                <p>
                    This site has been totally <em>hand crafted</em> in
                    around 18 hours stolen from work, sleep and sex. 👉👌🙈
                    It's based only on nextjs and react.
                    I'm writing these details down just to brag about them. 😎
                </p>
                <p>
                    <a target="_blank" href="/static/files/photos.zip">
                        Download the photos in HD
                    </a> if you want to take a better look at them (~63mb).
                </p>
            </footer>
        </Layout>
    ) : Nope()
})
