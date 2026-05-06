import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EventDetail.css";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${baseUrl}/events/${id}`);
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <>
      <div className="event-detail" key={event.id}>
        <p className="event-category">{event.category}</p>
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
