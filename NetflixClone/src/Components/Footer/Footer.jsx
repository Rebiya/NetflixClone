import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <Container>
        {/* Social Media Icons */}
        <Row className="footer_icons mb-3">
          <Col className="d-flex justify-content-center">
            <FacebookOutlinedIcon className="social_icon" />
            <InstagramIcon className="social_icon" />
            <YouTubeIcon className="social_icon" />
          </Col>
        </Row>

        {/* Footer Links */}
        <div className="footer_data">
          <Row>
            <Col xs={6} md={3}>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* Service Code */}
        <Row className="service_code mt-3">
          <Col className="text-center">
            <p>Service Code</p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="copy-write mt-2">
          <Col className="text-center">
            &copy; 1997-2024 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
