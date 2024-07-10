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
                <h2 className='event-title'>#Event around the World🌍</h2>
                {allEvent.map((event, index) => (
                    <div className='col-12 col-lg-6'>
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
                    </div>

                )).reverse().slice(0, 6)}
            </div>
        </div>
    )
}

export default AllEvent;