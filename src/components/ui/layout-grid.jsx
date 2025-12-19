"use client";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({
  cards
}) => {
  return (
    <div
      className="w-full h-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[minmax(200px,auto)] max-w-7xl mx-auto gap-3 md:gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <div
            className={cn(
              card.className,
              "relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-xl h-full w-full transition-all duration-300 flex items-center justify-center shadow-lg"
            )}
          >
            <div className="relative z-10 w-full h-full">
              {card.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
