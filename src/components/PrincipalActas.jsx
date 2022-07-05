import React from 'react'
import axios from 'axios'
import { render } from '@testing-library/react'

export default class PrincipalActas extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            axios.get('https://testparserprograduate.free.beeceptor.com').then(res => {
            const persons = res.data;
            this.setState({persons});
        })
    }

render(){
    return (
        <ul>
            {this.state.persons.map(person => <li>{person.nombre}</li>)}
        </ul>
    )
}
}