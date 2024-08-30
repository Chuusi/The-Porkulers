import { EventCard } from "./EventCard"
import "./Events.css"

export const Events = () => {

  const eventList = [
    {
      day:"24",
      month:"OCT",
      year:"2024",
      city:"Badajoz",
      place:"Bar Mercantil",
    },
    {
      day:"30",
      month:"NOV",
      year:"2024",
      city:"Plasencia",
      place:"Sala Layout",
    }
  ]

  return (
    <div className="page events" id="events">
      <h2 className="page_title">Proximos eventos</h2>
        <div className="events_container">
          {eventList.map((event) => {
            return <EventCard key={event.day + "" + event.month} event={event}/>
          })}
        </div>
    </div>
  )
}
