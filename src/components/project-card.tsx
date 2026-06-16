import Link from "next/link";
import type { Project } from "@/types";
import { Reveal } from "@/components/reveal";

type ProjectCardProps = { project: Project };

export function ProjectCard({ project }: ProjectCardProps) {
  const isPro = project.kind === "pro";
  const links =
    project.links ??
    (project.repoUrl ? [{ label: "Voir sur GitHub", url: project.repoUrl }] : []);

  return (
    <Reveal hover tap direction="up" className="h-full">
      <article
        className={`card-surface flex h-full flex-col p-6 ${isPro ? "project-featured" : ""}`}
      >
        <div className="flex-1 space-y-3">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.08em] ${
              isPro
                ? "text-[color:var(--accent-soft)]"
                : "text-[color:var(--foreground)]/45"
            }`}
          >
            {isPro ? "Projet professionnel · en production" : "Projet de cours"}
          </p>

          <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-[color:var(--foreground)]/70">
            {project.description}
          </p>

          {project.role ? (
            <p className="text-sm text-[color:var(--foreground)]/75">
              <span className="font-semibold text-[color:var(--foreground)]">
                Mon rôle :
              </span>{" "}
              {project.role}
            </p>
          ) : null}

          {project.highlight ? (
            <p className="text-sm text-[color:var(--foreground)]/75">
              <span className="font-semibold text-[color:var(--accent-soft)]">
                Ce dont je suis fier :
              </span>{" "}
              {project.highlight}
            </p>
          ) : null}

          {project.tags?.length ? (
            <ul className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--card-muted)] px-3 py-1 text-xs font-medium text-[color:var(--foreground)]/75"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {links.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {links.map((link, index) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                className={
                  index === 0
                    ? "inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-soft))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                    : "inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card-muted)] px-4 py-2 text-sm font-semibold text-[color:var(--foreground)]/85 transition hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                }
              >
                {link.label} <span aria-hidden>↗</span>
              </Link>
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}
