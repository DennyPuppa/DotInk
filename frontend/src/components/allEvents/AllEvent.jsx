import { useState, useEffect } from 'react';
import SingleEvent from '../singleEvent/SingleEvent';


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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <h2 className='event-title'>Ink Event around the World🌍</h2>
                    {allEvent.map((event, index) => (
                        <SingleEvent
                            key={`singleevent-${index}`}
                            title={event.title}
                            image={event.image}
                            artist={event.artistId.username}
                            date={event.date}
                            _id={event.artistId._id}
                            avatar={event.artistId.avatar}
                            city={event.city}
                        />

                    )).reverse()}
                </div>
            </div>
        </div>
    )
}

export default AllEvent;