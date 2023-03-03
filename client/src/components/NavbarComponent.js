import { Link } from "react-router-dom"
import { 
    Collapse, 
    Nav, 
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    NavbarText,
    NavItem } from "reactstrap"

const NavbarComponent = () => {
    return (
        <>
            <Navbar expand={true} dark className="bg-primary">
                <NavbarBrand>
                    React JS
                </NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" href="/#">About</Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>Admin</NavbarText>
                </Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComponent
