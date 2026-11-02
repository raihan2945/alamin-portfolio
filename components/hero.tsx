import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { profile, roles, socials } from "@/lib/data";
import { ArrowDown, ArrowUpRight, Download, MapPin, socialIcons } from "./icons";
import { RoleRotator } from "./role-rotator";
import { delay } from "./section";

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-none">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(closest-side,var(--glow-a),transparent)] blur-2xl" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line-strong bg-card shadow-2xl shadow-black/20">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            preload
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 352px"
            placeholder="blur"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,var(--glow-a),transparent_55%),radial-gradient(circle_at_75%_85%,var(--glow-b),transparent_55%)]">
            <div className="bg-grid absolute inset-0" />
            <span className="relative font-serif text-[9rem] leading-none italic text-fg/90 sm:text-[11rem]">
              {profile.initials}
            </span>
            <span className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              Photo coming soon
            </span>
          </div>
        )}

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-white backdrop-blur-md">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{profile.name}</p>
            <p className="truncate text-xs text-white/60">{profile.title}</p>
          </div>
          {profile.available && (
            <span className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px]">
              <span className="animate-pulse-ring size-1.5 rounded-full bg-green-400" />
              Open to work
            </span>
          )}
        </div>
      </div>

      <FloatingChip className="-top-3 -left-2 sm:-left-8">
        <span className="text-accent-ink">{"{ }"}</span> Node.js
      </FloatingChip>
      <FloatingChip className="top-1/3 -right-2 sm:-right-10" style={{ animationDelay: "-2s" }}>
        <span className="text-accent-ink">▲</span> Next.js
      </FloatingChip>
      <FloatingChip className="bottom-24 -left-3 sm:-left-12" style={{ animationDelay: "-4s" }}>
        <span className="text-accent-ink">✦</span> AI / LLMs
      </FloatingChip>
    </div>
  );
}

function FloatingChip({
  className,
  style,
  children,
}: {
  className: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      style={style}
      className={`animate-float absolute flex items-center gap-2 rounded-full border border-line-strong bg-bg-elev/90 px-3.5 py-2 font-mono text-xs shadow-lg shadow-black/10 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-[var(--glow-b)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-48 size-[30rem] rounded-full bg-[var(--glow-a)] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div>
          <p
            data-reveal
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            {profile.title}
          </p>

          <h1
            data-reveal
            style={delay(80)}
            className="text-[clamp(3.25rem,11vw,7rem)] leading-[0.92] font-semibold tracking-[-0.04em]"
          >
            <span className="block text-muted/80">Hi, I&apos;m</span>
            <span className="block">
              MD. <span className="font-serif font-normal italic tracking-[-0.02em]">Al Amin</span>
              <span className="text-accent-ink">.</span>
            </span>
          </h1>

          <p data-reveal style={delay(160)} className="mt-8 min-h-[4rem] text-2xl leading-snug tracking-tight sm:min-h-0 sm:text-3xl">
            I build <RoleRotator roles={roles} />
          </p>

          <p data-reveal style={delay(220)} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div data-reveal style={delay(280)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-on-accent transition hover:brightness-105"
            >
              View my work
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-7 py-4 font-medium transition hover:bg-card"
            >
              Get in touch
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 font-medium text-muted transition hover:text-fg"
              >
                <Download className="size-4" />
                Resume
              </a>
            )}
          </div>

          <div data-reveal style={delay(340)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-fg"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
            <span className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-4" />
              {profile.location}
            </span>
          </div>
        </div>

        <div data-reveal style={delay(200)}>
          <Portrait />
        </div>
      </div>

      <a
        href="#about"
        className="relative mx-auto mt-20 hidden w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition hover:text-fg lg:flex"
      >
        <ArrowDown className="size-4 animate-bounce" />
        Scroll
      </a>
    </section>
  );
}
