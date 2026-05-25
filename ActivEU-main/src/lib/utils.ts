export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function throttleRaf<T extends (...args: Parameters<T>) => void>(fn: T): T {
  let frame: number | null = null;
  return ((...args: Parameters<T>) => {
    if (frame !== null) return;
    frame = requestAnimationFrame(() => {
      fn(...args);
      frame = null;
    });
  }) as T;
}
