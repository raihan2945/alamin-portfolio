"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy, Send } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-fg"
    >
      {copied ? <Check className="size-5 text-accent-ink" /> : <Copy className="size-5" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

const fieldClass =
  "w-full rounded-2xl border border-line bg-bg/60 px-4 py-3.5 text-[15px] text-fg placeholder:text-muted/70 outline-none transition focus:border-accent-ink focus:bg-bg";

// No backend needed: the form opens the visitor's mail app with the message pre-filled.
export function ContactForm({ email }: { email: string }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project inquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid content-center gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">Name</span>
          <input name="name" required autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
        </label>
        <label className="grid gap-1.5">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="font-mono text-xs uppercase tracking-wider text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, timeline and budget…"
          className={`${fieldClass} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-medium text-on-accent transition hover:brightness-105"
      >
        Send message
        <Send className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
