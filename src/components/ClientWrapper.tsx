"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ClientThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div className={theme}>{children}</div>;
}
