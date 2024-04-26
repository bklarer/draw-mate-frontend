import EventCard from "@/components/EventCard";

export default function EventPage() {
  //TODO Cards or table of events
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center">Event Page</h1>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {[1, 2, 3, 4, 5, 6].map((event) => (
          <EventCard key={event} className="w-full" />
        ))}
      </div>
    </div>
  );
}
