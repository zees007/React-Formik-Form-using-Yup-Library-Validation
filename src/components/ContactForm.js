import React, {Component} from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";


export default class ContactForm extends Component{

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Add Contact </Card.Header>
                <Form>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPartyName">
                                <Form.Label>Value</Form.Label>
                                <Form.Control type="text" placeholder="Enter Value.." required
                                              className="btn btn-outline-info"
                                              autoComplete="off"
                                              name="value"/>
                            </Form.Group>


                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDetails">
                                <label >Contact Type: &nbsp; &nbsp; </label>

                                <select name="type" className="btn btn-outline-info">
                                    <option value="1">Type 1</option>
                                    <option value="2">Type 2</option>
                                    <option value="3">Type 3</option>
                                    <option value="4">Type 4</option>
                                </select>
                            </Form.Group>


                        </Form.Row>


                    </Card.Body>
                    <Card.Footer style={{textAlign: "right"}}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave}/> Save
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }

}
