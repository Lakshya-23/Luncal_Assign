import { AnimatedTabs } from "./animated-tabs";
import { WidgetCard } from "./widget-card";

export function ProfileWidget() {
  const descriptionText =
    "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...";

  return (
    <WidgetCard>
      <div className="flex flex-col gap-6 pl-4">
        <AnimatedTabs />
        <div className="relative pr-4">
         
          <p className="text-muted-foreground text-sm leading-relaxed">
            {descriptionText}
          </p>
          <div className="absolute top-0 right-0 h-full w-1.5 bg-black/20 rounded-full">
       
              <div className="h-1/3 w-full bg-muted-foreground/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}