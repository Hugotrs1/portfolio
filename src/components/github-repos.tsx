'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

import { person } from "@/data/profile";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

type Status = "loading" | "ready" | "error";

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let active = true;

    fetch(
      `https://api.github.com/users/${person.githubUser}/repos?per_page=100&sort=pushed`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Repo[]>;
      })
      .then((data) => {
        if (!active) return;
        // 6 dépôts publics (hors forks) les plus récemment mis à jour.
        const list = data.filter((repo) => !repo.fork).slice(0, 6);
        if (!list.length) throw new Error("empty");
        setRepos(list);
        setStatus("ready");
      })
      .catch(() => {
        if (active) setStatus("error");
      });

    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
        {["s1", "s2", "s3", "s4", "s5", "s6"].map((key) => (
          <div key={key} className="card-surface h-36 animate-pulse p-6 opacity-60" />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <p className="text-sm text-[color:var(--foreground)]/70">
        Dépôts indisponibles pour le moment — voir{" "}
        <Link
          href={person.github}
          target="_blank"
          rel="noreferrer noopener"
          className="font-semibold text-[color:var(--accent-soft)] hover:underline"
        >
          github.com/{person.githubUser} ↗
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <Link
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer noopener"
          className="card-surface flex flex-col gap-3 p-5"
        >
          <span className="text-base font-semibold text-[color:var(--foreground)]">
            {repo.name}{" "}
            <span aria-hidden className="text-[color:var(--accent-soft)]">
              ↗
            </span>
          </span>

          <span className="flex-1 text-sm text-[color:var(--foreground)]/70">
            {repo.description ?? "Pas encore de description."}
          </span>

          <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[color:var(--foreground)]/55">
            {repo.language ? (
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                {repo.language}
              </span>
            ) : null}
            {repo.stargazers_count > 0 ? <span>★ {repo.stargazers_count}</span> : null}
            <span>
              maj{" "}
              {new Date(repo.pushed_at).toLocaleDateString("fr-FR", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
