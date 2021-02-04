import  React, { Component } from 'react'

export class LifecycleB extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'Buffon'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Fuck')
    }

    render() {
        return(
            <div>
                <h1>Fuck you!!!!!</h1>
            </div>
        )
    }
}

export default LifecycleB ;