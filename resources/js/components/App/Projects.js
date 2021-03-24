import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../../config";
import { Button, Table } from "react-bootstrap";
import Create from "./Projects/Create";
import Update from "./Projects/Update";
import { update } from "lodash";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [modalCreateShow, setModalCreateShow] = useState(false);
    const [modalUpdateShow, setModalUpdateShow] = useState(false);
    useEffect(() => {
        axios.get(`${BASE_API}/projects`).then((res) => {
            setProjects(res.data);
        });
    }, []);

    const updateProject = (project) => {
        setModalUpdateShow(project);
    };
    const updateCurrentProject = (currentProject) => {
        const newProjectsArr=projects;
        projects.forEach((project, idx) => {
            if(project.id === currentProject.id) {
                newProjectsArr[idx]=currentProject;
                return;
            }
        })
        setProjects(newProjectsArr);
    };
    const deleteProject = (currentProject) => {
        console.log(currentProject.id);
        axios.delete(`${BASE_API}/projects/delete/${currentProject.id}`, currentProject).then((res) => {
            const newProjectsArr=projects.filter((project) => {
                return project.id!==currentProject.id;
            })
            setProjects(newProjectsArr);
        }).catch(error=>{
            console.log(error);
        });

        
    };
    const getData = (data) => {
        const newData=[...projects, data];
        setProjects(newData);
    }

    const styles = {
        container: { margin: "auto", width: "fit-content" },
    };
    return (
        <div style={styles.container}>
            <Button variant="primary" onClick={() => setModalCreateShow(true)}>
                Create Project
            </Button>
            <Create
                show={modalCreateShow}
                sendDataToParent={getData}
                onHide={() => setModalCreateShow(false)}
            />
            <Update
                show={!!modalUpdateShow}
                project={modalUpdateShow}
                updateCurrentProject={updateCurrentProject}
                onHide={() => setModalUpdateShow(false)}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr>
                            <td>{project.id||index+1}</td>
                            <td>{project.title}</td>
                            <td>{project.link}</td>
                            <td>{project.description}</td>
                            <td>{project.pimage}</td>
                            <td>
                                <Button onClick={() => updateProject(project)}>
                                    Update
                                </Button>
                                <Button onClick={() => deleteProject(project)}>
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

export default Projects;
