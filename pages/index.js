import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useRef, createRef } from 'react'
import MiddleCard from '../components/MiddleCard'


class Home extends React.Component {
  static id = 0
  constructor(props) {
    super(props)
    this.state = {
      middleCards: []
    }

    this.addToMiddleCards = this.addToMiddleCards.bind(this)
    this.asyncRun = this.asyncRun.bind(this)

    this.cardsRef = []

    this.indexOfCards = 0

  }

  addToMiddleCards() {
    this.cardsRef.push(createRef())
    this.setState(
      { middleCards: [...this.state.middleCards, <MiddleCard ref={this.cardsRef[this.indexOfCards]} key={Home.id} />] }
    )

    this.indexOfCards += 1

    Home.id += 1
  }

  async asyncRun() {
    for (const card of this.cardsRef) {
      card.current.toGreen()
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: '#283238' }}>
        <Head>
          <title>Serial Writer</title>
          <meta name="description" content="Write data to flash memory using web usb" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="container">
            <div className='fixed-bottom'>
              {/*
            <div style={{ position: 'fixed', bottom: '0px', right: '0px' }}>
              <Image src="/zundamon_standing.png" alt="Zundamon Standing" layout={'intrinsic'} width={216} height={330} />
            </div>
  */}
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
                    <button type="button" className="btn btn-dark" style={{ backgroundColor: '#4D4D4D' }} onClick={this.asyncRun}>Run</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4" style={{ height: "500px", backgroundColor: "#d3d3d3" }}>
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example2"
                  data-bs-offset="0"
                  className="overflow-scroll"
                  tabIndex="0"
                  style={{ height: "500px" }}
                >
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Command</h5>
                      <h6 className="card-subtitle mb-2 text-muted">command description</h6>
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <label htmlFor="inputPassword6" className="col-form-label">value:</label>
                        </div>
                        <div className="col-auto">
                          <input type="password" id="inputPassword6" className="form-control form-control-sm" aria-describedby="passwordHelpInline" />
                        </div>
                      </div>
                      <div className="row align-items-center justify-content-end pt-4">
                        <div className="col-auto">
                          <button type="button" className="btn btn-primary btn-sm" onClick={this.addToMiddleCards}>add</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-4" style={{ height: "500px", backgroundColor: "#d3d3d3" }}>
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example2"
                  data-bs-offset="0"
                  className="overflow-scroll"
                  tabIndex="0"
                  style={{ height: "500px" }}
                >
                  {this.state.middleCards}

                </div>
              </div>
              <div className="col-4" style={{ height: "500px", backgroundColor: "#d3d3d3" }}>
                <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="19" readOnly={true} style={{ backgroundColor: "#ffffff" }}></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ height: "200px", backgroundColor: "#d3d3d3" }}>
                <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="7" readOnly={true} style={{ backgroundColor: "#ffffff" }}></textarea>
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
}

export default Home
/*function Home() {
  const [middleCards, setMiddleCards] = useState([])
  const [style, setStyle] = useState({ 'backgroundColor': 'red' })

  function addToMiddleCards() {
    setMiddleCards([...middleCards, <MiddleCard style={style} />])
  }

  const asyncRun = async () => {

    for (const card in middleCards) {
      card.toGreen()
    }
  }

  return ()
}*/
