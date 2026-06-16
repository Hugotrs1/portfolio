export type Skill = {
  level: string;
  name: string;
  icon: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  /** "pro" pour un projet professionnel mis en avant, "cours" pour un projet de formation. */
  kind: "pro" | "cours";
  /** Stack / mots-clés affichés en tags. */
  tags?: string[];
  /** Rôle tenu sur le projet (affiché si présent). */
  role?: string;
  /** Point technique mis en avant (affiché en accent). */
  highlight?: string;
  /** Liens (site, stores, dépôt…). Le premier est l'action principale. */
  links?: ProjectLink[];
  /** Conservé pour compatibilité : lien dépôt simple. */
  repoUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string;
  technologies: string[];
  /** Marque l'expérience en cours (badge + accent). */
  current?: boolean;
};

export type Education = {
  title: string;
  school: string;
  year: string;
};

export type NowItem = {
  emoji: string;
  title: string;
  body: string;
};
