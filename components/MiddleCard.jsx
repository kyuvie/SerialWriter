import { render } from '@testing-library/react'
import React from 'react'


class MiddleCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                backgroundColor: 'white',
            }
        }

        this.toGreen = this.toGreen.bind(this)
        this.toRed = this.toRed.bind(this)
        this.toWhite = this.toWhite.bind(this)
        this.deleteSelfFromParentList = this.deleteSelfFromParentList.bind(this)
    }

    toGreen() {
        this.setState({
            style: {
                backgroundColor: 'palegreen',
            }
        })
    }

    toRed() {
        this.setState({
            style: {
                backgroundColor: 'lightpink',
            }
        })
    }

    toWhite() {
        this.setState({
            style: {
                backgroundColor: 'white',
            }
        })
    }

    deleteSelfFromParentList() {
        this.props.deleteFunc(this.props.id)
    }

    render() {
        const dataRows = []
        
        for (const k in this.props.data) {
            dataRows.push(
                <div className="row align-items-center" key={k}>
                    <div className="col-auto">
                        <div className='fs-6'>{k}:</div>
                    </div>
                    <div className="col-auto">
                        <div className='fs-6'>{this.props.data[k]}</div>
                    </div>
                </div>
            )
        }

        return (<div className="card" style={this.state.style}>
            <div className="card-body">
                <h5 className="card-title">{this.props.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">command description</h6>
                { dataRows }
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