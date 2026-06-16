import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--card)]/80 text-slate-600 backdrop-blur-sm">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>&copy; 2025 Hugo Troussel — Tous droits réservés.</p>
        <p className="text-xs text-slate-500">
          Portfolio construit avec Next.js, TypeScript et Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
