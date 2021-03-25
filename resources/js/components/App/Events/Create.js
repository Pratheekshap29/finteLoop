import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

import axios from "axios";
import { BASE_API } from "../../../config";

function Create(props) {
    const [formData, setformData] = useState({});
    const submitForm = (e) => {
        e.preventDefault();
        // creates form data

        axios.post(`${BASE_API}/events`,formData).then((res) => {
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
                <h4>Create event</h4>
                <Form id="form" onSubmit={submitForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                type="name"
                                name="eventsname"
                                onChange={handleChange}
                                placeholder="Enter name"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                placeholder="Type"
                                onChange={handleChange}
                                name="eventstype"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder="Description"
                            onChange={handleChange}
                            name="description"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            placeholder="Date"
                            onChange={handleChange}
                            name="eventsdate"
                            type="date"
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control
                                placeholder="venue"
                                onChange={handleChange}
                                name="eventsvenue"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                placeholder="Image"
                                onChange={handleChange}
                                name="eventsimage"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Vedio link</Form.Label>
                            <Form.Control
                                placeholder="Vedio link"
                                onChange={handleChange}
                                name="videolink"
                            />
                        </Form.Group>
                    </Form.Row>
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
