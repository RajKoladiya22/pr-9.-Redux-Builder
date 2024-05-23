import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { DELET_CARD } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function View() {

    let data = useSelector((state)=> state.cardReducer)
    console.log(data);

    const dispatch = useDispatch();
    const [record, setRecord] = useState([])


    const GetData = async () => {
        let all = await axios.get("http://localhost:3000/card");
        setRecord(all.data);
    }


    useEffect(() => {
        GetData();
    }, [])

    return (
        <>
            <center>
                <h1>view</h1>
                <h5><Link to={'/'}>Add</Link></h5>
            </center>

            <Container>

                <div className="d-flex flex-wrap justify-content-around">
                    {
                        record.map((val) => {
                            const { title, description } = val
                            return (
                                <Card style={{ width: '18rem' }} key={val.id} className='m-3'>
                                    <Card.Body>
                                        <Card.Title>
                                            {title}
                                        </Card.Title>
                                        <Card.Text>
                                            {description}

                                        </Card.Text>
                                        <Button type='submit' variant="danger" onClick={() => dispatch(DELET_CARD(val.id))}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </Container>
        </>
    )
}
