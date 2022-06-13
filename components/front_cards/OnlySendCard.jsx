import React from "react"
import Form from "react-bootstrap/Form"

class OnlySendCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="card">
            <div className="card-body">
                <h5 className="card-title">Only Send</h5>
                <h6 className="card-subtitle mb-2 text-muted">Send values</h6>
            <hr />
                <div className="row align-items-center">
                    <div className="col-auto">
                        <Form.Label>input:</Form.Label>
                    </div>
                    <div className="col-auto">
                        <Form.Control size="sm" type="text" placeholder="enter array" />
                    </div>
                </div>
                <div className="row align-items-center justify-content-end pt-4">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => this.props.addMiddleCardFunc(
                            { data1: 'abcdefg', data2: 'hijklmnopqr', data3: 'This is a sample' }
                        )}>add</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default OnlySendCard