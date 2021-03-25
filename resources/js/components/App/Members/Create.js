import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

import axios from "axios";
import { BASE_API } from "../../../config";

function Create(props) {
    const [formData, setformData] = useState({});
    const submitForm = (e) => {
        e.preventDefault();
        // creates form data

        axios.post(`${BASE_API}/members`,formData).then((res) => {
            const dataToSend={
                id: res.data,
                ...formData,
            };
            props.sendDataToParent(dataToSend);
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
                <h4>Create member</h4>
                <Form id="form" onSubmit={submitForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                name="name"
                                onChange={handleChange}
                                placeholder="Enter name"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control
                                placeholder="Branch"
                                onChange={handleChange}
                                name="branch"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>USN</Form.Label>
                        <Form.Control
                            placeholder="USN"
                            onChange={handleChange}
                            name="usn"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Projects</Form.Label>
                        <Form.Control
                            placeholder="Projects"
                            onChange={handleChange}
                            name="projects"
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control
                                placeholder="Skills"
                                onChange={handleChange}
                                name="skills"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                placeholder="Image"
                                onChange={handleChange}
                                name="mimage"
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
