const logos = [
  "acg-capsules", "amixor", "balaji-steroids-hormones", "bridgestone",
  "curega-healthcare", "dycine-pharma", "fortune-pharmaceuticals",
  "geno-pharmaceuticals", "glenmark", "godrej", "great-galleon-ventures",
  "ingenus", "knovea", "krishgen-biosystems", "l2mtech", "lindstrom",
  "liugong", "mahle", "man-industries", "panasonic-energy", "relsus",
  "samson", "srf", "symbiotec", "sympa-pharma", "tufropes",
  "vishal-laboratories", "wl",
];

export default function ProjectsClientLogoSlider() {
  const track = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-14 bg-primary">
      <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
        {track.map((name, i) => (
          <div
            key={name + i}
            className="flex items-center justify-center h-20 w-40 shrink-0 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-ambient px-4"
          >
            <img
              src={`/assets/client-logos/${name}.png`}
              alt={name}
              className="max-h-12 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}