import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_API } from "../../../config";

function Update(props) {
    const [formData, setformData] = useState({});
    useEffect(() => {
        if(props.event) {
            setformData(props.event)
        }
    }, [props.event])
    const submitForm = (e) => {
        e.preventDefault();
        // creates form data
       // console.log(formData);
        axios.put(`${BASE_API}/events/${formData.id}`, formData).then((res) => {
            console.log(formData);
            const currentEvent={
                id: props.event.id,
                ...formData,
            }
            props.updateCurrentEvent(currentEvent);
            props.onHide();
        })
        .catch(error=>{
            console.log(error);
        });
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
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                name="eventsname"
                                value={formData.eventsname}
                                onChange={handleChange}
                                placeholder="Enter name"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                placeholder="Type"
                                onChange={handleChange}
                                value={formData.eventstype}
                                name="eventstype"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                            name="description"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            placeholder="Date"
                            value={formData.eventsdate}
                            onChange={handleChange}
                            name="eventsdate"
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control
                                placeholder="venue"
                                value={formData.eventsvenue}
                                onChange={handleChange}
                                name="eventsvenue"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                placeholder="Image"
                                value={formData.eventsimage}
                                onChange={handleChange}
                                name="eventsimage"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Vedio Link</Form.Label>
                            <Form.Control
                                placeholder="Vedio link"
                                value={formData.vediolink}
                                onChange={handleChange}
                                name="vediolink"
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

export default Update;
