import React from "react"
import Form from "react-bootstrap/Form"
import MiddleCardModel from "../../data_model/MiddleCardModel"

class ReceiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
        }
        
        this.title = "ReceiveCard"
    }

    extractUserInput() {
        return new MiddleCardModel({
            title: this.title,
            data: {
                title: this.title,
                inputValue: this.state.inputValue,
            }
        })
    }

    render() {
        return (<div className="card">
            <div className="card-body">
                <h5 className="card-title">Receive</h5>
                <h6 className="card-subtitle mb-2 text-muted">Wait specified bytes</h6>
                <hr />
                <div className="row align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">value:</label>
                    </div>
                    <div className="col-auto">
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="enter array"
                            value={this.state.inputValue}
                            onChange={e => this.setState({ inputValue: e.target.value })}
                        />
                    </div>
                </div>
                <div className="row align-items-center justify-content-end pt-4">
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => this.props.addMiddleCardFunc(
                                this.extractUserInput()
                            )}
                        >
                            add
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ReceiveCard
