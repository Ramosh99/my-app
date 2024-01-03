import {useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add_Villas() {
    const formAddVilla = useRef("");

    const navigate=useNavigate();
    function AddVillaHandler() {
        var payload={
            name : formAddVilla.current.value
        }
        axios.post("https://localhost:7281/api/VillaAPI",payload).then((response)=>{
            navigate("/");
        })
    }
    return<>
    <legend>Add New Villa</legend>
    <Form>
      <Form.Group className="g-4" controlId="formAddVilla">
        <Form.Label>Villa Name</Form.Label>
        <Form.Control type="text" ref={formAddVilla} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={AddVillaHandler}>
        Submit
      </Button>
    </Form>
    </>
}
export default Add_Villas;