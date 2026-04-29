import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import type { ComponentProps } from "react";
import { LandingBentoDemos } from "@/components/landing-bento-demos";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Header from "./header";

const LandingLink = ({
  className,
  href,
  children,
  ...props
}: ComponentProps<typeof Link>) => {
  return (
    <Link
      to={href}
      className={cn(
        "touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

const pillars = [
  {
    title: "Accessible by default",
    description:
      "Keyboard routes, focus, and ARIA come wired in. You decide hierarchy, rhythm, and how loud the interface should feel.",
  },
  {
    title: "Primitives in-repo",
    description:
      "The shadcn way: copy, adapt, and own the source. No mystery package standing between you and a hotfix.",
  },
  {
    title: "Docs that ship",
    description:
      "Guides and references live beside the UI they describe—fewer mismatches between what you read and what you ship.",
  },
] as const;

export const LandingPage = () => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="outline-none [--header-height:calc(--spacing(14))]"
    >
      <Header className="fixed left-0 right-0 top-0" />
      <div className="min-w-0 pb-24 md:pb-32">
        <section
          className="relative isolate overflow-hidden bg-background [--grid-line:oklch(0_0_0/0.08)] dark:[--grid-line:oklch(1_0_0/0.08)]"
          aria-labelledby="landing-hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background: `linear-gradient(
              to bottom,
              color-mix(in oklch, var(--chart-2) 14%, transparent) 0%,
              transparent 46%,
              color-mix(in oklch, var(--chart-1) 12%, transparent) 58%,
              color-mix(in oklch, var(--chart-1) 5%, var(--background)) 78%,
              var(--background) 92%,
              var(--background) 100%
            )`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-80 dark:opacity-45"
            aria-hidden="true"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.5) 86%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.5) 86%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-1/2 top-0 h-[min(400px,58vw)] w-[min(920px,130vw)] -translate-x-1/2 rounded-full blur-3xl motion-reduce:blur-none"
              style={{
                background:
                  "radial-gradient(ellipse 90% 85% at 50% 0%, oklch(0.68 0.14 278 / 0.14) 0%, oklch(0.58 0.18 264 / 0.06) 42%, transparent 68%)",
              }}
            />
            <div
              className="absolute -left-1/4 top-0 h-[min(560px,82vw)] w-[min(760px,92vw)] rounded-full blur-3xl motion-reduce:blur-none"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 40% 26%, oklch(0.72 0.11 285 / 0.22) 0%, oklch(0.58 0.21 264 / 0.18) 36%, oklch(0.52 0.14 252 / 0.09) 56%, transparent 74%)",
              }}
            />
            <div
              className="absolute -right-1/4 bottom-0 h-[min(520px,78vw)] w-[min(680px,88vw)] rounded-full blur-3xl motion-reduce:blur-none"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 58% 74%, oklch(0.92 0.12 88 / 0.14) 0%, oklch(0.8 0.17 72 / 0.2) 34%, oklch(0.72 0.12 55 / 0.1) 54%, transparent 72%)",
              }}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0 -z-10 motion-reduce:hidden"
            aria-hidden="true"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 32%, rgba(0,0,0,0.4) 52%, rgba(0,0,0,0.12) 74%, rgba(0,0,0,0.03) 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 32%, rgba(0,0,0,0.4) 52%, rgba(0,0,0,0.12) 74%, rgba(0,0,0,0.03) 88%, transparent 100%)",
            }}
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
              linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
              linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
            `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 100% 95% at 0% 0%, #000 0%, #000 20%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,0.1) 68%, transparent 88%)
            `,
                WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 100% 95% at 0% 0%, #000 0%, #000 20%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,0.1) 68%, transparent 88%)
            `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>

          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 md:gap-12 md:px-6 md:py-24 lg:py-32">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span translate="no">{siteConfig.name}</span>
            </p>

            <div className="max-w-3xl space-y-5">
              <h1
                id="landing-hero-heading"
                className="text-balance font-semibold text-4xl leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
              >
                Interfaces built on{" "}
                <span className="font-serif font-normal italic text-chart-2">
                  craft
                </span>
                , styled like you mean it.
              </h1>
              <p className="max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-foreground">
                Copy-paste primitives, tokens you control, and docs that live
                beside the components they describe.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <LandingLink
                href="/docs/installation"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "inline-flex w-full min-w-0 justify-center gap-2 sm:w-auto",
                )}
              >
                <BookOpen className="shrink-0" aria-hidden="true" />
                Read the docs
                <ArrowRight
                  className="shrink-0 opacity-60"
                  aria-hidden="true"
                />
              </LandingLink>
              <LandingLink
                href="/docs/components"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex w-full min-w-0 justify-center gap-2 sm:w-auto",
                )}
              >
                <Layers className="shrink-0" aria-hidden="true" />
                Component reference
              </LandingLink>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20"
          aria-labelledby="landing-bento-heading"
        >
          <div className="flex max-w-2xl flex-col gap-3">
            <h2
              id="landing-bento-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Live surfaces in one bento
            </h2>
            <p className="text-pretty text-muted-foreground">
              One grid of minimal, working samples—checkout patterns,
              navigation, inputs, motion, and feedback—so you can try the kit
              without loading the full showcase pages.
            </p>
          </div>
          <div className="mt-10">
            <LandingBentoDemos />
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20"
          aria-labelledby="landing-pillars-heading"
        >
          <div className="flex max-w-xl flex-col gap-2">
            <h2
              id="landing-pillars-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Why <span translate="no">{siteConfig.name}</span>
            </h2>
            <p className="text-pretty text-muted-foreground">
              Three commitments that keep UI work legible for your team and
              clear for users.
            </p>
          </div>

          <ul className="mt-10 divide-y divide-border/60">
            {pillars.map(({ title, description }, index) => (
              <li key={title} className="flex gap-6 py-7 md:gap-10 lg:gap-16">
                <span
                  className="shrink-0 pt-px font-mono text-xs tabular-nums text-muted-foreground/50 select-none"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <div className="min-w-0 grid gap-1 md:grid-cols-[1fr_1.5fr] md:gap-8">
                  <h3 className="text-base font-medium text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24"
          aria-labelledby="landing-workflow-heading"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start md:gap-16">
            <div className="space-y-4">
              <h2
                id="landing-workflow-heading"
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                From kit to screen, without losing the plot
              </h2>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Keep shared components calm and reusable. Push expressive
                layout, illustration, and motion to the pages where the story
                lives.
              </p>
              <LandingLink
                href="/docs/introduction"
                className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                See how the kit is organized
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </LandingLink>
            </div>
            <figure className="min-w-0">
              <blockquote className="border-l-2 border-chart-2/50 pl-5 font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
                {
                  "“Ship the behavior layer once. Iterate on the surface until it feels inevitable.”"
                }
              </blockquote>
              <figcaption className="mt-4 pl-5 font-mono text-xs text-muted-foreground/50">
                Working agreement for{" "}
                <span translate="no">{siteConfig.name}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
      <footer className="border-t border-border/40 py-8 text-center">
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Ark CN. All rights reserved.
        </p>
      </footer>
    </main>
  );
};
