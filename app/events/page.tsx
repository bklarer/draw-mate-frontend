import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";

export default function EventPage() {
  //TODO Cards or table of events
  //TODO: Add search bar, first col of grid
  //TODO: Large modal for single event creation
  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-3">
        <h1 className="text-4xl text-center col-start-2 place-self-center">
          Participant Page
        </h1>
        <Button className="col-start-3 place-self-end">Add Event</Button>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {[1, 2, 3, 4, 5, 6].map((event) => (
          <EventCard key={event} className="w-full" />
        ))}
      </div>
    </div>
  );
}
