import { cn } from "@/lib/utils";

function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)}
      {...props}
    />
  );
}

export { Container };
