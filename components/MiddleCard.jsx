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
        this.deleteSelfFromParentList = this.deleteSelfFromParentList.bind(this)
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

    deleteSelfFromParentList() {
        this.props.deleteFunc(this.props.id)
    }

    render() {
        return (<div className="card" style={this.state.style}>
            <div className="card-body">
                <h5 className="card-title">{this.props.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">command description</h6>
                <div className="row align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">value</label>
                    </div>
                    <div className="col-auto">
                        <div type="password" id="inputPassword6" > Foo </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-end pt-4">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.deleteSelfFromParentList}>delete</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default MiddleCard