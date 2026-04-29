import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardSmall = () => (
  <Card size="sm" className="w-[320px]">
    <CardHeader>
      <CardTitle>Quick Note</CardTitle>
      <CardDescription>Compact card variant.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Use the sm size for denser layouts.
      </p>
    </CardContent>
    <CardFooter className="justify-end">
      <Button size="sm">Save</Button>
    </CardFooter>
  </Card>
);

export default CardSmall;
