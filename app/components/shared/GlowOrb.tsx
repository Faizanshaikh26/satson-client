type GlowOrbProps = {
  position: "left" | "right"
  top?: string
  // right?: string
  // left?: string
  size?: {
    width: string
    height: string
  }
}

export default function GlowOrb({
  position,
  top = "0px",
  // right="0px",
  // left="0px",
  size = { width: "400px", height: "400px" },
}: GlowOrbProps) {
  const positionClasses =
    position === "left"
      ? "-left-98"
      : "-right-100"

  return (
    <div
      className={`pointer-events-none absolute ${positionClasses} rounded-full blur-[100px]`}
      style={{
        top,
        // right,left,
        width: size.width,
        height: size.height,
        background:
          position === "left"
            ? "radial-gradient(circle at center, rgba(122,59,255,0.45) 0%, rgba(122,59,255,0.25) 30%, rgba(122,59,255,0.12) 55%, rgba(122,59,255,0.05) 70%, rgba(122,59,255,0.0) 85%)"
            : "radial-gradient(circle at center, rgba(122,59,255,0.40) 0%, rgba(12,59,255,0.22) 35%, rgba(122,59,255,0.10) 60%, rgba(122,59,255,0.0) 85%)",
      }}
    />
  )
}
