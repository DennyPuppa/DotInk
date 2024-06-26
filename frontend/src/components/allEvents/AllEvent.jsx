import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import SingleEvent from '../singleEvent/SingleEvent';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const AllEvent = (props) => {

    const [allEvent, setAllEvent] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getAllEvent = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(process.env.REACT_APP_BASEURL + '/event')
            const data = await response.json()
            setIsLoading(false)
            setAllEvent(data)
            console.log(data);
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllEvent()
    }, [])

    return (
        <Container>
           <Row>
            {allEvent.map((event, index) => (
                    <Col key={`singleevent-${index}`} xs={12} md={4} lg={3}>
                        <SingleEvent
                            title={event.title}
                            image={event.image}
                            author={event.artistId.username}
                            date={event.date}
                            _id={event._id}
                            avatar={event.artistId.avatar}
                        />
                    </Col>
                )).reverse()}
            </Row> 
        </Container>
    )
}

export default AllEvent;