import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'bg-success',
            percentage: 0,
            isStriped: false
        }
        this.toGreen = this.toGreen.bind(this)
        this.toYellow = this.toYellow.bind(this)
        this.toRed = this.toRed.bind(this)
        this.toBlue = this.toRed.bind(this)
        this.percentage = this.percentage.bind(this)
    }

    toGreen() {
        this.setState({
            color: 'bg-success',
        })
    }

    toYellow() {
        this.setState({
            color: 'bg-warning',
        })
    }

    toBlue() {
        this.setState({
            color: 'bg-info',
        })
    }

    toRed() {
        this.setState({
            color: 'bg-danger',
        })
    }

    percentage(percentage) {
        console.log(Math.trunc(percentage))
        if (0 <= percentage && percentage <= 100) {
            this.setState({
                percentage: Math.trunc(percentage)
            })
        }
    }

    setStriped(onoff) {
        this.setState({
            isStriped: onoff
        })
    }

    render() {
        return (
            <div className="progress mt-2">
                <div className={`progress-bar ${this.state.color} ${this.state.isStriped ? 'progress-bar-striped': ''}`} role="progressbar" style={{"width": `${this.state.percentage}%`}} aria-valuenow={this.state.percentage} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        )
    }
}

export default ProgressBar