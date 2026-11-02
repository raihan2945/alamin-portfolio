"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { ArrowUpRight, Close, Menu, Moon, Sun } from "./icons";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="grid size-10 place-items-center rounded-full border border-line bg-bg/60 text-fg backdrop-blur-md transition hover:border-line-strong hover:bg-card"
    >
      <Sun className="size-[18px] light:hidden" />
      <Moon className="hidden size-[18px] light:block" />
    </button>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled && !open ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full bg-fg font-serif text-lg italic text-bg transition group-hover:rotate-[-8deg]">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">{profile.name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-line bg-bg/60 p-1 backdrop-blur-md md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm transition ${
                active === link.href ? "bg-fg text-bg" : "text-muted hover:text-fg"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-on-accent transition hover:brightness-105 md:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-full border border-line bg-bg/60 backdrop-blur-md md:hidden"
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 bg-bg/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col px-4 pt-8 pb-10">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`border-b border-line transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="font-serif text-4xl italic">{link.label}</span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-medium text-on-accent"
          >
            Start a project
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
