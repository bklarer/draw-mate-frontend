import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ParticipantCardProps {
  className?: string;
}

export default function ParticipantCard({ className }: ParticipantCardProps) {
  console.log("ParticipantCard");

  return (
    <Card className={cn(className)}>
      <CardContent className="text-center p-10">
        <h2>Benjamin Klarer</h2>
        <p>benjaminklarer@gmail.com</p>
      </CardContent>
    </Card>
  );
}
