import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../../config";
import { Button, Table } from "react-bootstrap";
import Create from "./Events/Create";
import Update from "./Events/Update";
import { update } from "lodash";

function Events() {
    const [events, setEvents] = useState([]);
    const [modalCreateShow, setModalCreateShow] = useState(false);
    const [modalUpdateShow, setModalUpdateShow] = useState(false);
    useEffect(() => {
        axios.get(`${BASE_API}/events`).then((res) => {
            setEvents(res.data);
        }).catch(error=>{
            console.log(error);
        });
    }, []);

    const updateEvent = (event) => {
        setModalUpdateShow(event);
    };
    const updateCurrentEvent = (currentEvent) => {
        const newEventsArr=events;
        events.forEach((event, idx) => {
            if(event.id === currentEvent.id) {
                newEventsArr[idx]=currentEvent;
                return;
            }
        })
        setEvents(newEventsArr);
    };
    const deleteEvent = (currentEvent) => {
        axios.delete(`${BASE_API}/events/delete/${currentEvent.id}`, currentEvent).then((res) => {
            const newEventsArr=events.filter((event) => {
                return event.id!==currentEvent.id;
            })
            setEvents(newEventsArr);
        }).catch(error=>{
            console.log(error);
        });
    };
    const getData = (data) => {
        const newData=[...events, data];
        setEvents(newData);
    }

    const styles = {
        container: { margin: "auto", width: "fit-content" },
    };
    return (
        <div style={styles.container}>
            <Button variant="primary" onClick={() => setModalCreateShow(true)}>
                Create Events
            </Button>
            <Create
                show={modalCreateShow}
                sendDataToParent={getData}
                onHide={() => setModalCreateShow(false)}
            />
            <Update
                show={!!modalUpdateShow}
                event={modalUpdateShow}
                updateCurrentEvent={updateCurrentEvent}
                onHide={() => setModalUpdateShow(false)}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Venue</th>
                        <th>Image</th>
                        <th>Video link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr>
                            <td>{event.id||index+1}</td>
                            <td>{event.eventsname}</td>
                            <td>{event.eventstype}</td>
                            <td>{event.description}</td>
                            <td>{event.eventsdate}</td>
                            <td>{event.eventsvenue}</td>
                            <td>{event.eventsimage}</td>
                            <td>{event.videolink}</td>
                            <td>
                                <Button onClick={() => updateEvent(event)}>
                                    Update
                                </Button>
                                <Button onClick={() => deleteEvent(event)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Events;
