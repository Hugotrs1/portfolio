import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
  hover?: boolean;
}>;

export function Container({ className = "", children, hover = false }: ContainerProps) {
  const baseClasses = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
  const hoverClasses = hover ? "card-surface py-6 sm:py-8" : "";
  const combinedClasses = [baseClasses, hoverClasses, className].filter(Boolean).join(" ");

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}
