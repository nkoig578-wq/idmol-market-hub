import type { ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100 blur-none" : "translate-y-6 opacity-0 blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}