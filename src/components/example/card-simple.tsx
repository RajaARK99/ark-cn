import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardSimple = () => (
  <Card className="w-[360px]">
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Check your inbox to see the latest updates from your team.
      </p>
    </CardContent>
  </Card>
);

export default CardSimple;
