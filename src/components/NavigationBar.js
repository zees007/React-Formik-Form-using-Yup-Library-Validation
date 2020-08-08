import React, {Component} from "react";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import PartyForm from "./PartyForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";


export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state ={
            show: false
        }
        this.partyFormToggle = this.partyFormToggle.bind(this)
    }
    partyFormToggle() {
        const {show} = this.state
        this.setState({
            show: !show
        })
    }


    render(){
        return (
            <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img src="github.png" width="25" height="25" alt=""/>{' '}
                    Parties</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav className="mr-0">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <button className="btn btn-primary" onClick={this.partyFormToggle} ><FontAwesomeIcon icon={faPlusSquare}/> Add Party</button>
                </Nav>

            </Navbar>

           {this.state.show && <PartyForm/>}
            </div>

        )

    }


}
