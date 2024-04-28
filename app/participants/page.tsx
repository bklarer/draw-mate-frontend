import ParticipantCard from "@/components/ParticipantCard";

export default function ParticipantPage() {
  //TODO: I'll just do a modal for a single participant to edit/delete

  return (
    <div>
      <h1>Participant Page</h1>
      <div className="w-full">
        <h1 className="text-4xl text-center">Event Page</h1>
        <div className="grid grid-cols-4 gap-10 mt-10">
          {[1, 2, 3, 4, 5, 6].map((event) => (
            <ParticipantCard key={event} className="w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
