import React from "react"
import Image from "next/image"

class Zundamon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image_src: "/zundamon_standing.png"
        }

        this.toExecuting = this.toExecuting.bind(this)
        this.toFail = this.toFail.bind(this)
        this.toHappy = this.toHappy.bind(this)
        this.toStanding = this.toStanding.bind(this)
    }

    toExecuting() {
        this.setState({
            image_src: "/zundamon_executing.png"
        })
    }

    toFail() {
        this.setState({
            image_src: "/zundamon_fail.png"
        })
    }

    toHappy() {
        this.setState({
            image_src: "/zundamon_happy.png"
        })
    }

    toStanding() {
        this.setState({
            image_src: "/zundamon_standing.png"
        })
    }

    render() {
        return (<div className='fixed-bottom'>
          <div style={{ position: 'fixed', bottom: '0px', right: '0px' }}>
            <Image src={this.state.image_src} alt="Zundamon Standing" layout={'intrinsic'} width={216} height={330} />
          </div>
        </div>)
    }
}

export default Zundamon

