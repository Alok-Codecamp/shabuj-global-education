"use client"
import getEvents from "@/lib/getEvents";
import { IEvent } from "@/lib/postEvent";
import { useEffect, useState } from "react";





const ManageEventCard = ({evnt}:{evnt:IEvent})=>{
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getEvents();
      const now = new Date();
      const past = allEvents.filter((event: IEvent) => new Date(event.startDate) < now);
      setEvents(past);
    };
    fetchEvents();
  }, []);
}