"use client";

import { useEffect, useState } from "react";

export function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-block">
      <span key={index} className="animate-word-in inline-block font-serif italic text-accent-ink">
        {roles[index]}
      </span>
      <span className="sr-only">{roles.join(", ")}</span>
    </span>
  );
}
