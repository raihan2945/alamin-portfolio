import Image, { type StaticImageData } from "next/image";
import { experience, profile, projects, services, socials, stack, stats } from "@/lib/data";
import { ContactForm, CopyEmail } from "./contact-widgets";
import { ArrowUpRight, GitHub, Mail, MapPin, serviceIcons, socialIcons } from "./icons";
import { delay, SectionHeading, Tag } from "./section";

const container = "mx-auto max-w-6xl px-4 sm:px-6";

export function StackMarquee() {
  const items = [...stack, ...stack];
  return (
    <div
      aria-label="Tech stack"
      className="relative overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
    >
      <ul className="animate-marquee flex w-max items-center gap-10 pr-10">
        {items.map((tech, i) => (
          <li
            key={i}
            aria-hidden={i >= stack.length}
            className="flex items-center gap-10 text-lg whitespace-nowrap text-muted sm:text-xl"
          >
            <span className="font-medium tracking-tight">{tech}</span>
            <span className="text-accent-ink">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className={`${container} py-24 sm:py-32`}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p data-reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-accent-ink">01</span>
            <span className="h-px w-8 bg-line-strong" />
            About
          </p>
          <h2
            data-reveal
            style={delay(80)}
            className="font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl"
          >
            Turning ideas into <em className="text-gradient">fast, intelligent</em> products people love to use.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
          <p data-reveal style={delay(120)}>
            I&apos;m <span className="text-fg">{profile.name}</span>, a full-stack developer working across the
            JavaScript and Python ecosystems. I build backends with <span className="text-fg">Node.js</span> and{" "}
            <span className="text-fg">Python</span>, and craft interfaces with <span className="text-fg">React</span>{" "}
            and <span className="text-fg">Next.js</span>.
          </p>
          <p data-reveal style={delay(180)}>
            Lately I&apos;ve been focused on <span className="text-fg">AI engineering</span> — integrating large
            language models, building retrieval-augmented systems and agents, and turning raw data into features that
            genuinely help users. I care about clean architecture, performance and the small details that make a
            product feel great.
          </p>

          <dl data-reveal style={delay(240)} className="grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col bg-bg p-4 sm:p-6">
                <dt className="text-xs leading-snug sm:text-sm">{s.label}</dt>
                <dd className="order-first mb-2 font-serif text-4xl text-fg sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className={`${container} py-24 sm:py-32`}>
      <SectionHeading
        index="02"
        label="Services"
        aside="End-to-end delivery — I can own a feature from the schema and the model to the final interface."
      >
        What I do <span className="font-serif font-normal italic text-muted">best</span>
      </SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = serviceIcons[service.icon];
          return (
            <article
              key={service.title}
              data-reveal
              style={delay(i * 80)}
              className="spotlight group flex flex-col rounded-3xl border border-line bg-card p-6 transition-colors hover:border-line-strong sm:p-8"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-line bg-bg text-accent-ink transition group-hover:bg-accent group-hover:text-on-accent">
                  <Icon className="size-6" />
                </span>
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 pt-2">
                {service.tools.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectVisual({
  title,
  hue,
  large,
  image,
  live,
}: {
  title: string;
  hue: number;
  large?: boolean;
  image?: StaticImageData;
  live?: string;
}) {
  const host = live ? new URL(live).hostname.replace(/^www\./, "") : null;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line ${large ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}`}
      style={{
        background: `radial-gradient(circle at 25% 20%, hsl(${hue} 90% 60% / 0.45), transparent 55%), radial-gradient(circle at 85% 90%, hsl(${hue + 50} 85% 55% / 0.35), transparent 55%), var(--bg)`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-x-[10%] top-[16%] bottom-0 flex flex-col overflow-hidden rounded-t-xl border border-b-0 border-line-strong bg-bg-elev/80 shadow-2xl backdrop-blur transition-[top] duration-500 group-hover:top-[11%]">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-line px-3 py-2.5">
          <span className="size-2 rounded-full bg-red-400/70" />
          <span className="size-2 rounded-full bg-yellow-400/70" />
          <span className="size-2 rounded-full bg-green-400/70" />
          {host ? (
            <span className="ml-3 truncate rounded-full bg-line px-2.5 py-0.5 font-mono text-[10px] text-muted">
              {host}
            </span>
          ) : (
            <span className="ml-3 h-2 w-24 rounded-full bg-line-strong" />
          )}
        </div>
        {image ? (
          <div className="relative flex-1">
            <Image
              src={image}
              alt={`Screenshot of the ${title} homepage`}
              fill
              placeholder="blur"
              sizes={large ? "(min-width: 1024px) 520px, (min-width: 768px) 80vw, 85vw" : "(min-width: 768px) 40vw, 85vw"}
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="flex gap-4 p-4">
            <div className="hidden w-1/4 space-y-2 sm:block">
              <div className="h-2 rounded-full bg-line-strong" />
              <div className="h-2 w-3/4 rounded-full bg-line" />
              <div className="h-2 w-2/3 rounded-full bg-line" />
            </div>
            <div className="flex-1 space-y-3">
              <p className="font-serif text-2xl italic sm:text-3xl" style={{ color: `hsl(${hue} 80% 65%)` }}>
                {title}
              </p>
              <div className="h-2 w-5/6 rounded-full bg-line-strong" />
              <div className="h-2 w-2/3 rounded-full bg-line" />
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-10 rounded-lg bg-line" />
                <div className="h-10 rounded-lg" style={{ background: `hsl(${hue} 80% 60% / 0.3)` }} />
                <div className="h-10 rounded-lg bg-line" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className={`${container} py-24 sm:py-32`}>
      <SectionHeading
        index="03"
        label="Selected work"
        aside="Live e-commerce stores built for businesses in Bangladesh."
      >
        Things I&apos;ve <span className="font-serif font-normal italic text-muted">built</span>
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            data-reveal
            style={delay((i % 2) * 100)}
            className={`spotlight group flex flex-col gap-6 rounded-3xl border border-line bg-card p-3 transition-colors hover:border-line-strong sm:p-4 ${
              p.featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-8" : ""
            }`}
          >
            <ProjectVisual title={p.title} hue={p.hue} large={p.featured} image={p.image} live={p.live} />
            <div className="flex flex-1 flex-col px-2 pb-3 sm:px-3 lg:py-4">
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-ink">{p.kind}</span>
                {p.featured && (
                  <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-on-accent">
                    Featured
                  </span>
                )}
              </div>
              <h3 className={`font-semibold tracking-tight ${p.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {(p.live || p.repo) && (
                <div className="mt-auto flex gap-2 pt-6">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
                    >
                      Live site <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium transition hover:bg-bg"
                    >
                      <GitHub className="size-4" /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className={`${container} py-24 sm:py-32`}>
      <SectionHeading index="04" label="Experience">
        Where I&apos;ve <span className="font-serif font-normal italic text-muted">worked</span>
      </SectionHeading>

      <ol className="border-b border-line">
        {experience.map((job, i) => (
          <li
            key={job.role + job.period}
            data-reveal
            style={delay(i * 80)}
            className="group grid gap-3 border-t border-line py-8 transition-colors sm:py-10 md:grid-cols-[200px_1fr_auto] md:gap-10"
          >
            <p className="font-mono text-sm text-muted">{job.period}</p>
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {job.role}{" "}
                <span className="font-serif font-normal italic text-muted">at {job.company}</span>
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{job.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-[180px] md:justify-end md:self-start">
              {job.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={`${container} py-24 sm:py-32`}>
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] border border-line bg-card p-6 sm:p-10 lg:p-14"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-[var(--glow-a)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-[var(--glow-b)] blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="text-accent-ink">05</span>
              <span className="h-px w-8 bg-line-strong" />
              Contact
            </p>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="font-serif font-normal italic text-accent-ink">intelligent</span> together.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Have a project, an AI idea or a role in mind? I usually reply within a day.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex min-w-0 flex-1 items-center gap-3 rounded-full border border-line-strong bg-bg/60 py-2 pr-5 pl-2 transition hover:border-accent-ink"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-on-accent">
                  <Mail className="size-5" />
                </span>
                <span className="truncate font-medium sm:text-lg">{profile.email}</span>
                <ArrowUpRight className="ml-auto size-5 shrink-0 text-muted transition group-hover:text-fg" />
              </a>
              <CopyEmail email={profile.email} />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-10">
              <span className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="size-4" />
                {profile.location}
              </span>
              <div className="flex gap-2">
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
            </div>
          </div>

          <ContactForm email={profile.email} />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between`}>
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-fg font-serif italic text-bg">
            {profile.initials}
          </span>
          <p className="text-sm text-muted">© 2026 {profile.name}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <p>Built with Next.js &amp; Tailwind CSS</p>
          <a href="#top" className="inline-flex items-center gap-1 transition hover:text-fg">
            Back to top <ArrowUpRight className="size-4 -rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  );
}
