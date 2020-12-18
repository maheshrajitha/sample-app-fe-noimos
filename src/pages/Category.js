import React, { Component, useEffect, useState } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Table, Button, Modal, ModalHeader, ModalBody, Form, Label, FormGroup, Input } from 'reactstrap'
import { getCsv, saveNumber } from "../services/product.service"

function CsvData(props){

    let [csvData,setCsvData] = useState([])

    useEffect(()=>{
        getCsvData()
    },[])

    const getCsvData = async ()=>{
        try{
            let data = (await getCsv(props.match.params.csvId)).data
            setCsvData(data)
        }catch(error){
            console.log(error);
            alert("Error")
        }
    }

    const saveNumberHandler = async (number)=>{
        try{
            let data = {
                number: number
            }
            await saveNumber(data)
            let numbers = csvData.filter(data=> data.number !== number)
            console.log(numbers);
            setCsvData(numbers)
        }catch(error){
            console.log(error);
            alert("Error")
        }
    }


    return(
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Number</th>
                                <th>Process</th>
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.map((csv,index)=>(
                                <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {csv.number}
                                    </td>
                                    <td>
                                        <Button onClick={()=>{saveNumberHandler(csv.number)}} size={"sm"} color={"success"} outline>
                                            Process
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default CsvData