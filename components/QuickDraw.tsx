"use client";

import ComboBox from "@/components/form/ComboBox";
import { NonZodComboBox } from "@/components/form/NonZodComboBox";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { AddParticipantModal } from "@/components/AddPartcipantModal";
import { cn } from "@/lib/utils";
// import { Input } from "@/components/form/Input";
import { useState } from "react";

interface Participant {
  value: string;
  label: string;
}

const seededParticipants: Participant[] = [
  {
    label: "John Doe",
    value: "1",
  },
  {
    label: "Jane Doe",
    value: "2",
  },
];

export default function QuickDraw({ className }: { className?: string }) {
  const [participants, setParticipants] = useState<Participant[]>([
    ...seededParticipants,
  ]);
  //   const [open, setOpen] = useState(false);

  return (
    <div className={cn(className)}>
      <div className="flex gap-4 items-center justify-center">
        <div>Participants</div>
        <AddParticipantModal />
      </div>
      <div className="mt-4">
        {participants.map((participant) => {
          return (
            <div
              className="flex gap-4 items-center mt-4"
              key={participant.value}
            >
              <div>{participant.label}</div>
              {seededParticipants.length > 1 && (
                <NonZodComboBox options={participants} />
              )}
              <Button>
                <Icons.trash />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
