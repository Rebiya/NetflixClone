// // import React from "react";
// // import "./header.css";
// // import NetflixLogo from "../../assets/img/NetflixLogo.png";
// // import SearchIcon from "@mui/icons-material/Search";
// // import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// // import AccountBoxIcon from "@mui/icons-material/AccountBox";
// // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// // const Header = () => {
// //   return (
// //     <div className="header_outer_container">
// //       <div className="header_container">
// //         <div className="header_left">
// //           <ul>
// //             <li>
// //               <img src={NetflixLogo} alt="Netflix Logo" width="100" />
// //             </li>
// //             {/* <li>Netflix</li> */}
// //             <li>Home</li>
// //             <li>TVShows</li>
// //             <li>Movies</li>
// //             <li>Latest</li>
// //             <li>MyList</li>
// //             <li>Browse by Languages</li>
// //           </ul>
// //         </div>
// //         <div className="header_right">
// //           <ul>
// //             <li>
// //               <SearchIcon />
// //             </li>
// //             <li>
// //               <NotificationsNoneIcon />
// //             </li>
// //             <li>
// //               <AccountBoxIcon />
// //             </li>
// //             <li>
// //               <ArrowDropDownIcon />
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;
// import Container from "react-bootstrap/Container";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap/Nav";
// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">Netflix</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">TVShows</Nav.Link>
//             <Nav.Link href="#link">Movies</Nav.Link>
//             <Nav.Link href="#link">Latest</Nav.Link>
//             <Nav.Link href="#link">MyList</Nav.Link>
//             <Nav.Link href="#link">Browse by Languages</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";
import NetflixLogo from "../../assets/img/NetflixLogo.png";

function Header() {
  return (
    <Navbar expand="lg" className="header_outer_container ">
      <Container>
        <Navbar.Brand href="#home">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header_left">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
            <Nav.Link href="#languages">Browse by Languages</Nav.Link>
          </Nav>
          <Nav className="header_right">
            <Nav.Link href="#search">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#notifications">
              <i className="bi bi-bell"></i>
            </Nav.Link>
            <Nav.Link href="#account">
              <i className="bi bi-person-circle"></i>
            </Nav.Link>
            <NavDropdown
              title={<i className="bi bi-caret-down-fill"></i>}
              id="dropdown-menu"
            >
              <NavDropdown.Item href="#action/1">
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
