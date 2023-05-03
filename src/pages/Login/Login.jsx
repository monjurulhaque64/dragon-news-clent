import React, { useContext, useState } from 'react';
import { Button, Container , Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';




const Login = () => {

    const [error, setError] = useState('');

    const {singInNow} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/catagory/0'

    const handleSingInNow = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError('');

        singInNow(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from)
        })
        .catch(error =>{
                console.log(error)
                setError(error.message);
        })

    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>LogIn</h3>
            <Form onSubmit={handleSingInNow}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <br />
                <Form.Text>
                    Dont't Have an Account <Link to={'/register'}>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                     
                </Form.Text>
                <Form.Text className="text-danger">
                     <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;