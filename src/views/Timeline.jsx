import { YEARS, LINE_ORDER, SECTION_BREAKS, STATUS } from "../data/roster.js";
import { T, st } from "../theme/tokens.js";

const fmt = (v) => {
  if (v === null || v === undefined) return "—";
  if (v >= 1) return `$${v}M`;
  return `$${Math.round(v * 1000)}K`;
};

const phaseColors = {
  "Emergence": "#008C96",
  "Playoff push": "#378ADD",
  "Cup run 1": "#9B7FD4",
  "Cup run 2": "#9B7FD4",
  "Cup run 3 / retool": "#D85A30",
  "Reload": "#D85A30",
};

function StatusDot({ status }) {
  const s = STATUS[status];
  if (!s) return null;
  return (
    <span style={{
      display: "inline-block", width: 5, height: 5, borderRadius: "50%",
      background: status === "f" ? "transparent" : s.color,
      border: status === "f" ? `1px dashed ${T.c.t6}` : "none",
      flexShrink: 0,
    }} />
  );
}

function Tag({ type }) {
  const styles = {
    GOAT: { bg: "#008C96", fg: "#fff" },
    PP1: { bg: "rgba(239,159,39,0.15)", fg: "#EF9F27" },
    PP2: { bg: "rgba(55,138,221,0.15)", fg: "#5B8BA0" },
    PK: { bg: "rgba(155,127,212,0.15)", fg: "#9B7FD4" },
  };
  const s = styles[type] || { bg: T.c.bg5, fg: T.c.t4 };
  return (
    <span style={{
      ...st.mono(8, s.fg),
      background: s.bg,
      padding: "1px 4px",
      borderRadius: 2,
      fontWeight: 500,
      lineHeight: 1,
    }}>{type}</span>
  );
}

