import {useState} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button'

function SubirActa() {

    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event){
        event.preventDefault();
        const url = 'https://pruebachrisnico.free.beeceptor.com';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="file" id="inputFile" name="inputFile" accept=".csv" onChange={handleChange}/>
            <Button variant='success' type="submit">Guardar</Button>
        </form>
    </div>
}

export default SubirActa

