import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

import axios from "axios";
import { BASE_API } from "../../../config";

function Create(props) {
    const [formData, setformData] = useState({});
    const submitForm = (e) => {
        e.preventDefault();
        // creates form data
        //console.log(formData);
        axios.post(`${BASE_API}/newss`,formData).then((res) => {
            const dataToSend={
                id: res.data,
                ...formData,
            };
            props.sendDataToParent(dataToSend);
            props.onHide();
        }).catch(error=>{
            console.log(error);
        });
        console.log(formData);
    };
    const handleChange = (e) => {
        const newFormData = {
            ...formData,
        };
        newFormData[e.target.name] = e.target.value;
        setformData(newFormData);
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Create News</h4>
                <Form id="form" onSubmit={submitForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>News Head</Form.Label>
                            <Form.Control
                                name="newshead"
                                onChange={handleChange}
                                placeholder="Enter news head"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                placeholder="Description"
                                onChange={handleChange}
                                name="description"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Date"
                            onChange={handleChange}
                            name="newdate"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Flyer</Form.Label>
                        <Form.Control
                            placeholder="Flyer"
                            onChange={handleChange}
                            name="flyer"
                        />
                    </Form.Group>

                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Create;
