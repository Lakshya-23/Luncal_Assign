import { GripVertical, HelpCircle } from "lucide-react";
import React from "react";

type WidgetCardProps = {
  children: React.ReactNode;
};

export function WidgetCard({ children }: WidgetCardProps) {
  return (

    <div className="relative rounded-2xl bg-card p-6 shadow-[6px_6px_3px_rgba(0,0,0,0.3)]">
      <div className="absolute left-0 top-0 bottom-0 flex items-center pl-2">

        <GripVertical className="h-7 w-7 text-muted-foreground/30 " />
      </div>
      <div className="absolute top-4  left-3 right-4">
        <HelpCircle className="text-xl text-white/50" />
      </div>
      {children}
    </div>
  );
}