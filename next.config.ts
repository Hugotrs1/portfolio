import type { NextConfig } from "next";

// Nom du repo GitHub → sert de basePath sur GitHub Pages
// (https://hugotrs1.github.io/Portfolio/). Sensible à la casse : doit
// correspondre exactement au nom du repo "Portfolio".
const repo = "Portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Export 100% statique (HTML/CSS/JS) → compatible GitHub Pages.
  output: "export",
  // En prod (build sur GitHub Actions) on préfixe les chemins par /hugo-portfolio.
  // En dev (npm run dev) on reste à la racine pour le confort.
  basePath: isProd ? `/${repo}` : "",
  // GitHub Pages n'a pas l'optimiseur d'images de Next → on le désactive.
  images: { unoptimized: true },
  // Génère des dossiers /chemin/index.html (URLs plus robustes sur Pages).
  trailingSlash: true,
};

export default nextConfig;
