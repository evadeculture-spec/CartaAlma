import { cn } from "@/lib/utils";

interface PaperTextureProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section";
}

/** Envolve conteúdo com uma textura de papel muito subtil (ver .paper-texture em globals.css). */
export function PaperTexture({ as = "div", className, children, ...props }: PaperTextureProps) {
  const Comp = as;
  return (
    <Comp className={cn("paper-texture", className)} {...props}>
      {children}
    </Comp>
  );
}
