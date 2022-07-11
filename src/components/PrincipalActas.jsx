import React from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import Pencil from '../data/pencil16x16.png'
import Clear from '../data/clear16x16.png'

export default class PrincipalActas extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
         //axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
           axios.post('https://testparserprograduate.free.beeceptor.com','','').then(res => {
            const persons = res.data.certificateList;
            this.setState({persons});
            console.log({res});
            console.log({persons});
        })
    }

render(){
    return (
        <div>
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Curso/Carrera</th>
                    <th>Estado</th>
                    <th> </th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {this.state.persons.map(certificateList => 
                    <tr>
                    <td>{certificateList.name}</td>
                    <td>{certificateList.lastName}</td>
                    <td>{certificateList.careerName}</td>
                    <td>{certificateList.qualification}</td>
                    <td><img src={Pencil} alt="Modificar" tooltiptext="Modificar" /></td>
                    <td><img src={Clear} alt="Eliminar Registro" /></td>
                    </tr>    
                )}
                
            </tbody>
        </Table>
        
        </div>
    )
}
}