import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GithubRepos } from "@/components/github-repos";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SkillCard } from "@/components/skill-card";
import { education, experiences } from "@/data/experience";
import { nowItems } from "@/data/now";
import { projects } from "@/data/projects";
import { person } from "@/data/profile";
import { skills } from "@/data/skills";

const heroHighlights = [
  {
    emoji: "🎨",
    title: "UI/UX soignée",
    body: "Des interfaces claires et accessibles, pensées pour l'usager.",
  },
  {
    emoji: "🏗️",
    title: "Logique métier durable",
    body: "Un back-end lisible et maintenable, sur un logiciel en production.",
  },
];

const heroStats = [
  { title: "Alternance", body: "Agelid · depuis oct. 2025" },
  { title: "Projet phare", body: "GarezVous · en production" },
  { title: "Code", body: "github.com/Hugotrs1" },
];

export default function Home() {
  return (
    <div className="min-h-screen text-[color:var(--foreground)]">
      <Header />

      <main>
        <section className="relative overflow-hidden pb-20 pt-12 sm:pt-16">
          <Container className="grid gap-12 lg:grid-cols-5 lg:items-center">
            <Reveal className="space-y-8 lg:col-span-3" direction="up">
              <div className="space-y-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-xs font-semibold text-[color:var(--foreground)]/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                  {person.badge}
                </p>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  {person.name}
                </h1>
                <p className="text-lg font-medium text-[color:var(--foreground)]/75">
                  {person.role} • {person.location}
                </p>
              </div>

              <div className="space-y-3 text-base leading-relaxed text-[color:var(--foreground)]/70">
                <p>{person.introduction}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroHighlights.map((item) => (
                  <div key={item.title} className="card-surface flex items-start gap-3 p-4">
                    <span aria-hidden className="mt-1 text-lg">
                      {item.emoji}
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-[color:var(--foreground)]">
                        {item.title}
                      </p>
                      <p className="text-sm text-[color:var(--foreground)]/70">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((item, index) => (
                  <Reveal key={item.title} delay={80 * index}>
                    <div className="card-surface p-4">
                      <p className="text-xs uppercase tracking-wide text-[color:var(--foreground)]/60">
                        {item.title}
                      </p>
                      <p className="text-base font-semibold text-[color:var(--foreground)]">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal
              className="card-surface space-y-6 p-6 lg:col-span-2"
              direction="up"
              delay={150}
            >
              <p className="text-sm font-semibold text-[color:var(--foreground)]">En bref</p>

              <div className="space-y-3 text-sm leading-relaxed text-[color:var(--foreground)]/70">
                <p>
                  Actuellement en alternance chez Agelid, je travaille sur GarezVous : le
                  front mobile (Flutter) et le back-office métier (Java/JSP).
                </p>
                <p>
                  Je m&apos;intéresse à l&apos;IA, aux nouvelles technos, et à la conception
                  d&apos;un back-end propre et durable.
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-[color:var(--foreground)]/80">
                <Link
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                >
                  <span aria-hidden>✉️</span>
                  {person.email}
                </Link>

                <Link
                  href={person.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                >
                  <span aria-hidden>🐙</span>
                  GitHub
                </Link>

                <Link
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                >
                  <span aria-hidden>💼</span>
                  LinkedIn
                </Link>
              </div>

              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-muted)] p-4 text-sm text-[color:var(--foreground)]/75">
                <p className="font-semibold text-[color:var(--foreground)]">
                  Veille & montée en compétence
                </p>
                <p className="mt-1">
                  Continuer à progresser sur des projets concrets, du mobile au back-office
                  métier.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <Section
          id="about"
          title="À propos"
          description={
            <span className="text-[color:var(--foreground)]/75">
              Développeur fullstack en alternance, je travaille sur des applications mobiles
              et le back-office métier qui les accompagne.
            </span>
          }
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="card-surface p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Profil</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--foreground)]/70">
                {person.about}
              </p>
            </Reveal>

            <Reveal className="card-surface space-y-4 p-6" delay={80}>
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Expérience</h3>
              {experiences.map((item, index) => (
                <Reveal
                  key={`${item.company}-${item.period}`}
                  delay={120 + index * 80}
                  className={`space-y-2 rounded-xl border bg-[color:var(--card-muted)] p-3 ${
                    item.current
                      ? "border-[color:var(--accent)]/40"
                      : "border-[color:var(--border)]"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-[color:var(--foreground)]">
                      {item.role}
                    </p>
                    {item.current ? (
                      <span className="rounded-full bg-[color:var(--accent)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--accent-soft)]">
                        En cours
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-[color:var(--foreground)]/80">
                    {item.company} — {item.location}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-[color:var(--foreground)]/55">
                    {item.period}
                  </p>
                  <p className="text-sm text-[color:var(--foreground)]/70">{item.details}</p>
                  <p className="text-xs text-[color:var(--foreground)]/55">
                    Stack : {item.technologies.join(", ")}
                  </p>
                </Reveal>
              ))}
            </Reveal>

            <Reveal className="card-surface space-y-4 p-6" delay={120}>
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Formation</h3>
              {education.map((item, index) => (
                <Reveal
                  key={`${item.title}-${item.school}`}
                  delay={160 + index * 80}
                  className="space-y-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--card-muted)] p-3"
                >
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[color:var(--foreground)]/80">{item.school}</p>
                  <p className="text-xs uppercase tracking-wide text-[color:var(--foreground)]/55">
                    {item.year}
                  </p>
                </Reveal>
              ))}
            </Reveal>
          </div>
        </Section>

        <Section
          id="skills"
          title="Compétences"
          description={
            <span className="text-[color:var(--foreground)]/75">
              Technos utilisées en cours, en projets et en alternance.
            </span>
          }
        >
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={60 * index}>
                <SkillCard skill={skill} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projets"
          description={
            <span className="text-[color:var(--foreground)]/75">
              Un projet professionnel en production, et des projets réalisés en formation.
            </span>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={80 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="github"
          title="Sur GitHub"
          description={
            <span className="text-[color:var(--foreground)]/75">
              Mes dépôts publics les plus récents — synchronisés automatiquement.
            </span>
          }
        >
          <GithubRepos />
        </Section>

        <Section
          id="now"
          title="En ce moment"
          description={
            <span className="text-[color:var(--foreground)]/75">
              Ce sur quoi je me forme et ce que je suis de près en ce moment.
            </span>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {nowItems.map((item, index) => (
              <Reveal key={item.title} delay={80 * index}>
                <div className="card-surface h-full space-y-3 p-6">
                  <span aria-hidden className="text-2xl">
                    {item.emoji}
                  </span>
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--foreground)]/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          description={
            <span className="text-[color:var(--foreground)]/75">
              Une question, une idée de projet, ou juste envie d’échanger ? Écris-moi par mail
              ou via ce formulaire.
            </span>
          }
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal direction="up" className="h-full">
              <ContactForm />
            </Reveal>

            <Reveal direction="up" delay={120}>
              <div className="card-surface space-y-4 p-6">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Liens</h3>

                <div className="space-y-2 text-sm text-[color:var(--foreground)]/80">
                  <Link
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                  >
                    <span aria-hidden>📧</span>
                    {person.email}
                  </Link>

                  <Link
                    href={person.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                  >
                    <span aria-hidden>🐱</span>
                    github.com/Hugotrs1
                  </Link>

                  <Link
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                  >
                    <span aria-hidden>🔗</span>
                    linkedin.com/in/hugotroussel
                  </Link>
                </div>

                <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card-muted)] p-4 text-sm text-[color:var(--foreground)]/75">
                  <p className="font-semibold text-[color:var(--foreground)]">Préférence</p>
                  <p className="mt-1">
                    Un mail avec le contexte (sujet, stack, objectif) et je te réponds
                    rapidement.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
