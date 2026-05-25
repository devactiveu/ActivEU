import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowColor = "electric" | "sunbeam" | "coral" | "lime" | "none";

const glowMap: Record<GlowColor, string> = {
  electric: "shadow-[0_0_40px_rgba(88,118,255,0.28)]",
  sunbeam: "shadow-[0_0_40px_rgba(255,176,32,0.28)]",
  coral: "shadow-[0_0_40px_rgba(255,94,91,0.28)]",
  lime: "shadow-[0_0_40px_rgba(183,233,52,0.28)]",
  none: "",
};

const variantMap = {
  default: "bg-white/72 backdrop-blur-[18px] saturate-180 border border-white/55 shadow-[0_24px_64px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.8)] [data-theme=dark_&]:bg-[rgba(12,18,40,0.65)] [data-theme=dark_&]:border-[rgba(88,118,255,0.18)] [data-theme=dark_&]:shadow-[0_24px_64px_rgba(5,9,25,0.6),inset_0_1px_0_rgba(88,118,255,0.12)]",
  elevated: "bg-white/85 backdrop-blur-[24px] saturate-200 border border-white/70 shadow-[0_32px_80px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] [data-theme=dark_&]:bg-[rgba(12,18,40,0.80)] [data-theme=dark_&]:border-[rgba(88,118,255,0.24)] [data-theme=dark_&]:shadow-[0_32px_80px_rgba(5,9,25,0.7),inset_0_1px_0_rgba(88,118,255,0.18)]",
  inset: "bg-white/50 backdrop-blur-[12px] border border-white/40 shadow-[inset_0_2px_4px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.06)] [data-theme=dark_&]:bg-[rgba(12,18,40,0.45)] [data-theme=dark_&]:border-[rgba(88,118,255,0.12)]",
};

export function GlassCard({
  children,
  className,
  variant = "default",
  glow = "none",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantMap;
  glow?: GlowColor;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag className={cn(variantMap[variant], glowMap[glow], "rounded-[28px]", className)}>
      {children}
    </Tag>
  );
}
