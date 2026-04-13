"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsBasicDemo = () => (
  <Tabs defaultValue="account" variant="default">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Make changes to your account here.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Change your password here.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Manage your billing and payment details.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsBasicDemo;
