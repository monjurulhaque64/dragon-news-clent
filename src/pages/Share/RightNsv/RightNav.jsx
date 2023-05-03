import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2>Log In</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Log In With Google</Button>
            <Button variant="outline-secondary"> <FaGithub />Log In With Google</Button>
            <div>
                <h4>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF/> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;