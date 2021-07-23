import React from 'react';
import data from './SampleFourLsData'

export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: []
        }
    }
    componentDidMount() {
        let responseData = data.RESPONSE_DATA
        this.setState({ response: responseData })
    }
    handleChange() {
        // console.log("e", e, "res", response)
        // let response = JSON.parse(JSON.stringify(this.state.response))
        let response = this.state.response
        console.log("response", this.state.response)

        response[0].annotation.entities = []

        console.log("response", this.state.response)

        // this.setState({ response: response })
    }
    render() {
        // const { response } = this.state
        return (
            <div>
                Hello
                <button onClick={this.handleChange.bind(this)}>change</button>
            </div>
        );
    }
}