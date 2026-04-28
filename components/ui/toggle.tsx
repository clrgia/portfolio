"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "radix-ui";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@deemlol/next-icons";

import { cn } from "@/lib/utils";

function Toggle({
  className,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root>) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <TogglePrimitive.Root
      pressed={isDark}
      onPressedChange={handleToggle}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:outline border-r-0",
        className,
      )}
      {...props}
    >
      <Sun
        size={18}
        className={cn(
          "absolute transition-all duration-500 ease-in-out",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100",
        )}
      />


      <Moon
        size={18}
        className={cn(
          "absolute transition-all duration-500 ease-in-out",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </TogglePrimitive.Root>
  );
}

export { Toggle };
