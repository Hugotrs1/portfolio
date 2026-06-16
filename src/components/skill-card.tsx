import Image from "next/image";
import type { Skill } from "@/types";
import { Reveal } from "@/components/reveal";

type SkillCardProps = { skill: Skill };

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Reveal hover tap direction="left" className="h-full">
      <div className="card-surface flex h-full items-center gap-4 px-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-muted)]">
          <Image
            src={skill.icon}
            alt={skill.alt}
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[color:var(--foreground)]/90">
            {skill.name}
          </p>
          <p className="truncate text-xs text-[color:var(--foreground)]/55">
            {skill.level ?? "—"}
          </p>
        </div>
      </div>
    </Reveal>
  );
}