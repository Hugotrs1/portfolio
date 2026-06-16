'use client';

import { useEffect, useMemo, useState } from "react";

import { initEmailJs, sendContactEmail } from "@/lib/emailjs";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initEmailJs();
  }, []);

  const isDisabled = useMemo(() => status === "loading", [status]);

  const handleChange = (key: keyof FormState) => (value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const trimmed = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      message: formState.message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed.email)) {
      setError("Adresse email invalide.");
      return;
    }

    setStatus("loading");

    try {
      await sendContactEmail(trimmed);
      setStatus("success");
      setFormState(initialState);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Impossible d'envoyer le message pour le moment. Réessaie plus tard."
      );
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setError(null);
      }, 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[color:var(--foreground)]">
          Nom
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={formState.name}
            onChange={(event) => handleChange("name")(event.target.value)}
            className="w-full rounded-xl border border-(--border) bg-(--card-muted) px-3 py-2 text-sm text-foreground shadow-inner outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/30"
            placeholder="Votre nom"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--foreground)]">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={formState.email}
            onChange={(event) => handleChange("email")(event.target.value)}
            className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--card-muted)] px-3 py-2 text-sm text-[color:var(--foreground)] shadow-inner outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/30"
            placeholder="votre@email.com"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-[color:var(--foreground)]">
        Message
        <textarea
          name="message"
          required
          rows={4}
          value={formState.message}
          onChange={(event) => handleChange("message")(event.target.value)}
          className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--card-muted)] px-3 py-2 text-sm text-[color:var(--foreground)] shadow-inner outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/30"
          placeholder="Décrivez votre besoin..."
        />
      </label>
      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={isDisabled}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-soft))] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] disabled:translate-y-0 disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-[2px] border-white/60 border-t-white" />
              Envoi...
            </>
          ) : (
            "Envoyer"
          )}
        </button>
        <p className="text-xs text-[color:var(--foreground)]/70" aria-live="polite" role="status">
          Réponse sous 24h max.
        </p>
      </div>
      {error ? (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-200 shadow-inner">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-100 shadow-inner">
          Merci ! Ton message a bien été envoyé.
        </p>
      ) : null}
      {status === "error" && !error ? (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-200 shadow-inner">
          Une erreur est survenue. Réessaie dans un instant.
        </p>
      ) : null}
    </form>
  );
}
