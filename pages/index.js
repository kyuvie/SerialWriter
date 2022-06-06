import Head from 'next/head'
import React, { useState, useRef, createRef } from 'react'
import MiddleCard from '../components/MiddleCard'
import Zundamon from '../components/Zundamon'
import FrontCard from '../components/FrontCard'
import ProgressBar from '../components/ProgressBar'
import NotificationTextArea from '../components/NotificationTextarea'
import CommunicationTextarea from '../components/CommunicationTextArea'

const sleep = (ms) => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, ms)
})

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      middleCards: new Map(),
      fromtCards: new Map()
    }

    this.addToMiddleCards = this.addToMiddleCards.bind(this)
    this.asyncRun = this.asyncRun.bind(this)
    this.deleteMiddleCardCallback = this.deleteMiddleCardCallback.bind(this)

    this.id = 0

    this.zundamonRef = createRef()
    this.progressBarRef = createRef()
    this.notificationTextAreaRef = createRef()
    this.comTextareaRef = createRef()

    this.frontCards = [<FrontCard addMiddleCardFunc={this.addToMiddleCards} key={1}/>]
  }

  addToMiddleCards() {
    this.id += 1

    const ref = createRef()
    const middleCard = <MiddleCard ref={ref} key={this.id} id={this.id} deleteFunc={this.deleteMiddleCardCallback} />

    this.setState(
      (state, props) => {
        return { middleCards: state.middleCards.set(this.id, { ref, middleCard }) }
      }
    )
  }

  async asyncRun() {
    if (!("serial" in navigator)) {
      this.notificationTextAreaRef.current.println("Unable to use Web Serial API")
    }
    
    try {
      const port = await navigator.serial.requestPort();
      const serialPortInfo = port.getInfo()
      this.notificationTextAreaRef.current.println("[Connected Device Info]")
      this.notificationTextAreaRef.current.println("UsbVendorId: 0x" + serialPortInfo.usbVendorId.toString(16))
      this.notificationTextAreaRef.current.println("UsbProductId: 0x" + serialPortInfo.usbProductId.toString(16))
      const serialOptions = {
        baudRate : 9600,
        dataBits : 8, // can't change
        stopBits : 1, // can't change
        parity : "none",
        bufferSize : 255,
        flowControl : "hardware",
      };
    } catch (e) {
      this.notificationTextAreaRef.current.println("Please select a device.")
      return
    }
    /*
    this.zundamonRef.current.toExecuting()

    let failed = false
    const step = 100.0 / this.state.middleCards.size
    let progress = 0

    this.progressBarRef.current.setStriped(true)

    for (const [i, card] of this.state.middleCards) {
      card.ref.current.toWhite()
    }

    for (const [i, card] of this.state.middleCards) {
      await sleep(2000)
      if (i % 3 == 0) {
        card.ref.current.toRed()
        this.zundamonRef.current.toFail()
        failed = true
        break
      }
      else {
        card.ref.current.toGreen()
      }
      progress += step
      console.log(progress)
      this.progressBarRef.current.percentage(progress)
    }
    if (!failed) {
      this.zundamonRef.current.toHappy()
    }

    this.progressBarRef.current.setStriped(false)
    */
  }

  deleteMiddleCardCallback(key) {
    if (!this.state.middleCards.has(key)) {
      alert('Delete Error')
    }
    this.state.middleCards.delete(key)
    this.setState((state, props) => {
      return { middleCards: new Map(state.middleCards) }
    })
  }

  render() {
    const middleCards = []

    for (const [i, card] of this.state.middleCards) {
      middleCards.push(card.middleCard)
    }

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
            <Zundamon ref={this.zundamonRef} />
            <div className="row rounded align-items-center">
              <div className="col-4">
                <h1 className="display-6 text-white">SC</h1>
              </div>
              <div className="col-8">
                <div className='row'>
                  <div className='col'>
                    <ProgressBar ref={this.progressBarRef} />
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
                  {this.frontCards}
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
                  {middleCards}
                </div>
              </div>
              <div className="col-4" style={{ height: "500px", backgroundColor: "#d3d3d3" }}>
                <CommunicationTextarea ref={this.comTextareaRef} />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ height: "200px", backgroundColor: "#d3d3d3" }}>
                <NotificationTextArea ref={this.notificationTextAreaRef} />
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
