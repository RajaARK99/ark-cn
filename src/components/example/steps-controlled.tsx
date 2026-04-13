"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/components/ui/steps";

const STEP_ITEMS = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const StepsControlledDemo = () => {
  const [step, setStep] = useState(0);

  return (
    <Steps
      count={STEP_ITEMS.length}
      step={step}
      onStepChange={(d) => setStep(d.step)}
    >
      <StepsContext>
        {(api) => (
          <>
            <StepsList>
              {STEP_ITEMS.map((item, index) => {
                const state = api.getItemState({ index });
                return (
                  <StepsItem key={item.title} index={index}>
                    <StepsTrigger>
                      <StepsIndicator>
                        {state.completed ? (
                          <Check className="size-4" />
                        ) : (
                          index + 1
                        )}
                      </StepsIndicator>
                      <div className="flex flex-col">
                        <StepsTitle>{item.title}</StepsTitle>
                        <StepsDescription>{item.description}</StepsDescription>
                      </div>
                    </StepsTrigger>
                    <StepsSeparator />
                  </StepsItem>
                );
              })}
            </StepsList>

            {STEP_ITEMS.map((item, index) => (
              <StepsContent key={item.title} index={index}>
                <p className="text-muted-foreground">
                  {item.title} &ndash; {item.description}
                </p>
              </StepsContent>
            ))}

            <StepsCompletedContent>
              Steps Complete &mdash; Thank you!
            </StepsCompletedContent>

            <div className="flex items-center justify-between">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Previous
                </Button>
              </StepsPrevTrigger>
              <span className="text-muted-foreground text-sm">
                Step {api.value + 1} of {api.count}
              </span>
              <StepsNextTrigger asChild>
                <Button size="sm">Next</Button>
              </StepsNextTrigger>
            </div>
          </>
        )}
      </StepsContext>
    </Steps>
  );
};

export default StepsControlledDemo;
