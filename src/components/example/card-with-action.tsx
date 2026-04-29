import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardWithAction = () => (
  <Card className="w-[360px]">
    <CardHeader>
      <CardTitle>Team Members</CardTitle>
      <CardDescription>Manage your team and permissions.</CardDescription>
      <CardAction>
        <Button size="sm" variant="outline">
          Invite
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        You currently have 4 team members with access to this project.
      </p>
    </CardContent>
  </Card>
);

export default CardWithAction;
