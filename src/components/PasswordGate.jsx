import { useState, useEffect, useRef } from "react";
import { PROJECT } from "../config.js";

/**
 * NND Project PasswordGate
 *
 * CUSTOMIZATION POINTS:
 * 1. Success animation: Edit the <style> keyframes and the phase-based JSX
 *    below to create a project-themed launch sequence.
 * 2. Failure animation: The shake is universal; add themed visual feedback
 *    (color flash, glitch, etc.) in the error state.
 * 3. Background: The idle state background can be customized (particles,
 *    gradient, pattern) to match the project theme.
 *
 * The structure is: idle → correct → phase 1 (rumble) → phase 2 (launch)
 * → phase 3 (transition) → phase 4 (white out) → onAuth()
 */

export default function PasswordGate({ onAuth }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [phase, setPhase] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input on mount (after a brief delay for animation)
    const t = setTimeout(() => inputRef.current?.focus(), 400);
    return () => clearTimeout(t);
  }, []);

  const check = () => {
    if (pw.toLowerCase().trim() === PROJECT.passcode.toLowerCase()) {
      setError(false);
      setLaunching(true);
      setPhase(1);
      // --- TIMING: Customize these for your project ---
      setTimeout(() => setPhase(2), 800);    // Rumble → Launch
      setTimeout(() => setPhase(3), 1800);   // Launch → Stars/transition
      setTimeout(() => setPhase(4), 2800);   // Stars → White out
      setTimeout(() => onAuth(), 3500);       // Hand off to App
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") check();
    if (error) setError(false);
  };

  const accent = PROJECT.accent;

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#050508",
        color: "#f0ede5",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes shakeX {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        /* === SUCCESS ANIMATION KEYFRAMES ===
         * CUSTOMIZE THESE for your project theme.
         * Examples:
         *   Space: rocket launch, star stretch, nebula fade
         *   Betting: slot spin, coin cascade, jackpot flash
         *   Restaurant: door swing, warm light flood, table set
         */
        @keyframes launchUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          60% { transform: translateY(-40vh) scale(0.8); opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0.4); opacity: 0; }
        }
        @keyframes fadeWhite {
          0% { opacity: 0; }
          60% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      {/* === SUCCESS OVERLAY ===
       * This div covers the screen during the launch sequence.
       * Customize the background for your project theme.
       */}
      {launching && phase >= 4 && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#0a0a0a",
            zIndex: 100,
            animation: "fadeWhite 1s ease forwards",
          }}
        />
      )}

      {/* Main gate container */}
      <div
        style={{
          width: "100%",
          maxWidth: 320,
          padding: "0 24px",
          textAlign: "center",
          animation: launching
            ? "launchUp 2s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : shake
              ? "shakeX 0.4s ease"
              : "fadeIn 0.6s ease",
        }}
      >
        {/* Project code */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: accent + "66",
            marginBottom: 32,
          }}
        >
          {PROJECT.code}
        </div>

        {/* Input + button (hidden during launch) */}
        {!launching && (
          <>
            <div style={{ marginBottom: 16 }}>
              <input
                ref={inputRef}
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Access code"
                autoComplete="off"
                autoCapitalize="off"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "#0d0d0d",
                  border: `1px solid ${error ? "#b85c5c" : "#1f1f1f"}`,
                  borderRadius: 6,
                  color: "#f0ede5",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 16, // MUST be 16px+ to prevent iOS zoom
                  letterSpacing: "0.1em",
                  outline: "none",
                  transition: "border-color 0.2s",
                  textAlign: "center",
                  WebkitAppearance: "none",
                }}
              />
              {error && (
                <div
                  style={{
                    marginTop: 8,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "#b85c5c",
                  }}
                >
                  Incorrect access code
                </div>
              )}
            </div>

            <button
              onClick={check}
              style={{
                width: "100%",
                padding: "14px 0",
                background: accent + "15",
                border: `1px solid ${accent}33`,
                borderRadius: 6,
                color: accent,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.05em",
                transition: "background 0.2s",
              }}
            >
              Enter
            </button>
          </>
        )}

        {/* Launch indicator */}
        {launching && (
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: accent,
              opacity: phase >= 2 ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          >
            Initializing...
          </div>
        )}

        {/* Confidential line */}
        <div
          style={{
            marginTop: 32,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            color: "#2a2a2a",
            letterSpacing: "0.1em",
          }}
        >
          CONFIDENTIAL · {PROJECT.entity}
        </div>
      </div>
    </div>
  );
}
