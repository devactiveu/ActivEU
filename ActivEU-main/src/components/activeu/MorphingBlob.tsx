import { motion, useReducedMotion } from "framer-motion";

type BlobVariant = "sunbeam" | "electric" | "coral" | "lime" | "magenta";

const gradients: Record<BlobVariant, { from: string; to: string }> = {
  sunbeam: { from: "#ffd36b", to: "#ffb020" },
  electric: { from: "#5876ff", to: "#1e40ff" },
  coral: { from: "#ff9291", to: "#ff5e5b" },
  lime: { from: "#d3f56b", to: "#9bd41d" },
  magenta: { from: "#f26aa2", to: "#e94e77" },
};

const pathSet = [
  "M45.3,-63.5C57.6,-54,65.2,-38.6,70.6,-22.3C76,-6,79.2,11.2,73.6,24.7C68.1,38.3,53.8,48.3,39.1,55.3C24.4,62.3,9.3,66.3,-6.3,65.9C-21.8,65.4,-37.7,60.4,-49.7,50.3C-61.7,40.2,-69.8,25,-71.9,8.9C-74,-7.3,-70.1,-24.4,-60.6,-37.1C-51.2,-49.8,-36.2,-58.1,-21.3,-63.1C-6.5,-68.1,8.3,-69.9,22.3,-69.3C36.3,-68.8,49.6,-65.9,45.3,-63.5Z",
  "M54.3,-69.3C67.6,-56.7,73.4,-36,74.6,-16.4C75.9,3.3,72.6,21.8,63.1,35.7C53.7,49.6,38.2,58.8,21.3,64.5C4.5,70.3,-13.6,72.5,-28.4,66.4C-43.2,60.3,-54.7,45.9,-62.2,30.2C-69.6,14.6,-73,-2.3,-70.6,-19C-68.1,-35.7,-59.8,-52.2,-46.5,-64.4C-33.3,-76.5,-15.1,-84.3,2.5,-87.4C20.2,-90.5,40.9,-82,54.3,-69.3Z",
  "M40.8,-56.6C52.1,-47.6,59.3,-33.6,64.4,-18.5C69.5,-3.5,72.4,12.7,68,27.3C63.6,41.9,51.8,54.9,37.6,62.7C23.4,70.5,6.8,73.2,-9.4,72.2C-25.6,71.1,-41.4,66.4,-53.2,56.2C-65,46.1,-72.8,30.5,-75.2,13.9C-77.5,-2.7,-74.4,-20.3,-65.6,-33.3C-56.8,-46.2,-42.2,-54.5,-28,-61.5C-13.8,-68.6,0,-74.4,12.8,-73.3C25.5,-72.2,29.5,-65.5,40.8,-56.6Z",
];

type Props = {
  variant?: BlobVariant;
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
};

let blobCounter = 0;

export function MorphingBlob({
  variant = "sunbeam",
  className = "",
  size = 400,
  duration = 12,
  delay = 0,
}: Props) {
  const reduceMotion = useReducedMotion();
  const gradient = gradients[variant];
  const id = `blob-grad-${variant}-${blobCounter++}`;

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="-100 -100 200 200"
      aria-hidden="true"
      animate={
        reduceMotion
          ? undefined
          : {
              rotate: [0, 360],
            }
      }
      transition={{ duration: duration * 3, repeat: Infinity, ease: "linear", delay }}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient.from} stopOpacity="0.9" />
          <stop offset="100%" stopColor={gradient.to} stopOpacity="0.7" />
        </linearGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      <motion.path
        fill={`url(#${id})`}
        filter={`url(#${id}-blur)`}
        initial={{ d: pathSet[0] }}
        animate={
          reduceMotion
            ? { d: pathSet[0] }
            : {
                d: [pathSet[0], pathSet[1], pathSet[2], pathSet[0]],
              }
        }
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      />
    </motion.svg>
  );
}

export function FloatingShape({
  className = "",
  children,
  duration = 6,
  delay = 0,
  amplitude = 10,
}: {
  className?: string;
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  amplitude?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, 3, -2, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SparkleStar({
  className = "",
  color = "#ffb020",
  size = 24,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      animate={
        reduceMotion
          ? undefined
          : {
              rotate: [0, 180, 360],
              scale: [1, 1.25, 1],
            }
      }
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
        fill={color}
      />
    </motion.svg>
  );
}
