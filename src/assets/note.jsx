import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD_TITLE } from '../redux/action/action';

export const Note = () => {
    const dispatch = useDispatch();
    const [Title, setTitle] = useState('')

    const handalSubmit = (e) => {
        e.preventDefault();
        dispatch(ADD_TITLE(Title));
    }

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
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button type='submit' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Form>
            </Container>
        </>
    )
}