function PlayerRow({ player }) {
  if (player.isTbd) {
    return (
      <div style={{
        ...st.mono(11, T.c.t6),
        padding: "3px 0",
        fontStyle: "italic",
      }}>
        {player.name}
      </div>
    );
  }
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 4,
      padding: "3px 0",
    }}>
      <StatusDot status={player.status} />
      <span style={{ ...st.sans(12, T.c.t1), fontWeight: 500, flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {player.name}
      </span>
      {player.age != null && (
        <span style={{ ...st.mono(9, T.c.t6), minWidth: 16, textAlign: "right" }}>{player.age}</span>
      )}
      <span style={{ ...st.mono(11, T.c.t4), minWidth: 38, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
        {fmt(player.cost)}
      </span>
      {player.tags.map((t) => <Tag key={t} type={t} />)}
    </div>
  );
}

function CapBar({ year }) {
  const { cap, spend, dead, space } = year;
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: "4px 12px",
      marginTop: 6,
      padding: "6px 0 2px",
      borderTop: `0.5px solid ${T.c.bg5}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={st.mono(9, T.c.t6)}>CAP</span>
        <span style={st.mono(11, T.c.t2, { fontWeight: 500 })}>${cap}M</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={st.mono(9, T.c.t6)}>SPEND</span>
        <span style={st.mono(11, spend != null ? T.c.t2 : T.c.t6, { fontWeight: 500 })}>
          {spend != null ? `$${spend}M` : "TBD"}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={st.mono(9, dead > 0 ? "#b85c5c" : T.c.success)}>DEAD</span>
        <span style={st.mono(11, dead > 0 ? "#b85c5c" : T.c.success, { fontWeight: 500 })}>
          {dead > 0 ? `$${dead}M` : "$0"}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={st.mono(9, T.c.t6)}>SPACE</span>
        <span style={st.mono(11, space != null ? T.c.success : T.c.t6, { fontWeight: 500 })}>
          {space != null ? `$${space}M` : "TBD"}
        </span>
      </div>
    </div>
  );
}

function DeadCapCell({ items }) {
  if (!items || items.length === 0) {
    return <div style={st.mono(11, T.c.success)}>Clean</div>;
  }
  const total = items.reduce((s, i) => s + i.cost, 0);
  return (
    <div>
      {items.map((d, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
          <span style={st.mono(11, "#b85c5c")}>{d.name}</span>
          <span style={st.mono(11, "#b85c5c", { fontVariantNumeric: "tabular-nums" })}>{fmt(d.cost)}</span>
        </div>
      ))}
      <div style={{
        display: "flex", justifyContent: "space-between",
        padding: "4px 0 0", marginTop: 2,
        borderTop: `0.5px solid rgba(184,92,92,0.3)`,
      }}>
        <span style={st.mono(10, "#b85c5c", { fontWeight: 500 })}>TOTAL</span>
        <span style={st.mono(11, "#b85c5c", { fontWeight: 500 })}>${total.toFixed(1)}M</span>
      </div>
    </div>
  );
}

export default function Timeline() {
  const colW = 210;
  const labelW = 38;

  const cellBorder = `0.5px solid ${T.c.bg4}`;
  const cellPad = "6px 8px";

  const stickyCell = {
    position: "sticky", left: 0, zIndex: 3,
    background: T.c.bg1, borderRight: `0.5px solid ${T.c.t8}`,
    width: labelW, minWidth: labelW, maxWidth: labelW,
    textAlign: "center", verticalAlign: "top",
    padding: "6px 4px",
  };

  const yearCell = {
    width: colW, minWidth: colW, maxWidth: colW,
    verticalAlign: "top", padding: cellPad,
    borderBottom: cellBorder,
  };

  return (
    <div style={{ padding: "16px 0" }}>
      {/* Legend */}
      <div style={{
        display: "flex", gap: 14, padding: "0 16px 12px", flexWrap: "wrap",
        alignItems: "center",
      }}>
        {Object.entries(STATUS).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <StatusDot status={k} />
            <span style={st.mono(10, T.c.t5)}>{v.label}</span>
          </div>
        ))}
      </div>

      {/* Scrollable table */}
      <div style={{
        overflowX: "auto", WebkitOverflowScrolling: "touch",
        paddingBottom: 8,
      }}>
        <table style={{
          borderCollapse: "collapse",
          minWidth: labelW + colW * YEARS.length,
        }}>
          <thead>
            <tr>
              <th style={{ ...stickyCell, zIndex: 4, background: T.c.bg1, borderBottom: cellBorder }} />
              {YEARS.map((yr) => (
                <th key={yr.id} style={{ ...yearCell, borderBottom: `2px solid ${phaseColors[yr.phase] || T.c.accent}`, verticalAlign: "bottom" }}>
                  <div style={{ ...st.sans(16, T.c.t0), fontWeight: 500 }}>{yr.id}</div>
                  <div style={{
                    ...st.mono(10, phaseColors[yr.phase] || T.c.accent),
                    fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em",
                    marginTop: 2,
                  }}>{yr.phase}</div>
                  <CapBar year={yr} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LINE_ORDER.map((lineKey) => {
              const sectionLabel = SECTION_BREAKS[lineKey];
              return [
                sectionLabel && (
                  <tr key={`sep-${lineKey}`}>
                    <td style={{ ...stickyCell, borderBottom: cellBorder, padding: "4px" }}>
                      <span style={st.mono(8, T.c.t6)}></span>
                    </td>
                    {YEARS.map((yr) => (
                      <td key={yr.id} style={{ ...yearCell, background: T.c.bg2, padding: "4px 8px" }}>
                        <span style={{ ...st.mono(9, T.c.t5), fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                          {sectionLabel}
                        </span>
                      </td>
                    ))}
                  </tr>
                ),
                <tr key={lineKey}>
                  <td style={{ ...stickyCell, borderBottom: cellBorder }}>
                    <span style={st.mono(11, T.c.t4, { fontWeight: 500 })}>{lineKey}</span>
                  </td>
                  {YEARS.map((yr) => {
                    const players = yr.lines[lineKey] || [];
                    return (
                      <td key={yr.id} style={yearCell}>
                        {players.map((pl, i) => (
                          <div key={i} style={{
                            borderTop: i > 0 ? `0.5px dotted ${T.c.bg5}` : "none",
                          }}>
                            <PlayerRow player={pl} />
                          </div>
                        ))}
                      </td>
                    );
                  })}
                </tr>,
              ];
            })}

            {/* Extras row */}
            <tr>
              <td style={{ ...stickyCell, borderBottom: cellBorder }}>
                <span style={st.mono(9, T.c.t6)}>+</span>
              </td>
              {YEARS.map((yr) => (
                <td key={yr.id} style={{ ...yearCell, opacity: 0.7 }}>
                  {yr.extras.length > 0 ? yr.extras.map((pl, i) => (
                    <div key={i} style={{ borderTop: i > 0 ? `0.5px dotted ${T.c.bg5}` : "none" }}>
                      <PlayerRow player={pl} />
                    </div>
                  )) : null}
                </td>
              ))}
            </tr>

            {/* Dead cap section */}
            <tr>
              <td style={{ ...stickyCell, borderBottom: cellBorder, background: T.c.bg1 }}>
                <span style={st.mono(9, "#b85c5c", { fontWeight: 500 })}>DEAD</span>
              </td>
              {YEARS.map((yr) => (
                <td key={yr.id} style={{ ...yearCell, background: "rgba(184,92,92,0.03)" }}>
                  <DeadCapCell items={yr.deadItems} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
