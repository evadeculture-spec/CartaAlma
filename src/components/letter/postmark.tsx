import { cn } from "@/lib/utils";

/** Carimbo de correio: anel duplo com data e ondas de obliteração, em tinta gasta. */
export function Postmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 110"
      className={cn("postmark-ink", className)}
      aria-hidden
      fill="none"
    >
      <g stroke="currentColor">
        <circle cx="55" cy="55" r="42" strokeWidth="2.6" />
        <circle cx="55" cy="55" r="27" strokeWidth="1.4" />
      </g>
      <defs>
        <path id="pm-top-arc" d="M 21 55 a 34 34 0 1 1 68 0" />
      </defs>
      <text
        fontSize="9.5"
        letterSpacing="2.2"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="600"
      >
        <textPath href="#pm-top-arc" startOffset="8%">
          CORREIO · PORTUGAL
        </textPath>
      </text>
      <text
        x="55"
        y="52"
        textAnchor="middle"
        fontSize="10"
        letterSpacing="1"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
      >
        09 JUL
      </text>
      <text
        x="55"
        y="64"
        textAnchor="middle"
        fontSize="9"
        letterSpacing="1.5"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        LISBOA
      </text>
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M106 33 q 11 -7 22 0 t 22 0 t 22 0 t 22 0" />
        <path d="M106 47 q 11 -7 22 0 t 22 0 t 22 0 t 22 0" />
        <path d="M106 61 q 11 -7 22 0 t 22 0 t 22 0 t 22 0" />
        <path d="M106 75 q 11 -7 22 0 t 22 0 t 22 0 t 22 0" />
      </g>
    </svg>
  );
}
