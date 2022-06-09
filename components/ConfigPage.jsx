import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


class ConfigPage extends React.Component {
    defaultBaudRate = 115200
    defaultDataBits = 8
    defaultStopBits = 1
    defaultParity = "none"
    defaultBufferSize = 255
    defaultFlowControl = 'hardware'

    constructor(props) {
        super(props)
        this.state = {
            device: null,
            baudRate: this.defaultBaudRate,
            dataBits: this.defaultDataBits,
            stopBits: this.defaultStopBits,
            parity: this.defaultParity,
            bufferSize: this.defaultBufferSize,
            flowControl: this.defaultFlowControl
        }
        
        this.getConfig = this.getConfig.bind(this)
    }
    
    getConfig() {
        // needs deep copy?
        return {...this.state}
    }

    render() {
        return (
            <div className="mt-3">
                <Button className="mb-3">Add Device</Button>
                <Form.Group className="mb-3" controlId="configForm.DeviceInput">
                    <Form.Label>Select Device</Form.Label>
                    <Form.Select className="mb-3" aria-label="Device select">
                        <option>Open this select menu</option>
                    </Form.Select>
                </Form.Group>
                <div>USB Vendor Id:</div>
                <div>USB Product Id:</div>
                <Form.Group className="mb-3" controlId="configForm.BaudRateInput">
                    <Form.Label>Baud Rate</Form.Label>
                    <Form.Select
                        className="mb-3"
                        aria-label="Baudrate select"
                        defaultValue={this.state.baudRate}
                        onChange={e => this.setState({ baudRate: e.target.value })}
                    >
                        <option value="9600">9600 bits/s</option>
                        <option value="19200">19200 bits/s</option>
                        <option value="28800">28800 bits/s</option>
                        <option value="38400">38400 bits/s</option>
                        <option value="57600">57600 bits/s</option>
                        <option value="76800">76800 bits/s</option>
                        <option value="115200">115200 bits/s</option>
                        <option value="230400">230400 bits/s</option>
                        <option value="460800">460800 bits/s</option>
                        <option value="576000">576000 bits/s</option>
                        <option value="921600">921600 bits/s</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="configForm.DataBitsInput">
                    <Form.Label>Data Bits</Form.Label>
                    <Form.Select
                        className="mb-3"
                        aria-label="DataBits select"
                        defaultValue="8"
                        onChange={e => this.setState({ dataBits: e.target.value })}
                    >
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="configForm.StopBitsInput">
                    <Form.Label>Stop Bits</Form.Label>
                    <Form.Select
                        className="mb-3"
                        aria-label="StopBits select"
                        defaultValue="1"
                        onChange={e => this.setState({ stopBits: e.target.value })}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="configForm.ParityInput">
                    <Form.Label>Parity</Form.Label>
                    <Form.Select
                        className="mb-3"
                        aria-label="Parity Select"
                        defaultValue="none"
                        onChange={e => this.setState({ parity: e.target.value })}
                    >
                        <option value="none">None</option>
                        <option value="even">Even</option>
                        <option value="odd">Odd</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="configForm.BufferSizeInput">
                    <Form.Label>Buffer Size</Form.Label>
                    <Form.Select
                        className="mb-3"
                        aria-label="BufferSize Select"
                        onChange={e => this.setState({ bufferSize: e.target.value })}
                    >
                        <option>255</option>
                    </Form.Select>
                </Form.Group>
                <Form.Check
                    type='checkbox'
                    id='FlowControlCheck'
                    label='Use RTS and CTS'
                    className='mb-3'
                    defaultChecked={this.state.flowControl === "hardware" ? true : false}
                    onChange={e => this.setState({ flowControl: e.target.value ? "hardware" : "none" })}
                />
                <div className="row mb-3">
                    <div className="col-auto">
                        <Button>Set</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfigPage