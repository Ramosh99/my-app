import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function All_Villas() {
    //data assign,function
    const [all_villas,SetVillas]= useState([]);
    //for navigate
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("https://localhost:7281/api/VillaAPI")
        .then((response)=>{
            SetVillas((existingData)=>{
                return response.data;
            });
        });
    },[])

    return <>
        <Row className="g-4">
            <Col md={{span:4,offset:4}}>
                <Button variant="primary" type="button" onClick={()=>{navigate("/add-villa");
              }}>
                    Add Villa
                </Button>
            </Col>
        </Row>

        <Row xs={1} md={3} className="g-4">
            {all_villas.map((av) => (
                <Col key={av.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{av.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </>;
}
export default All_Villas;
