import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "GarezVous",
    kind: "pro",
    description:
      "Application de stationnement de la ville de Nouméa (iOS & Android) : abonnement, gestion des véhicules et paiement en ligne, adossée à un back-office métier (cartes d'abonnement, factures, tickets).",
    role: "Front de l'application mobile (Flutter) et back-office (Java/JSP).",
    highlight:
      "Module cartographique : l'usager sélectionne sa zone de stationnement par géolocalisation et est placé automatiquement dans la bonne zone.",
    tags: ["Flutter", "Dart", "Java", "JSP", "Cartographie / Géoloc"],
    links: [
      { label: "Site", url: "https://www.garezvous.fr/" },
      { label: "App Store", url: "https://apps.apple.com/fr/app/garezvous-fr/id6742316147" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.agelid.garezvous" },
    ],
  },
  {
    title: "Projet SQL — GTA",
    kind: "cours",
    description:
      "Base de données relationnelle sur le thème de GTA : modélisation, jeux de données et requêtes.",
    tags: ["SQL", "MySQL"],
    repoUrl: "https://github.com/Hugotrs1/Projet_SQL",
  },
  {
    title: "API Valorant",
    kind: "cours",
    description:
      "API exposant les informations des agents du jeu Valorant, consommée par un front-end de consultation.",
    tags: ["PHP", "MySQL", "JavaScript"],
    repoUrl: "https://github.com/Hugotrs1/API_VALO",
  },
];
