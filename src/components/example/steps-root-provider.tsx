"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsRootProvider,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
  useSteps,
} from "@/components/ui/steps";

const STEP_ITEMS = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const StepsRootProviderDemo = () => {
  const api = useSteps({ count: STEP_ITEMS.length });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => api.goToPrevStep()} size="sm" variant="outline">
          Prev
        </Button>
        <Button onClick={() => api.goToNextStep()} size="sm" variant="outline">
          Next
        </Button>
        <Button onClick={() => api.resetStep()} size="sm" variant="outline">
          Reset
        </Button>
        <span className="text-muted-foreground text-xs">
          step:{" "}
          <span className="font-medium text-foreground">{api.value + 1}</span>
        </span>
      </div>
      <StepsRootProvider value={api}>
        <StepsContext>
          {(ctxApi) => (
            <>
              <StepsList>
                {STEP_ITEMS.map((item, index) => {
                  const state = ctxApi.getItemState({ index });
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
                        <StepsTitle>{item.title}</StepsTitle>
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

              <StepsCompletedContent>All done!</StepsCompletedContent>
            </>
          )}
        </StepsContext>
      </StepsRootProvider>
    </div>
  );
};

export default StepsRootProviderDemo;
