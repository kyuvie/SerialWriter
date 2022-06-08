import React from "react";


class NotificationTextArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textMessage: ""
        }

        this.println = this.println.bind(this)
    }

    println(text) {
        this.setState((state) => { return { textMessage: state.textMessage + text + "\n" } }
        )
    }

    render() {
        return (<textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="7" readOnly={true} style={{ backgroundColor: "#ffffff" }} value={this.state.textMessage}></textarea>)
    }
}

export default NotificationTextArea
