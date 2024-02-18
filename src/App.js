import 'bulma/css/bulma.css'
import BtsCard from './BtsCard.js'
import jhImage from './bts/jh.jpg'
import rmImage from './bts/rm.jpg'
import sugaImage from './bts/suga.png'
import jinImage from './bts/jin.jpg'
import kookImage from './bts/kook.webp'
import jiminImage from './bts/jimin.webp'
import taeImage from './bts/tae.jpg'

function App() {
  return (
    <div>
      <section className='hero is-danger is-bold'>
        <div className='hero-body'>
          <p className='title'>BTS Members Quotes.</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <BtsCard
                name="Jhope"
                handle="@raperDancer"
                image={jhImage}
                description="Even when this rain stops, when clouds go away, I stand here, just the same."
              />
            </div>

            <div className='column is-4'>
              <BtsCard
                name="rm"
                handle="@raper leader"
                image={rmImage}
                description="If you want to love others, I think you should love yourself first."
              />
            </div>

            <div className='column is-4'>
              <BtsCard
                name="yoongi"
                handle="@raper"
                image={sugaImage}
                description="Life is tough, and things don't always work out well, but we should be brave and go on with our lives."
              />
            </div>
          </div>

          <div className='columns'>
            <div className='column is-4'>
              <BtsCard
                name="Jimin"
                handle="@singer"
                image={jiminImage}
                description="Once your heart is moved, it will develop into something better and positive."
              />
            </div>

            <div className='column is-4'>
              <BtsCard
                name="Jin"
                handle="@worldwideHandsome"
                image={jinImage}
                description="Your presence can give happiness. I hope you remember that."
              />
            </div>

            <div className='column is-4'>
              <BtsCard
                name="JungKook"
                handle="@dancer"
                image={kookImage}
                description="Living without passion is like being dead."
              />
            </div>
          </div>

          <div className='columns'>
            <div className='column is-4'>
              <BtsCard
                name="Taehyung"
                handle="@dancer"
                image={taeImage}
                description="Don't be trapped in someone else's dream."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App 