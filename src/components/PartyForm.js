import React, {Component} from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
import {useFormik} from "formik";
import * as Yup from 'yup';

// Validation using Yup Library...
function PartyForm() {

    const initialValues = {
        name: '',
        details: '',
        category: ''
    }

    const onSubmit = values => {
        console.log("Party form values:", values);
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required..!'),
        details: Yup.string().required('Required..!'),
        category: Yup.string().required("Required..!")
    })

    const errorCss = {
        color: 'red'
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log("Party Form Values", formik.values)

    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Add Party </Card.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPartyName">
                            <Form.Label>Party Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Party Name.." required
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                // value={formik.values.name}
                                //All above 3 methods can be passed as props in formik as below
                                          {...formik.getFieldProps('name')}
                                          name="name"/>
                            {(formik.touched.name && formik.errors.name) ? (
                                <div style={errorCss}>{formik.errors.name}</div>) : null}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridDetails">
                            <Form.Label>Party Details</Form.Label>
                            <Form.Control type="text" placeholder="Enter Party Details.." required
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                // value={formik.values.details}
                                //All above 3 methods can be passed as props in formik as below
                                          {...formik.getFieldProps('details')}
                                          name="details"/>
                            {(formik.touched.details && formik.errors.details) ? (
                                <div style={errorCss}>{formik.errors.details}</div>) : null}
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridDetails">
                            <label>Party Category: &nbsp; &nbsp; </label>

                            <select name="category" className="btn btn-outline-info"
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                // value={formik.values.category}
                                //All above 3 methods can be passed as props in formik as below
                                    {...formik.getFieldProps('category')}>
                                <option>Select Category</option>
                                <option value="1">Category 1</option>
                                <option value="2">Category 2</option>
                                <option value="3">Category 3</option>
                                <option value="4">Category 4</option>
                            </select>
                            {(formik.touched.category && formik.errors.category) ? (
                                <div style={errorCss}>{formik.errors.category}</div>) : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPartyIcon">
                            <label>Party Icon</label>
                            <Form.Control type="file"
                                // className={"bg-dark text-white"}
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                          name="image"/>
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

export default PartyForm;
