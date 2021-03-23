import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_API } from "../../../config";

function Update(props) {
    const [formData, setformData] = useState({});
    useEffect(() => {
        if(props.member) {
            setformData(props.member)
        }
    }, [props.member])
    const submitForm = (e) => {
        e.preventDefault();
        // creates form data
       // console.log(formData);
        axios.put(`${BASE_API}/members/${formData.id}`, formData).then((res) => {
            console.log(formData);
            const currentMember={
                id: props.member.id,
                ...formData,
            }
            props.updateCurrentMember(currentMember);
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
                <h4>Create member</h4>
                <Form id="form" onSubmit={submitForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control
                                placeholder="Branch"
                                onChange={handleChange}
                                value={formData.branch}
                                name="branch"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>USN</Form.Label>
                        <Form.Control
                            placeholder="USN"
                            value={formData.usn}
                            onChange={handleChange}
                            name="usn"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Projects</Form.Label>
                        <Form.Control
                            placeholder="Projects"
                            value={formData.projects}
                            onChange={handleChange}
                            name="projects"
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control
                                placeholder="Skills"
                                value={formData.skills}
                                onChange={handleChange}
                                name="skills"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                placeholder="Image"
                                value={formData.mimage}
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

export default Update;
