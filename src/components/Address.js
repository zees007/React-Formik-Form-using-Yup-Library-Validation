import React, {Component} from "react";
import {DropdownMenu, MenuItem} from "react-bootstrap-dropdown-menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";


export default class Address extends Component {


    render() {

        const trashTh = {
            fontSize: '20px',
            color: 'black'
        }
        const Css = {

            color: 'black'

        }

        return (
            <div>
                <div className="container bg-info">
                    <div className="row">
                        <table striped bordered hover>
                            <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <DropdownMenu triggerType='image' trigger="map4.png">
                                        <MenuItem text={this.props.addressData.location.x} location='' linkStyle={Css}/>
                                        <MenuItem text={this.props.addressData.location.y} location=''/>
                                        <MenuItem text={this.props.addressData.location.z} location=''/>
                                        <MenuItem text={this.props.addressData.location.longitude} location=''/>
                                        <MenuItem text={this.props.addressData.location.altitude} location=''/>
                                    </DropdownMenu>{this.props.addressData.name}
                                </th>
                                <th>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
                                <th>
                                    <DropdownMenu triggerType='image' trigger="email.png">
                                        <MenuItem text='Home' location=''/>
                                        <MenuItem text='Edit Profile' location=''/>
                                        <MenuItem text='Logout' location=''/>
                                    </DropdownMenu>
                                </th>
                                <th>
                                    <DropdownMenu triggerType='image' trigger="phone27.jpg">
                                        <MenuItem text='Home' location=''/>
                                        <MenuItem text='Edit Profile' location=''/>
                                        <MenuItem text='Logout' location=''/>
                                    </DropdownMenu>
                                </th>
                                <th>
                                    <DropdownMenu triggerType='image' trigger="globe.png">
                                        <MenuItem text='Home' location=''/>
                                        <MenuItem text='Edit Profile' location=''/>
                                        <MenuItem text='Logout' location=''/>
                                    </DropdownMenu>
                                </th>
                                <th>
                                    <DropdownMenu triggerType='image' trigger="fb.png">
                                        <MenuItem text='Home' location=''/>
                                        <MenuItem text='Edit Profile' location=''/>
                                        <MenuItem text='Logout' location=''/>
                                    </DropdownMenu>
                                </th>
                                <th>
                                    <DropdownMenu triggerType='image' trigger="twitter.png">
                                        <MenuItem text='Home' location=''/>
                                        <MenuItem text='Edit Profile' location=''/>
                                        <MenuItem text='Logout' location=''/>
                                    </DropdownMenu>
                                </th>
                                <th>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
                                <th>
                                    <FontAwesomeIcon icon={faTrashAlt} style={trashTh}/>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>

                </div>
                <br/>
            </div>
        );
    }

}
