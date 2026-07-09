import { cn } from "@/lib/utils";

interface LetterSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mostra os vincos da dobra em três, como uma carta que veio do envelope. */
  creases?: boolean;
}

/** Folha de papel de algodão hiper-realista: grão, luz, sombra e vincos. */
export function LetterSheet({ creases = true, className, children, ...props }: LetterSheetProps) {
  return (
    <div className={cn("paper-sheet relative rounded-[5px]", className)} {...props}>
      {creases ? (
        <>
          <span aria-hidden className="paper-crease top-[31%]" />
          <span aria-hidden className="paper-crease top-[64%]" />
        </>
      ) : null}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
