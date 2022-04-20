import { Component } from "react";





class WelcomeMessage extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.title1}</h1>
            <h2>{this.props.title2}</h2>
            </div>
        )
    }
}

export default WelcomeMessage