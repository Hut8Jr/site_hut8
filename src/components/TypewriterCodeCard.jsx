import { useEffect, useState, useSyncExternalStore } from "react";

const TYPEWRITER_SPEED_MS = 35;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const CODE_TOKENS = [
  { text: "const ", className: "text-[#6B0F9C]" },
  { text: "hut8 = {\n  founded: ", className: "text-[#4B5563]" },
  { text: "2014", className: "text-[#A4DE02]" },
  { text: ",\n  mission: ", className: "text-[#4B5563]" },
  { text: '"Innovate"', className: "text-[#A4DE02]" },
  { text: "\n};", className: "text-[#4B5563]" },
];

const COMPLETE_CODE = CODE_TOKENS.map(({ text }) => text).join("");

const CARD_VARIANTS = {
  overlay: "shadow-xl",
  floating: "border border-gray-100 shadow-md",
};

function subscribeToReducedMotion(callback) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function renderCode(characterCount) {
  let tokenStart = 0;

  return CODE_TOKENS.map(({ text, className }, index) => {
    const visibleText = text.slice(0, Math.max(0, characterCount - tokenStart));
    tokenStart += text.length;

    return visibleText ? (
      <span className={className} key={index}>
        {visibleText}
      </span>
    ) : null;
  });
}

export default function TypewriterCodeCard({ className = "", variant = "overlay" }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => true,
  );
  const [visibleCharacterCount, setVisibleCharacterCount] = useState(0);
  const renderedCharacterCount = prefersReducedMotion
    ? COMPLETE_CODE.length
    : visibleCharacterCount;
  const isTyping = renderedCharacterCount < COMPLETE_CODE.length;

  useEffect(() => {
    if (prefersReducedMotion || !isTyping) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setVisibleCharacterCount((currentCount) => currentCount + 1);
    }, TYPEWRITER_SPEED_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isTyping, prefersReducedMotion, visibleCharacterCount]);

  return (
    <div
      className={`rounded-xl bg-white p-3.5 sm:p-6 max-w-full overflow-hidden ${CARD_VARIANTS[variant]} ${className}`}
    >
      <div aria-hidden="true" className="mb-2 sm:mb-3 flex gap-2">
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#EF4444]"></span>
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#EAB308]"></span>
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#22C55E]"></span>
      </div>

      <div className="relative overflow-hidden">
        <pre aria-hidden="true" className="invisible text-xs sm:text-sm leading-5 whitespace-pre-wrap break-all font-mono">
          <code>{renderCode(COMPLETE_CODE.length)}</code>
        </pre>

        <pre aria-hidden="true" className="absolute inset-0 text-xs sm:text-sm leading-5 whitespace-pre-wrap break-all font-mono">
          <code>
            {renderCode(renderedCharacterCount)}
            {isTyping && (
              <span className="inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-[#6B0F9C]"></span>
            )}
          </code>
        </pre>

        <pre className="sr-only">
          <code>{COMPLETE_CODE}</code>
        </pre>
      </div>
    </div>
  );
}
