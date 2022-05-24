import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Serial Writer</title>
        <meta name="description" content="Write data to flash memory using web usb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1 className="display-6">Serial Writer</h1>
            </div>
            <div className="col-6">
              <div className='row'>
                <div className='col'>
                  <div className="progress">
                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>                
                </div>
                <div className='col-auto'>
                  <button type="button" className="btn btn-dark">Dark</button>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h1>ずんだもん</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-4" style={{ height: "500px", backgroundColor: "blue" }}>
              <div className="overflow-auto, text-break">abcdefhijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </div>
            <div className="col-4" style={{ height: "500px", backgroundColor: "red" }}>
              <div className="overflow-auto, text-break">abcdefhijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </div>
            <div className="col-4" style={{ height: "500px", backgroundColor: "yellow" }}>
              <div className="overflow-auto, text-break">abcdefhijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ height: "200px", backgroundColor: "green" }}>

            </div>
          </div>
        </div>
        {/*
        <h1 className={styles.title}>
          Serial Writer
        </h1>
  */}

        {/*
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        */}

        {/*
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      */}
      </main>

      {/*
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    */}
    </div>
  )
}
