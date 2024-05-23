import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD_CARD, DELET_CARD } from '../redux/action/action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Note = () => {
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')


    const handalSubmit = (e) => {
        e.preventDefault();
        let obj = {
            title: Title,
            description: Description
        }
        dispatch(ADD_CARD(obj));
        toast.success("User successfully create");
        setTitle("")
        setDescription("")
        nav('/view')
    }



    return (
        <>
            <Container className='mt-5'>
                <Form onSubmit={handalSubmit}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>
                                <label>Title</label>
                                <input type="text" onChange={(e) => setTitle(e.target.value)} value={Title} />
                            </Card.Title>
                            <Card.Text>
                                <label>Description</label>
                                <input type="text" onChange={(e) => setDescription(e.target.value)} value={Description} />

                            </Card.Text>
                            <Button type='submit' variant="primary" >Save Note</Button>
                        </Card.Body>
                    </Card>
                </Form>

            </Container>
        </>
    )
}
