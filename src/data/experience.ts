import type { Education, Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Agelid",
    role: "Développeur en alternance",
    period: "Oct. 2025 — aujourd'hui",
    location: "Gournay-en-Bray",
    details:
      "Développement du front de l'application mobile de stationnement GarezVous (Flutter) et du back-office métier du logiciel principal : cartes d'abonnement, factures, tickets, véhicules.",
    technologies: ["Flutter", "Dart", "Java", "JSP"],
    current: true,
  },
  {
    company: "Agelid",
    role: "Stage développement mobile",
    period: "Mars — Juin 2025",
    location: "Gournay-en-Bray",
    details:
      "Intégration d'une fonctionnalité de gestion du stationnement au sein d'une application mobile existante.",
    technologies: ["Flutter", "Dart", "Java"],
  },
];

export const education: Education[] = [
  {
    title: "Bachelor Concepteur développeur d’applications (en cours)",
    school: "CESI Rouen",
    year: "2024 - 2027",
  },
  {
    title:
      "Baccalauréat Général - Spécialités Mathématiques & NSI (Lycée Jacques Prévert)",
    school: "Pont-Audemer",
    year: "2024",
  },
];
