import Head from 'next/head'
import React, { createRef } from 'react'
import MiddleCard from '../components/MiddleCard'
import Zundamon from '../components/Zundamon'
import ProgressBar from '../components/ProgressBar'
import NotificationTextArea from '../components/NotificationTextarea'
import CommunicationTextarea from '../components/CommunicationTextArea'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import ConfigPage from '../components/ConfigPage'
import Button from 'react-bootstrap/Button'
import json5 from 'json5'
import OnlySendCard from '../components/front_cards/OnlySendCard'
import ReceiveCard from '../components/front_cards/ReceiveCard'

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
      frontCards: new Map(),
      activeTabKey: 'home',
      id: 0,
    }

    this.addToMiddleCards = this.addToMiddleCards.bind(this)
    this.asyncRun = this.asyncRun.bind(this)
    this.deleteMiddleCardCallback = this.deleteMiddleCardCallback.bind(this)
    this.addDeviceCard = this.addDeviceCard.bind(this)
    this.clickDownloadButton = this.clickDownloadButton.bind(this)
    this.onChangeSequenceFile = this.onChangeSequenceFile.bind(this)


    this.zundamonRef = createRef()
    this.progressBarRef = createRef()
    this.notificationTextAreaRef = createRef()
    this.comTextareaRef = createRef()
    this.configPageRef = createRef()

    this.frontCards = [
      // <RawCard addMiddleCardFunc={this.addToMiddleCards} key={2} />,
      <OnlySendCard addMiddleCardFunc={this.addToMiddleCards} key={1} />,
      <ReceiveCard addMiddleCardFunc={this.addToMiddleCards} key={2} />,
      // <FrontCard addMiddleCardFunc={this.addToMiddleCards} key={1} />,
    ]
  }

  addDeviceCard(data) {

    this.setState(
      (state, props) => {
        const ref = createRef()
        const middleCard = <MiddleCard ref={ref} key={state.id} id={state.id} deleteFunc={this.deleteMiddleCardCallback} data={data} title={'Config'} />
        return {
          middleCards: state.middleCards.set(state.id, { ref, middleCard, data }),
          activeTabKey: 'home',
          id: state.id + 1,
        }
      }
    )
  }

  addToMiddleCards(middleCardModel) {
    this.setState(
      (state, props) => {

        const ref = createRef()
        const middleCard = <MiddleCard
          ref={ref}
          key={state.id}
          id={state.id}
          deleteFunc={this.deleteMiddleCardCallback}
          data={middleCardModel.data}
          title={middleCardModel.title}
        />
        const newMap = new Map(state.middleCards)
        newMap.set(state.id, { ref, middleCard, data: middleCardModel.data })
        return { middleCards: newMap, id: state.id + 1 }
      }
    )
  }

  setTabKey(key) {
    this.setState({
      activeTabKey: key
    })
  }

  archiveMiddleCardsToJson() {
    const content = []
    for (const middleCard of this.state.middleCards) {
      content.push(middleCard[1].data)
    }
    return json5.stringify(content)
  }

  clickDownloadButton() {
    const text = this.archiveMiddleCardsToJson()
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.download = 'sequence.txt';
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async asyncRun() {
    if (!("serial" in navigator)) {
      this.notificationTextAreaRef.current.println("Unable to use Web Serial API")
      return
    }


    /*
    try {
      const port = await navigator.serial.requestPort();
      const serialPortInfo = port.getInfo()
      this.notificationTextAreaRef.current.println("[Connected Device Info]")
      this.notificationTextAreaRef.current.println("UsbVendorId: 0x" + serialPortInfo.usbVendorId.toString(16))
      this.notificationTextAreaRef.current.println("UsbProductId: 0x" + serialPortInfo.usbProductId.toString(16))
      const serialOptions = {
        baudRate: 9600,
        dataBits: 8, // can't change
        stopBits: 1, // can't change
        parity: "none",
        bufferSize: 255,
        flowControl: "hardware",
      };
    } catch (e) {
      this.notificationTextAreaRef.current.println("Please select a device.")
      return
    }
    */
    this.zundamonRef.current.toExecuting()

    // ******* start initialization *******
    let failed = false
    const step = 100.0 / this.state.middleCards.size
    let progress = 0
    this.progressBarRef.current.percentage(progress)

    this.progressBarRef.current.setStriped(true)

    for (const [i, card] of this.state.middleCards) {
      card.ref.current.toWhite()
    }
    // ******** end initialization **********
    let foundPort = null

    for (const [i, card] of this.state.middleCards) {
      if (card.data.title === 'config') {
        console.log(card.data)
        // search port
        for (const port of await navigator.serial.getPorts()) {
          if (port.getInfo().usbProductId === card.data.selectedUsbProductId &&
            port.getInfo().usbVendorId === card.data.selectedUsbVendorId) {
            foundPort = port
          }
        }
        if (foundPort === null) {
          this.notificationTextAreaRef.current.println("Couldn't find available port")
          return
        }

        try {
          await foundPort.close()
        } catch (e) {

        }
        try {
          await foundPort.open(card.data)
          this.notificationTextAreaRef.current.println("Open successfully")
        }
        catch (e) {
          this.notificationTextAreaRef.current.println(foundPort.state)
          this.notificationTextAreaRef.current.println("Invalid SerialOptions or Invalid State")
          this.notificationTextAreaRef.current.println(e.message)
          return
        }
      }
      else if (card.data.title === 'OnlySendCard') {
        let data = card.data.inputValue.split(',').map(s => parseInt(s))
        data = Uint8Array.from(data)
        await this.serialSend(foundPort, data)
      }
      else if (card.data.title === 'ReceiveCard' && foundPort.readable) {
        const start = Date.now()
        const reader = foundPort.readable.getReader()
        // timeout
        while (Date.now() - start < 1000) {
          const { value, done } = await reader.read();
          if (done) {
            // |reader| has been canceled.
            break;
          }
          // Do something with |value|...
          this.comTextareaRef.current.println("<-" + value.toString())
        }
        
        reader.releaseLock()
      }
      /*
      if (i % 3 == 0) {
        card.ref.current.toRed()
        this.zundamonRef.current.toFail()
        failed = true
        break
      }
      */

      card.ref.current.toGreen()
      progress += step
      this.progressBarRef.current.percentage(progress)
    }

    await foundPort.close()
    this.notificationTextAreaRef.current.println("Close successfully")

    if (!failed) {
      this.zundamonRef.current.toHappy()
    }

    this.progressBarRef.current.setStriped(false)
  }

  async serialSend(openedPort, uint8array) {
    this.comTextareaRef.current.println("-> " + uint8array.toString())
    const writer = openedPort.writable.getWriter()
    await writer.write(uint8array)
    await writer.close()
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

  onChangeSequenceFile(e) {
    if (e.target.files.length > 0) {
      const jsonFile = e.target.files[0];
      // FileReader??????????????????????????????????????????????????????
      var reader = new FileReader();
      // ??????????????????????????????????????????????????????
      reader.onload = () => {
        const array = json5.parse(reader.result);
        if (Array.isArray(array)) {
          for (const data of array) {
            this.addToMiddleCards(data)
          }
        }
        else {
          alert("Invalid file")
        }
      };
      // ?????????????????????????????????
      reader.readAsText(jsonFile);
    } else {
    }
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
              <Tabs defaultActiveKey='home' activeKey={this.state.activeTabKey} onSelect={(k) => this.setTabKey(k)} id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Sequence">
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
                        style={{ height: "460px" }}
                      >
                        {middleCards}
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <Form.Control type="file" size="sm" onChange={this.onChangeSequenceFile} />
                        </div>
                        <div className="col-auto px-0">
                          <Button size="sm" onClick={this.clickDownloadButton}>Download</Button>
                        </div>
                      </div>
                    </div>
                    <div className="col-4" style={{ height: "500px", backgroundColor: "#d3d3d3" }}>
                      <CommunicationTextarea ref={this.comTextareaRef} />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="config" title="Config" style={{ backgroundColor: "white" }}>
                  <div className="row">
                    <div className="col-12" style={{ backgroundColor: "white" }}>
                      <div
                        data-bs-spy="scroll"
                        data-bs-target="#navbar-example2"
                        data-bs-offset="0"
                        className="overflow-scroll"
                        tabIndex="0"
                        style={{ height: "500px" }}
                      >
                        <ConfigPage ref={this.configPageRef} addDeviceCard={this.addDeviceCard} />
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
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