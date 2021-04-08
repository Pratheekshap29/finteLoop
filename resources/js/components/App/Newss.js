import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../../config";
import { Button, Table } from "react-bootstrap";
// import Create from "./Newss/Create";
import Update from "./Newss/Update";
import { update } from "lodash";

function Newss() {
    const [newss, setNewss] = useState([]);
    const [modalCreateShow, setModalCreateShow] = useState(false);
    const [modalUpdateShow, setModalUpdateShow] = useState(false);
    useEffect(() => {
        axios.get(`${BASE_API}/newss`).then((res) => {
            setNewss(res.data);
        });
    }, []);

    const updateNews = (news) => {
        setModalUpdateShow(news);
    };
    const updateCurrentNews = (currentNews) => {
        const newNewssArr=newss;
        newss.forEach((news, idx) => {
            if(news.id === currentNews.id) {
                newNewssArr[idx]=currentNews;
                return;
            }
        })
        setNewss(newNewssArr);
    };
    const deleteNews = (currentNews) => {
        axios.delete(`${BASE_API}/newss/delete/${currentNews.id}`, currentNews).then((res) => {
            const newNewssArr=newss.filter((news) => {
                return news.id!==currentNews.id;
            })
            setNewss(newNewssArr);
        }).catch(error=>{
            console.log(error);
        });
    };
    const getData = (data) => {
        const newData=[...newss, data];
        setNewss(newData);
    }

    const styles = {
        container: { margin: "auto", width: "fit-content" },
    };
    return (
        <div className="container">
        <div style={styles.container}>
            {/* <Button variant="primary" onClick={() => setModalCreateShow(true)}>
                Create News
            </Button>
            <Create
                show={modalCreateShow}
                sendDataToParent={getData}
                onHide={() => setModalCreateShow(false)}
            /> */}
            <Update
                show={!!modalUpdateShow}
                news={modalUpdateShow}
                updateCurrentNews={updateCurrentNews}
                onHide={() => setModalUpdateShow(false)}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>News Head</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Flyer</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {newss.map((news, index) => (
                        <tr>
                            <td>{news.id||index+1}</td>
                            <td>{news.newshead}</td>
                            <td>{news.description}</td>
                            <td>{news.newdate}</td>
                            <td>{news.flyer}</td>
                            <td>
                                <Button onClick={() => updateNews(news)}>
                                    Update
                                </Button>
                                <Button onClick={() => deleteNews(news)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        </div>
    );
}

export default Newss;
