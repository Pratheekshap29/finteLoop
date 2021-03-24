import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../../config";
import { Button, Table } from "react-bootstrap";
import Create from "./Members/Create";
import Update from "./Members/Update";
import { update } from "lodash";

function Members() {
    const [members, setMembers] = useState([]);
    const [modalCreateShow, setModalCreateShow] = useState(false);
    const [modalUpdateShow, setModalUpdateShow] = useState(false);
    useEffect(() => {
        axios.get(`${BASE_API}/members`).then((res) => {
            setMembers(res.data);
        });
    }, []);

    const updateMember = (member) => {
        setModalUpdateShow(member);
    };
    const updateCurrentMember = (currentMember) => {
        const newMembersArr=members;
        members.forEach((member, idx) => {
            if(member.id === currentMember.id) {
                newMembersArr[idx]=currentMember;
                return;
            }
        })
        setMembers(newMembersArr);
    };
    const deleteMember = (currentMember) => {
        axios.delete(`${BASE_API}/members/delete/${currentMember.id}`, currentMember).then((res) => {
            const newMembersArr=members.filter((member) => {
                return member.id!==currentMember.id;
            })
            setMembers(newMembersArr);
        }).catch(error=>{
            console.log(error);
        });
    };
    const getData = (data) => {
        const newData=[...members, data];
        setMembers(newData);
    }

    const styles = {
        container: { margin: "auto", width: "fit-content" },
    };
    return (
        <div style={styles.container}>
            <Button variant="primary" onClick={() => setModalCreateShow(true)}>
                Create Member
            </Button>
            <Create
                show={modalCreateShow}
                sendDataToParent={getData}
                onHide={() => setModalCreateShow(false)}
            />
            <Update
                show={!!modalUpdateShow}
                member={modalUpdateShow}
                updateCurrentMember={updateCurrentMember}
                onHide={() => setModalUpdateShow(false)}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>USN</th>
                        <th>Projects</th>
                        <th>Skills</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr>
                            <td>{member.id||index+1}</td>
                            <td>{member.name}</td>
                            <td>{member.branch}</td>
                            <td>{member.usn}</td>
                            <td>{member.projects}</td>
                            <td>{member.skills}</td>
                            <td>{member.mimage}</td>
                            <td>
                                <Button onClick={() => updateMember(member)}>
                                    Update
                                </Button>
                                <Button onClick={() => deleteMember(member)}>
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

export default Members;
