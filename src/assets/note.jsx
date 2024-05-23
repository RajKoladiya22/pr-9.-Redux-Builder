import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD_CARD } from '../redux/action/action';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Note = () => {
    const [record, setRecord] = useState([])
    const dispatch = useDispatch();
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')

    const GetData = async () => {
        let all = await axios.get("http://localhost:3000/card");

        setRecord(all.data);
    }

    const handalSubmit = (e) => {
        e.preventDefault();
        let obj = {
            title: Title,
            description: Description
        }
        dispatch(ADD_CARD(obj));
        toast.success("User successfully create");

    }


    useEffect(() => {
        GetData();
    }, [])

    return (
        <>
            <Container align="center" className='mt-5'>
                <Form onSubmit={handalSubmit}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>
                                <input type="text" onChange={(e) => setTitle(e.target.value)} value={Title} />
                            </Card.Title>
                            <Card.Text>
                                <input type="text" onChange={(e) => setDescription(e.target.value)} value={Description} />

                            </Card.Text>
                            <Button type='submit' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Form>

                {
                    record.map((val) => {
                        const { title, description } = val
                        return (
                            <Card style={{ width: '18rem' }} key={val.id}>
                                <Card.Body>
                                    <Card.Title>
                                        {title}
                                    </Card.Title>
                                    <Card.Text>
                                        {description}

                                    </Card.Text>
                                    <Button type='submit' variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Container>
        </>
    )
}
