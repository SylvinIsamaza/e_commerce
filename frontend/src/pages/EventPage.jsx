import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EventCard from "../components/Events/EventCard";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { getEvents } from "../redux/action/event";

function EventPage() {
  const { user } = useSelector((state) => state.user);
  const { event } = useSelector((state) => state.event);
  const [data, setData] = useState(null);
  useEffect(() => {
    store.dispatch(getEvents()).then(() => {
      const d = event && [...event].sort((a, b) => b.soldOut - a.soldOut);

      setData(d);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <Header activeHeading={4} user={user} />
      {data &&
        data.map((event, i) => (
          <div>
            <EventCard active={true} event={event} key={i} />
          </div>
        ))}
    </div>
  );
}

export default EventPage;
