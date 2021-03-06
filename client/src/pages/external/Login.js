import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/i/dashboard");
        } catch (err) {
            setError(err);
            setLoading(false);
        }

    }

    return (
        <div>
            <>
                <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                    <div className="w-100" style={{maxWidth: "600px"}}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Log in</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Button disabled={loading} type="submit" className="w-100">Log in</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                        <div className="w-100 text-center mt-2">
                            Back to <Link to="/home">Home</Link>
                        </div>
                    </div>
                </Container>
            </>
        </div>
    );
}

