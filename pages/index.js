import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#283238'}}>
      <Head>
        <title>Serial Writer</title>
        <meta name="description" content="Write data to flash memory using web usb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div> Hello world</div>
        <div className="container">
          <div className='fixed-bottom'>
            <div style={{ position: 'fixed', bottom: '0px', right: '0px' }}>
              <Image src="/zundamon_standing.png" alt="Zundamon Standing" layout={'intrinsic'} width={216} height={330} />
            </div>
          </div>
          <div className="row rounded align-items-center">
            <div className="col-4">
              <h1 className="display-6 text-white">Serial Writer</h1>
            </div>
            <div className="col-8">
              <div className='row'>
                <div className='col'>
                  <div className="progress mt-2">
                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className='col-auto'>
                  <button type="button" className="btn btn-dark" style={{ backgroundColor: '#4D4D4D' }}>Run</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4" style={{ height: "500px", backgroundColor: "blue" }}>
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="overflow-scroll"
                tabIndex="0"
                style={{ height: "500px" }}
              >
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
              </div>
            </div>
            <div className="col-4" style={{ height: "500px", backgroundColor: "red" }}>
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="overflow-scroll"
                tabIndex="0"
                style={{ height: "500px" }}
              >
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
              </div>
            </div>
            <div className="col-4" style={{ height: "500px", backgroundColor: "yellow" }}>
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="overflow-scroll"
                tabIndex="0"
                style={{ height: "500px" }}
              >
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Thidd heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ height: "200px", backgroundColor: "green" }}>
              <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="7" readOnly={true}></textarea>
            </div>
          </div>
        </div>
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
