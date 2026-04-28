"use client";

import * as React from "react";

function Timezone() {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const update = () => {
      setText(`[${formatter.format(new Date())}]`);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-sm text-muted-foreground tabular-nums">{text}</span>
  );
}

export { Timezone };
