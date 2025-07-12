import axios from "axios";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Container, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Products = (id, name, currency, price) => {


    return (
        handleShow(),
        <div className="container-fluid mt-5">
            <Card>
                <CardHeader className="d-flex align-items-center text-center justify-content-center">
                    <h1>Best Collections</h1>
                </CardHeader>
                <CardBody>
                    <div class="d-flex flex-wrap justify-content-between gap-3 p-3">
                        {/* {products.map((pdt, key) => {
                            if (pdt.category === "women's clothing" || pdt.category === "men's clothing") {
                                return ( */}
                                    <div class="card" style={{ width: "18%", minWidth: "180px", borderRadius: "10px" }}>
                                        <div class="card-body text-start justify-content-between d-flex flex-column">
                                            <div class="mb-3">
                                                <img onClick={handleView} src={pdt.image} alt="img" class="img-fluid d-block" style={{ borderRadius: "10px" }} />
                                            </div>
                                            <div class="card p-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                                                <hr />
                                                <p>{pdt.title}</p>
                                                <h5>${pdt.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                {/* );
                            } else {
                                return null;
                            }
                        })} */}
                    </div>
                </CardBody>
            </Card>
        </div >
    )
}

export default Products

{/* <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td><img src={pdt.image} width="200px" alt="" /></td>
                                            <td>{pdt.title}</td>
                                            <td>{pdt.description}</td>
                                            <td>{pdt.category}</td>
                                            <td>{pdt.price}</td>
                                            <td>{pdt.rating.rate}</td>
                                            <td>{pdt.rating.count}</td>
                                        </tr> */}