import React from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
import {getIn, useFormik} from "formik";


// Formik Validation without Yup Library

function AddressForm() {

    const initialValues = {
        name: '',
        location: {
            x: '',
            y: '',
            z: '',
            longitude: '',
            altitude: ''
        }
    }

    const onSubmit = values => {
        console.log("address form values:", values);
    }

    // const validationSchema = Yup.object({
    //     name: Yup.string().required('Required..!'),
    //     location: Yup.object({
    //         x: Yup.string().required('Required..!'),
    //         y: Yup.string().required('Required..!')
    //     })
    //
    // })

    const validate = values => {
        let errors = {
        }

        if (!values.name) {
            errors.name = 'Required !'
        }
        if (!values.x) {
            errors.x = 'Required !'
        }
        if (!values.y) {
            errors.y = ('Required !')
        }
        if (!values.z) {
            errors.z = ('Required !')
        }
        if (!values.longitude) {
            errors.longitude = ('Required !')
        }
        if (!values.altitude) {
            errors.altitude = ('Required !')
        }
        return errors

    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    // console.log('Values -->', formik.values.location.x)
    console.log('Address Form Values Final -->', formik.values)
    console.log('Touched -->', formik.touched)
    // console.log('errors -->', formik.errors.x)

    const errorCss = {
        color: 'red'
    }

    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Add Address </Card.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address.."
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.name}
                                          name="name"/>
                            {(formik.touched.name && formik.errors.name) ? (<div style={errorCss}>{formik.errors.name}</div>) : null}
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridX">
                            <Form.Label>X :</Form.Label>
                            <Form.Control type="text" placeholder="Enter X.."
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.x}
                                          name="location.x"/>
                            {(formik.errors.x && formik.touched.location) ? (<div style={errorCss}>{formik.errors.x}</div>) : null}
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridPartyY">
                            <Form.Label>Y :</Form.Label>
                            <Form.Control type="text" placeholder="Enter Y.."
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.y}
                                          name="location.y"/>
                            {formik.touched.location && formik.errors.y ? <div style={errorCss}>{formik.errors.y}</div> : null}
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridZ">
                            <Form.Label>Z :</Form.Label>
                            <Form.Control type="text" placeholder="Enter Z.." required
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.z}
                                          name="location.z"/>
                            {formik.touched.location && formik.errors.z ? <div style={errorCss}>{formik.errors.z}</div> : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLongitude">
                            <Form.Label>Longitude :</Form.Label>
                            <Form.Control type="text" placeholder="Enter Longitude..." required
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.longitude}
                                          name="location.longitude"/>
                            {formik.touched.location && formik.errors.longitude ? <div style={errorCss}>{formik.errors.longitude}</div> : null}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPartyY">
                            <Form.Label>Altitude :</Form.Label>
                            <Form.Control type="text" placeholder="Enter Altitude ..." required
                                          className="btn btn-outline-info"
                                          autoComplete="off"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.altitude}
                                          name="location.altitude"/>
                            {formik.touched.location && formik.errors.altitude ? <div style={errorCss}>{formik.errors.altitude}</div> : null}
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

export default AddressForm;
