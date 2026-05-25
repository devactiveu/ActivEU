import { FadeIn } from "./motion-primitives";

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "center" | "left";
}) {
  return (
    <FadeIn>
      <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
        <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] md:text-5xl">
          {title}
        </h2>
        <p className={`mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {body}
        </p>
      </div>
    </FadeIn>
  );
}
