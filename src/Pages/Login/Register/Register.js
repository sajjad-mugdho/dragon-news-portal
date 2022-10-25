import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {


    const handleSubmit = (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

    }
    return (
        <>
            <Form onSubmit={handleSubmit} className='m-auto  w-50'>
                <h3>Register</h3>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" type="name" placeholder="Your name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
        </>
    );
};

export default Register;