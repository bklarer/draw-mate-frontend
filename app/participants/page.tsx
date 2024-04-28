import ParticipantCard from "@/components/ParticipantCard";
import { Button } from "@/components/ui/button";

export default function ParticipantPage() {
  //TODO: I'll just do a modal for a single participant to edit/delete
  //TODO: Add search bar, first col of grid

  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-3">
        <h1 className="text-4xl text-center col-start-2 place-self-center">
          Participant Page
        </h1>
        <Button className="col-start-3 place-self-end">Add Participant</Button>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {[1, 2, 3, 4, 5, 6].map((event) => (
          <ParticipantCard key={event} className="w-full" />
        ))}
      </div>
    </div>
  );
}
