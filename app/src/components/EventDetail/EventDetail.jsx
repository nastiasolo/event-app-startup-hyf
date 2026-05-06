// TODO: fetch the event from GET /events/:id instead of using mock data
import "./EventDetail.css";

export default function EventDetail({ event }) {
  return (
    <>
      <div className="event-detail" key={event.id}>
        <h2 className="event-title">{event.name}</h2>
        <div className="event-description">
          <p>
            <span className="event-emoji">⏱️ </span>
            {event.date} at {event.time}
          </p>
          <p>
            <span className="event-emoji">📍 </span>
            {event.venue}, {event.city}
          </p>
          <p className="event-category">{event.category}</p>
          <p>
            <span className="event-emoji">💵 </span>
            {event.price === 0 ? "Free" : `€${event.price}`}
          </p>
          <p className="event-tickets">
            {event.ticketsAvailable === 0
              ? "Sold out"
              : `${event.ticketsAvailable} tickets left`}
          </p>
        </div>
        <div className="event-about">{event.description}</div>
        <button className="event-buy-button" type="button">
          Buy ticket
        </button>
      </div>
      <div style={{ height: "40px" }}></div>
    </>
  );
}
