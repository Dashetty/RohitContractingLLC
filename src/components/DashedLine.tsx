import { cn } from "@/lib/utils";

/**
 * DashedLine — A decorative dashed separator in horizontal or vertical orientation.
 *
 * Requires CSS variables from theme.css:
 *   --color-muted-foreground (uses `text-muted-foreground` class)
 *
 * @see {@link ../theme.css} for the full design token set
 */
interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "text-muted-foreground relative",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};
