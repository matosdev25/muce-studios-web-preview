"use client";

import { useEffect, useRef } from "react";

const CAL_SCRIPT_ID = "cal-embed-script";
const CAL_SCRIPT_SRC = "https://app.cal.com/embed/embed.js";
const CAL_NAMESPACE = "campanas-de-marketing";
const CAL_ELEMENT_ID = "my-cal-inline-campanas-de-marketing";

type CalCommand = ((method: string, ...args: unknown[]) => void) & {
  q?: unknown[][];
};

declare global {
  interface Window {
    Cal?: CalCommand & {
      ns?: Record<string, CalCommand>;
      loaded?: boolean;
    };
  }
}

export function CalInlineEmbed() {
  const initializedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const ensureCalQueue = () => {
      if (window.Cal) return;

      const cal = ((method: string, ...args: unknown[]) => {
        const command = [method, ...args];

        if (method === "init") {
          const namespace = args[0];

          if (typeof namespace === "string") {
            const namespacedCal = ((namespaceMethod: string, ...namespaceArgs: unknown[]) => {
              namespacedCal.q?.push([namespaceMethod, ...namespaceArgs]);
            }) as CalCommand;

            namespacedCal.q = namespacedCal.q ?? [];
            cal.ns = cal.ns ?? {};
            cal.ns[namespace] = namespacedCal;
            namespacedCal.q.push(command);
            return;
          }
        }

        cal.q?.push(command);
      }) as NonNullable<Window["Cal"]>;

      cal.q = [];
      cal.ns = {};
      window.Cal = cal;
    };

    const initializeCal = () => {
      if (cancelled || initializedRef.current || !window.Cal) return;

      initializedRef.current = true;

      window.Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });

      const namespacedCal = window.Cal.ns?.[CAL_NAMESPACE];
      if (!namespacedCal) {
        initializedRef.current = false;
        return;
      }

      namespacedCal("inline", {
        elementOrSelector: `#${CAL_ELEMENT_ID}`,
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "light",
        },
        calLink: "anthony-munoz-razqki/campanas-de-marketing",
      });

      namespacedCal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    ensureCalQueue();

    const existingScript = document.getElementById(CAL_SCRIPT_ID) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = CAL_SCRIPT_ID;
      script.src = CAL_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    initializeCal();

    return () => {
      cancelled = true;
    };
  }, []);

  return <div id={CAL_ELEMENT_ID} className="cal-inline-embed" />;
}
