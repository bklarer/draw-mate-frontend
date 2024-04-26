import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EventCardProps {
  className?: string;
}

export default function EventCard({ className }: EventCardProps) {
  console.log("EventCard");

  return (
    <Card className={cn(className)}>
      <CardContent className="text-center p-10">
        <h2>Event Card</h2>
        <p>12/25/24</p>
        <p>Secret Santa</p>
      </CardContent>
    </Card>
  );
}
