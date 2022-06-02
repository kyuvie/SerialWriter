import { render } from '@testing-library/react'
import React from 'react'


class MiddleCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { style: {
            backgroundColor: 'white',
        }}

        this.toGreen = this.toGreen.bind(this)
        this.toRed = this.toRed.bind(this)
    }

    toGreen() {
        this.setState( {style: {
            backgroundColor: 'palegreen',
        }})
    }

    toRed() {
        this.setState( {style: {
            backgroundColor: 'lightpink',
        }})
    }

    render() {
        return (<div className="card" style={this.state.style}>
            <div className="card-body">
                <h5 className="card-title">Command</h5>
                <h6 className="card-subtitle mb-2 text-muted">command description</h6>
                <div className="row align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">value</label>
                    </div>
                    <div className="col-auto">
                        <input type="password" id="inputPassword6" className="form-control form-control-sm" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
                <div className="row align-items-center justify-content-end pt-4">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm">add</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default MiddleCard