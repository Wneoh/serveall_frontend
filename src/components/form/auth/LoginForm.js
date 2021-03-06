import React from 'react'
import { Col, Container, Form, Row,Button, Spinner } from 'react-bootstrap';

const LoginForm = ({isLoading,handleOnChange,handleSubmit,error,email,password,changeView}) => {
  return (
      <Container>
          <Row>
              <Col sm={12} className="text-center pb-3">
                  <h2>Welcome to ServeAll</h2>
              </Col>
              {error !== ''? <span className="pb-2" style={{color:"red",textAlign:"center"}}>{error}</span>: ""}
              <Col sm={12}>
                  <Form>
                      <Form.Group>
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control 
                          type="email" 
                          name="email" 
                          value={email}
                          placeholder="Enter email" 
                          onChange={handleOnChange}
                          required
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            name="password" 
                            value={password}
                            placeholder="Password" 
                            onChange={handleOnChange}
                            required
                            />
                        </Form.Group>
                        <Row>
                            <Col sm={12} className="text-center">
                                <Button variant="primary" onClick={handleSubmit} type="submit">
                                { isLoading ? <Spinner size="sm" variant="white" animation="border" /> : <span>Login</span>}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                  
          </Row>
      </Container>
  )
}


export default LoginForm;