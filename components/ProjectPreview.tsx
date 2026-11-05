"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  label: string;
  image?: string;
};

const palettes = [
  { base: "from-[#d9eadc] to-[#f7f2e7]", accent: "bg-[#173f2b]", accentSoft: "bg-[#173f2b]/45", accentFaint: "bg-[#173f2b]/20", soft: "bg-[#f5ad16]", softHalf: "bg-[#f5ad16]/50", softFaint: "bg-[#f5ad16]/20" },
  { base: "from-[#e2eef2] to-[#f7f2e7]", accent: "bg-[#315e71]", accentSoft: "bg-[#315e71]/45", accentFaint: "bg-[#315e71]/20", soft: "bg-[#f5ad16]", softHalf: "bg-[#f5ad16]/50", softFaint: "bg-[#f5ad16]/20" },
  { base: "from-[#f2e5dc] to-[#f7f2e7]", accent: "bg-[#874d3b]", accentSoft: "bg-[#874d3b]/45", accentFaint: "bg-[#874d3b]/20", soft: "bg-[#e6ad58]", softHalf: "bg-[#e6ad58]/50", softFaint: "bg-[#e6ad58]/20" },
];

export default function ProjectPreview({ title, label, image }: Props) {
  const [imageFailed, setImageFailed] = useState(false);
  const palette = palettes[title.length % palettes.length];
  const kind = label.toLowerCase();

  if (image && !imageFailed) {
    return (
      <Image
        src={image}
        alt={`${title} preview`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        loading="lazy"
        onError={() => setImageFailed(true)}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${palette.base} p-4 sm:p-5`}>
      <div aria-hidden="true" className="absolute -right-10 -top-14 h-44 w-44 rounded-full border border-[#173f2b]/10" />
      <div aria-hidden="true" className={`absolute -bottom-16 -left-10 h-40 w-40 rounded-full ${palette.softFaint} blur-2xl`} />

      <div className="relative mx-auto flex h-full max-w-[500px] flex-col overflow-hidden rounded-xl border border-white/80 bg-white/90 shadow-[0_16px_40px_-20px_rgba(23,63,43,.35)] transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-[#173f2b]/10 px-3">
          <i className="h-1.5 w-1.5 rounded-full bg-[#e99b86]" />
          <i className="h-1.5 w-1.5 rounded-full bg-[#e7c56d]" />
          <i className="h-1.5 w-1.5 rounded-full bg-[#85b89a]" />
          <span className="ml-2 h-1.5 w-1/3 rounded-full bg-[#173f2b]/10" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[2.4rem_1fr]">
          <div className={`flex flex-col items-center gap-3 py-3 ${palette.accent}`}>
            <span className={`grid h-5 w-5 place-items-center rounded-md ${palette.soft} text-[8px] font-black text-[#173f2b]`}>{title.slice(0, 1)}</span>
            <i className="h-1.5 w-4 rounded-full bg-white/50" />
            <i className="h-1.5 w-4 rounded-full bg-white/25" />
            <i className="h-1.5 w-4 rounded-full bg-white/25" />
          </div>

          <div className="flex min-w-0 flex-col gap-2 p-3 sm:gap-3 sm:p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-[10px] font-bold text-[#173f2b] sm:text-xs">{label}</span>
              <span className={`h-4 w-10 shrink-0 rounded-full ${palette.soft}/80 sm:h-5 sm:w-14`} />
            </div>

            {kind.includes("dashboard") || kind.includes("pharmacy") || kind.includes("finance") || kind.includes("point of sale") ? (
              <>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="rounded-lg border border-[#173f2b]/5 bg-[#f7f2e7]/80 p-1.5 sm:p-2">
                      <i className="block h-1 w-1/2 rounded bg-[#173f2b]/20" />
                      <i className={`mt-2 block h-2 w-3/4 rounded ${item === 1 ? palette.softHalf : palette.accentSoft} sm:h-3`} />
                    </div>
                  ))}
                </div>
                <div className="flex min-h-0 flex-1 items-end gap-1 rounded-lg bg-[#f7f2e7]/80 px-2 pt-2">
                  {[32, 54, 42, 75, 58, 88, 65, 98, 70, 82, 61, 93].map((height, index) => (
                    <i key={index} className={`flex-1 rounded-t-sm ${index > 8 ? palette.accent : palette.accentSoft}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </>
            ) : kind.includes("ticket") ? (
              <div className="flex min-h-0 flex-1 items-center justify-center">
                <div className="flex w-[85%] overflow-hidden rounded-xl border border-dashed border-[#173f2b]/20 bg-[#f7f2e7] shadow-sm">
                  <div className={`grid w-1/3 place-items-center ${palette.accent} p-2 text-center text-[8px] font-bold uppercase tracking-wider text-white sm:text-[10px]`}>Travel<br />pass</div>
                  <div className="flex flex-1 flex-col justify-center gap-2 p-3">
                    <i className={`h-2 w-2/3 rounded ${palette.accent}/70`} />
                    <i className="h-1.5 w-1/2 rounded bg-[#173f2b]/15" />
                    <i className={`h-1.5 w-3/4 rounded ${palette.softHalf}`} />
                  </div>
                </div>
              </div>
            ) : kind.includes("map") || kind.includes("visualisation") ? (
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg bg-[#eaf0e8]">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(#173f2b12 1px, transparent 1px), linear-gradient(90deg, #173f2b12 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <path d="M37 9 61 14 71 29 90 26 104 43 94 58 105 74 82 90 62 81 49 67 34 71 23 54 28 37 17 23Z" fill="#173f2b" fillOpacity=".15" stroke="#173f2b" strokeOpacity=".35" />
                  {[["47", "35"], ["63", "47"], ["79", "39"], ["54", "60"], ["88", "65"], ["36", "51"]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="3.5" fill={index % 2 ? "#f5ad16" : "#173f2b"} />)}
                </svg>
              </div>
            ) : kind.includes("website") || kind.includes("church") || kind.includes("podcast") || kind.includes("cultural") ? (
              <div className={`relative flex min-h-0 flex-1 flex-col justify-end overflow-hidden rounded-lg ${palette.accent} p-3 sm:p-4`}>
                <div aria-hidden="true" className={`absolute right-4 top-3 h-16 w-16 rounded-full ${palette.soft}/80 blur-xl sm:h-24 sm:w-24`} />
                <span className="relative font-mono text-[8px] uppercase tracking-[.2em] text-white/70">A place to explore</span>
                <span className="relative mt-1 max-w-[85%] text-sm font-black leading-tight text-white sm:text-xl">{title}</span>
                <span className={`relative mt-3 h-1 w-12 rounded-full ${palette.soft}`} />
              </div>
            ) : (
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_.7fr] gap-2">
                <div className={`flex flex-col justify-end rounded-lg ${palette.accent} p-3`}>
                  <i className="h-1.5 w-1/2 rounded bg-white/50" />
                  <i className="mt-2 h-3 w-4/5 rounded bg-white/90 sm:h-5" />
                  <i className={`mt-3 h-4 w-12 rounded-full ${palette.soft} sm:h-5`} />
                </div>
                <div className="flex flex-col gap-2 rounded-lg bg-[#f7f2e7] p-2">
                  <i className={`h-1/2 rounded-md ${palette.softHalf}`} />
                  <i className={`h-1/2 rounded-md ${palette.accentFaint}`} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-[#173f2b]/60 shadow-sm sm:bottom-3 sm:right-3">
        Preview mockup
      </span>
    </div>
  );
}
