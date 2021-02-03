import React, { Component } from 'react'
import { FormControl, Container, Button } from 'react-bootstrap'
class Home extends Component {
    state = {
        location: "",
        position: "",
        result: {},
    }

    render() {
        let position = this.state.position
        let location = this.state.location
        return (
            <Container className="m-auto">
                <FormControl
                    value={this.state.position} onChange={
                        e => this.setState({ position: e.currentTarget.value })
                    } />
                <FormControl
                    value={this.state.location} onChange={
                        e => this.setState({ location: e.currentTarget.value })
                    } />
                <Button onClick={
                    async function fetchFunc() {
                        fetch("cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=" + position + "&location=" + location)
                            .then(async (res) => {
                                console.log(res)
                            })
                            .then(result => {
                                this.setState({ result: this.data })
                                console.log(result)
                            })
                    }
                }>Submit</Button>
            </Container >
        )
    }
}

export default Home