import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Card, CardHeader, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { saveFile } from '../services/product.service';

function SaveFile(props){

    let [file,setFile]= useState(null)

    const fileChangedHandler = input=>{
        setFile(input.target.files[0])
    }

    const saveHandler =async e=>{
        e.preventDefault()
        try{
            let data = new FormData()
            data.append("csv",file)
            let response = (await saveFile(data)).data
            props.history.push(`/${response.id}`)
        }catch(error){
            alert("Error")
        }
    }

    return(
        <Container fluid>
            <Row>
                <Col sm={12} className={"d-flex justify-content-center align-items-center"}>
                    <Form onSubmit={saveHandler}>
                        <FormGroup>
                            <Label for={"file"}>Select File</Label>
                            <Input type={"file"} id={"file"} onChange={fileChangedHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Button outline type={"submit"} block color={"primary"}>
                                Save
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(SaveFile)