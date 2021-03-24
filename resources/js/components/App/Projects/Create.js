import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

import axios from "axios";
import { BASE_API } from "../../../config";

function Create(props) {
    const [formData, setformData] = useState({});
    const submitForm = (e) => {
        e.preventDefault();
        // creates form data

        axios.post(`${BASE_API}/projects`,formData).then((res) => {
            console.log("post success");
            props.sendDataToParent(formData);
            props.onHide();
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
                <h4>Create project</h4>
                <Form id="form" onSubmit={submitForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                name="title"
                                onChange={handleChange}
                                placeholder="Enter title"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                placeholder="Link"
                                onChange={handleChange}
                                name="link"
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
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            placeholder="Image"
                            onChange={handleChange}
                            name="pimage"
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
