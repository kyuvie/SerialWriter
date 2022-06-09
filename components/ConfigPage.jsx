import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


class ConfigPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="mt-3">
                <Button className="mb-3">Add Device</Button>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Select Device</Form.Label>
                    <Form.Select className="mb-3" aria-label="Device select">
                        <option>Open this select menu</option>
                    </Form.Select>
                </Form.Group>
                <div>USB Vendor Id:</div>
                <div>USB Product Id:</div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Baud Rate</Form.Label>
                    <Form.Select className="mb-3" aria-label="Device select">
                        <option>Open this select menu</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Data Bits</Form.Label>
                    <Form.Select className="mb-3" aria-label="Device select">
                        <option>Open this select menu</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Stop Bits</Form.Label>
                    <Form.Select className="mb-3" aria-label="Device select">
                        <option>Open this select menu</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

            </div>
        )

    }
}

export default ConfigPage