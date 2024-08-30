import "./EventCard.css"

export const EventCard = (event) => {
  return (
    <div className="event_card">
        <div className="date">
            <p className="day">{event.event.day}</p>
            <p className="month">{event.event.month}</p>
            <p className="year">{event.event.year}</p>
        </div>
        <div className="place_container">
            <p className="city">{event.event.city}</p>
            <p className="place">{event.event.place}</p>
        </div>
    </div>
  )
}
