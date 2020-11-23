import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form } from 'react-bootstrap';

const bStyle = {
    textShadow: "1px 1px 1px #000000",
    color: "yellow",
    fontSize: "3vw",
};

class Nav extends Component {

    render() {
        return (
            <searchProvider>
                <div style={{paddingTop: 150}}>
                    <Navbar fixed="top" bg="info" variant="light">
                        <NavbarBrand href="#home" style={bStyle}>User's Directory</NavbarBrand>
                        <Form inline>
                        </Form>
                    </Navbar>
                </div>
            </searchProvider>
        )
    }
}

export default Nav;

