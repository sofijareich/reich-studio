export default function Logo({
  size = 32,
  withWordmark = true,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* SVG mark — plain img, Next/Image's optimizer rejects local SVGs by default */}
      <img
        src="/logo/reich-mark-positiv.svg"
        alt="Reich Studio"
        width={size}
        height={size}
        className="rounded-md"
      />
      {withWordmark && (
        <span className="text-sm font-semibold tracking-[0.2em] uppercase">
          Reich <span className="gold-text">Studio</span>
        </span>
      )}
    </span>
  );
}
