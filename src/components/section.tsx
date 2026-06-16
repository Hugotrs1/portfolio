import type { PropsWithChildren, ReactNode } from "react";
import { Container } from "./container";
import { Reveal } from "./reveal";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  className?: string;
}>;

export function Section({ id, title, eyebrow, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`} aria-label={title}>
      <Container hover className="space-y-10">
        <Reveal direction="down">
          <header className="max-w-3xl space-y-3">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--foreground)]/60">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <div className="text-base leading-relaxed text-[color:var(--foreground)]/70">
                {description}
              </div>
            ) : null}
          </header>
        </Reveal>

        <Reveal direction="up">{children}</Reveal>
      </Container>
    </section>
  );
}
