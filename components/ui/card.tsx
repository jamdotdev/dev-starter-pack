"use client";

import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import { InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  offer: string;
  details: string | JSX.Element;
  href: string;
}

export const Card = (props: CardProps) => {
  const [isTouch, setIsTouch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Safari has issues displaying tooltips.
  // We need to handle this case manually.
  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  const handleTooltipClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (isTouch) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <a
      href={props.href}
      key={props.title}
      className="border flex flex-col justify-between p-6 rounded-xl group transition md:hover:shadow-lg"
    >
      <div className="flex flex-col flex-1">
        <div className="ring-1 ring-border flex rounded-2xl overflow-hidden w-16 h-16 mb-5">
          {props.icon}
        </div>
        <h5 className="mb-1.5">{props.title}</h5>
        <p>{props.description}</p>
      </div>

      <hr className="my-5" />

      <div>
        <div className="flex flex-1 justify-between items-center gap-2">
          <p>{props.offer}</p>

          <TooltipProvider>
            <Tooltip delayDuration={0} open={isTouch ? isOpen : undefined}>
              {props.details && (
                <TooltipTrigger
                  onClick={handleTooltipClick}
                  className="py-1 opacity-100 md:opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity"
                >
                  <InfoIcon className="w-[16px] h-[16px] text-primary" />
                </TooltipTrigger>
              )}
              <TooltipContent side="left" align="center">
                <span>{props.details}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </a>
  );
};
