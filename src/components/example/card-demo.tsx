import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardDemo = () => (
  <Card className="w-[360px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Fill in your project details to get started with deployment.
      </p>
    </CardContent>
    <CardFooter className="justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
);

export default CardDemo;
