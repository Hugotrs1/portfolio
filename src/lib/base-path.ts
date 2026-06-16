// Sur GitHub Pages le site est servi sous /Portfolio (basePath). Or next/image
// en export statique "unoptimized" n'ajoute PAS le basePath aux fichiers de
// public/. On préfixe donc manuellement les chemins d'assets via ce helper.
// En dev (npm run dev) basePath est vide → les chemins restent à la racine.
export const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

export const asset = (path: string) => `${basePath}${path}`;
