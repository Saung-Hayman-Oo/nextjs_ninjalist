import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja</title>
      </Head>
      <div>
      
        <h1 className={ styles.title }>HomePage</h1>
        <p className={ styles.text }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus tristique lectus, ac accumsan nunc tincidunt a. Aenean malesuada urna id lacus consequat luctus. Donec varius pellentesque orci at mollis. Quisque vel cursus leo. Nam non orci id velit mollis posuere. Donec a auctor orci, id suscipit tellus. Sed sed tellus massa. Fusce faucibus consequat velit in iaculis.

          Mauris sit amet tortor est. Nunc leo orci, vehicula sed turpis ut, iaculis tempor neque. Vestibulum odio nulla, volutpat vitae commodo ut, dignissim eu elit. Phasellus a laoreet velit. Integer imperdiet nibh vitae orci fringilla, eget accumsan nunc sollicitudin. Etiam id quam lacus. Duis egestas porta lectus vel volutpat. Curabitur aliquam sem est, ac maximus ligula varius in.
        </p>
        <p className={ styles.text }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus tristique lectus, ac accumsan nunc tincidunt a. Aenean malesuada urna id lacus consequat luctus. Donec varius pellentesque orci at mollis. Quisque vel cursus leo. Nam non orci id velit mollis posuere. Donec a auctor orci, id suscipit tellus. Sed sed tellus massa. Fusce faucibus consequat velit in iaculis.

        </p>
        <Link href="/ninjas" >
          <a className={styles.btn}>See Ninja List</a>
        </Link>
      </div>
    </>
  )
}
