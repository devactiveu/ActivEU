export function DarkHeroGradient({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        background: [
          "radial-gradient(circle at 20% 30%, rgba(88,118,255,0.18), transparent 35%)",
          "radial-gradient(circle at 75% 15%, rgba(233,78,119,0.16), transparent 30%)",
          "radial-gradient(circle at 50% 80%, rgba(183,233,52,0.12), transparent 28%)",
          "radial-gradient(circle at 85% 70%, rgba(255,176,32,0.14), transparent 32%)",
        ].join(", "),
      }}
    />
  );
}
