import React, {Component} from "react";
import {Accordion, Button} from "react-bootstrap";
import {
    faEdit,
    faEye, faPlusSquare,
    faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Address from "./Address";
import AddressForm from "./AddressForm";
import ContactForm from "./ContactForm";


export default class Party extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            contactFormShow: false
        }
    }

    addressFormToggle = () => {
        const {show} = this.state
        this.setState({
            show: !show
        })
    }

    contactFormToggle = () => {
        const {contactFormShow} = this.state
        this.setState({
            contactFormShow: !contactFormShow
        })
    }


    render() {

        const marginBtn = {
            float: 'right'
        }
        const centerImg = {
            padding: '10px'
        }
        const floatIcon = {
            float: 'right',
            display: 'flex',
            marginTop: '15px',
            fontSize: '20px'
        }
        const padd = {
            padding: '20px'
        }

        const data = [{
            "name": "Party Name A",
            "details": "Party details A",
            "category": {
                "labelEn": "EN 1",
                "labelAr": "AR 1"
            },
            "address": [
                {
                    "name": "Party Address A",
                    "location": {
                        "x": "x A",
                        "y": "y A",
                        "z": "z A",
                        "longitude": "longitude A",
                        "altitude": "altitude A"
                    },
                    "contacts": [
                        {
                            "value": "Value A",
                            "type": {
                                "labelAr": "AR A",
                                "labelEn": "EN A"
                            }
                        },
                        {
                            "value": "Value AA",
                            "type": {
                                "labelAr": "AR AA",
                                "labelEn": "EN AA"
                            }
                        }
                    ]
                },

                {
                    "name": "Party Address B",
                    "location": {
                        "x": "x B",
                        "y": "y B",
                        "z": "z B",
                        "longitude": "longitude B",
                        "altitude": "altitude B"
                    },
                    "contacts": [
                        {
                            "value": "Value B",
                            "type": {
                                "labelAr": "AR B",
                                "labelEn": "EN B"
                            }
                        },
                        {
                            "value": "Value BB",
                            "type": {
                                "labelAr": "AR BB",
                                "labelEn": "EN BB"
                            }
                        }
                    ]
                }
            ]
        },

            {
                "name": "Party Name A",
                "details": "Party details A",
                "category": {
                    "labelEn": "EN 1",
                    "labelAr": "AR 1"
                },
                "address": [
                    {
                        "name": "Party Address A",
                        "location": {
                            "x": "x A",
                            "y": "y A",
                            "z": "z A",
                            "longitude": "longitude A",
                            "altitude": "altitude A"
                        },
                        "contacts": [
                            {
                                "value": "Value A",
                                "type": {
                                    "labelAr": "AR A",
                                    "labelEn": "EN A"
                                }
                            },
                            {
                                "value": "Value AA",
                                "type": {
                                    "labelAr": "AR AA",
                                    "labelEn": "EN AA"
                                }
                            }
                        ]
                    },

                    {
                        "name": "Party Address B",
                        "location": {
                            "x": "x B",
                            "y": "y B",
                            "z": "z B",
                            "longitude": "longitude B",
                            "altitude": "altitude B"
                        },
                        "contacts": [
                            {
                                "value": "Value B",
                                "type": {
                                    "labelAr": "AR B",
                                    "labelEn": "EN B"
                                }
                            },
                            {
                                "value": "Value BB",
                                "type": {
                                    "labelAr": "AR BB",
                                    "labelEn": "EN BB"
                                }
                            }
                        ]
                    }
                ]
            }

        ]


        return (
            <div>
                {/*Address Form Component*/}
                {this.state.show && <AddressForm/>}
                {this.state.contactFormShow && <ContactForm/>}
                <div className="container bg-secondary text-white">
                {
                    data.map(partyItem => (

                        <Accordion>
                                <div style={padd}>
                                    <div className="row">
                                        <div className="col col-lg-2">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <img src="github.png" width="150" height="150" alt=""
                                                     style={centerImg}/>
                                            </Accordion.Toggle>

                                        </div>
                                        <div className="col ">
                                            <div>
                                                <p style={floatIcon}>
                                                    <FontAwesomeIcon icon={faEdit}/><span className="ml-1"></span>
                                                    <FontAwesomeIcon icon={faEye}/><span className="ml-1"></span>
                                                    <FontAwesomeIcon icon={faTrashAlt}/><span className="ml-1"></span>
                                                </p>
                                                <h1>{partyItem.name}</h1>
                                            </div>
                                            <h3>{partyItem.category.labelEn}</h3>
                                            <p>
                                                {partyItem.details}
                                            </p>
                                            <p style={marginBtn}>
                                                <Button className="primary text-right" onClick={this.addressFormToggle}><FontAwesomeIcon
                                                    icon={faPlusSquare}/> Add Address</Button>{' '}
                                                <Button variant="primary"
                                                        onClick={this.contactFormToggle}><FontAwesomeIcon
                                                    icon={faPlusSquare}/> Add Contact</Button>
                                            </p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    {/*address component*/}
                                    <Accordion.Collapse eventKey="0">
                                        <div>
                                            {
                                                partyItem.address.map(addressData => (
                                                    <Address addressData={addressData}/>
                                                ))
                                            }
                                        </div>
                                    </Accordion.Collapse>
                                </div>

                        </Accordion>

                    ))
                }
                </div><br/>


            </div>
        )

    }
}

