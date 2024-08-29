import React from "react";
import { Layout, Menu, Row, Col, Typography, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "antd/dist/reset.css"; // Import Ant Design styles

const { Footer } = Layout;
const { Title, Text } = Typography;

export default function CustomFooter() {
  return (
    <Footer className="bg-gray-100 py-10 border-t border-gray-300">
      <Row justify="center" gutter={[16, 32]}>
        <Col xs={24} sm={12} md={8} className="text-center sm:text-left">
          <Title level={4} className="text-gray-800 mb-4">
            Quick Links
          </Title>
          <Menu mode="vertical" theme="light" className="text-gray-700">
            <Menu.Item key="home">
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </Menu.Item>
            <Menu.Item key="heritage">
              <a href="#" className="hover:text-blue-500">
                Heritage
              </a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </Menu.Item>
          </Menu>
        </Col>

        <Col xs={24} sm={12} md={8} className="text-center sm:text-left">
          <Title level={4} className="text-gray-800 mb-4">
            Contact Us
          </Title>
          <Row align="middle" gutter={[8, 8]} className="mb-4">
            <Col>
              <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-600" />
            </Col>
            <Col>
              <Text className="text-gray-700">91-011 23311237 </Text>
            </Col>
          </Row>
          <Row align="middle" gutter={[8, 8]} className="mb-4">
            <Col>
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
            </Col>
            <Col>
              <Text className="text-gray-700">info.mot@gov.in</Text>
            </Col>
          </Row>
          <Title level={4} className="text-gray-800 mb-4">
            Follow Us
          </Title>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              <Button
                icon={<FontAwesomeIcon icon={faFacebookF} />}
                shape="circle"
                className="bg-blue-600 text-white hover:bg-blue-700"
                href="https://facebook.com"
                target="_blank"
              />
            </Col>
            <Col>
              <Button
                icon={<FontAwesomeIcon icon={faTwitter} />}
                shape="circle"
                className="bg-blue-400 text-white hover:bg-blue-500"
                href="https://twitter.com"
                target="_blank"
              />
            </Col>
            <Col>
              <Button
                icon={<FontAwesomeIcon icon={faInstagram} />}
                shape="circle"
                className="bg-pink-600 text-white hover:bg-pink-700"
                href="https://instagram.com"
                target="_blank"
              />
            </Col>
            <Col>
              <Button
                icon={<FontAwesomeIcon icon={faLinkedinIn} />}
                shape="circle"
                className="bg-blue-700 text-white hover:bg-blue-800"
                href="https://linkedin.com"
                target="_blank"
              />
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={12} md={8} className="text-center sm:text-left">
          <Title level={4} className="text-gray-800 mb-4">
            Newsletter Signup
          </Title>
          <Input
            placeholder="Enter your email"
            className="mb-4 border-gray-300"
          />
          <Button
            type="primary"
            block
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Subscribe
          </Button>
        </Col>
      </Row>
      <Row justify="center" className="mt-6">
        <Text className="text-gray-600">
          2024 Virasat. All Rights Reserved.
        </Text>
      </Row>
    </Footer>
  );
}
