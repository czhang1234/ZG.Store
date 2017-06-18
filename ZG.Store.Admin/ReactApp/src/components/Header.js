import React from 'react';
import { Link } from 'react-router';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
//https://github.com/react-bootstrap/react-router-bootstrap/blob/master/README.md
//For React Router v3 or lower (see rr-v3 branch): npm install -S react-router-bootstrap@rr-v3

class Header extends React.Component {
    render() {
        return (           
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Link to='/' className='navbar-brand'>ZG Blog Management</Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/">
                            <NavItem eventKey={1}>Blogs</NavItem>
                        </IndexLinkContainer>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Header;