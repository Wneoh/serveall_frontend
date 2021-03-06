import React from 'react'
import { Container, Row, Col, Form, Button,Spinner } from 'react-bootstrap'
export const AddTicketForm = ({isLoading,changeViewToList,subject,error,client,issue,date,handleOnChange,handleSubmit}) => {
  return (
    <Container>
          <Row>
              <Col sm={12} className="text-center pb-3">
                  <h2>Add Ticket</h2>
              </Col>
              {error !== ''? <Col sm={12} className="text-center pb-2"><span style={{color:"red",textAlign:"center"}}>{error}</span> </Col>: ""}
              <Col sm={12}>
                  <Form>
                      <Form.Group as={Row} className="pb-4">
                          <Form.Label column sm={3} >Client</Form.Label>
                          <Col sm={9}>
                            <Form.Control 
                            type="text" 
                            name="client" 
                            value={client}
                            placeholder="Enter Client Name" 
                            onChange={handleOnChange}
                            required
                            />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="pb-4">
                          <Form.Label column sm={3} >Subject</Form.Label>
                          <Col sm={9}>
                            <Form.Control 
                            type="text" 
                            name="subject" 
                            value={subject}
                            placeholder="Enter Subject" 
                            onChange={handleOnChange}
                            required
                            />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="pb-4">
                          <Form.Label column sm={3} >Date</Form.Label>
                          <Col sm={9}>
                            <Form.Control 
                            type="date" 
                            name="date" 
                            value={date}
                            onChange={handleOnChange}
                            required
                            />
                          </Col>
                      </Form.Group>
                      <Form.Group className="pb-4">
                          <Form.Label column sm={3} >Issue</Form.Label>
                          <Col sm={12}>
                            <Form.Control 
                            rows="5"
                            as="textarea" 
                            name="issue" 
                            value={issue}
                            onChange={handleOnChange}
                            required
                            />
                          </Col>
                      </Form.Group>
                        <Row>
                            <Col sm={12} className="text-center">
                                <Button variant="primary" type="submit" onClick={handleSubmit} type="submit"> 
                                            { isLoading ? <Spinner size="sm" variant="white" animation="border" /> : <span>Add New Ticket</span>}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                    <Col sm={12} >
                        <a style={{cursor:"pointer"}} onClick={changeViewToList} className="pt-2">
                            <small>Back</small>
                        </a>
                    </Col>
          </Row>
      </Container>  
      )
}
