import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#hero" className="flex items-center gap-3 group">
      {/* Logo Icon - KT */}
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
        <span className="text-white font-bold text-lg font-mono">KT</span>
      </div>
      {/* Company Name */}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight">
          小西運送株式会社
        </span>
        <span className="text-[10px] text-gray-400 uppercase tracking-wider leading-tight">
          Konishi Transport
        </span>
      </div>
    </Link>
  );
}
