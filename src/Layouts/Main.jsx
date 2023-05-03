import React from 'react';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Share/RightNsv/RightNav';
import LaftNav from '../pages/Share/LeftNav/LaftNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Share/NevigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LaftNav></LaftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;