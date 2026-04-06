import { YEARS, LINE_ORDER, SECTION_BREAKS, SECTION_ENDS, STATUS } from "../data/roster.js";
import { T, st } from "../theme/tokens.js";

const m = (v) => {
  if (v === null || v === undefined) return "—";
  return v.toFixed(1);
};

function Dot({ status }) {
  const s = STATUS[status];
  if (!s) return null;
  return (
    <span style={{
      display:"inline-block", width:6, height:6, borderRadius:"50%",
      background: status === "f" ? "transparent" : s.color,
      border: status === "f" ? `1.5px dashed ${T.c.t6}` : "none",
      flexShrink:0, marginRight:4,
    }} />
  );
}

const TAG_STYLE = {
  GOAT: { bg:"#008C96", fg:"#fff" },
  PP1: { bg:"rgba(239,159,39,0.15)", fg:"#EF9F27" },
  PP2: { bg:"rgba(55,138,221,0.15)", fg:"#5B8BA0" },
  PK:  { bg:"rgba(155,127,212,0.15)", fg:"#9B7FD4" },
};
function Tag({ type }) {
  const s = TAG_STYLE[type] || { bg:T.c.bg5, fg:T.c.t4 };
  return <span style={{ fontFamily:T.fonts.mono, fontSize:8, fontWeight:500, color:s.fg, background:s.bg, padding:"1px 4px", borderRadius:2, marginLeft:4, lineHeight:1, whiteSpace:"nowrap" }}>{type}</span>;
}

function PlayerRow({ player }) {
  if (player.isTbd) {
    return (
      <div style={{ display:"flex", alignItems:"center", padding:"3px 0", minHeight:22 }}>
        <div style={{ flex:1, ...st.mono(10.5, T.c.t6), fontStyle:"italic" }}>{player.name}</div>
        <div style={{ ...st.mono(11, T.c.t7), width:40, textAlign:"right", fontVariantNumeric:"tabular-nums" }}>
          {player.cost ? m(player.cost) : "—"}
        </div>
      </div>
    );
  }
  return (
    <div style={{ display:"flex", alignItems:"center", padding:"3px 0", minHeight:22 }}>
      <Dot status={player.status} />
      <div style={{ flex:1, display:"flex", alignItems:"center", minWidth:0 }}>
        <span style={{ ...st.sans(12, T.c.t1), fontWeight:500, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{player.name}</span>
        {player.age != null && <span style={{ ...st.mono(9, T.c.t6), marginLeft:5, flexShrink:0 }}>{player.age}</span>}
        {player.tags.map((t) => <Tag key={t} type={t} />)}
      </div>
      <div style={{ ...st.mono(11, T.c.t3), width:40, textAlign:"right", fontVariantNumeric:"tabular-nums", fontWeight:500, flexShrink:0 }}>
        {m(player.cost)}
      </div>
    </div>
  );
}

function SectionTotal({ label, year, lineKeys }) {
  let total = 0;
  lineKeys.forEach((k) => {
    (year.lines[k] || []).forEach((pl) => { if (pl.cost) total += pl.cost; });
  });
  return (
    <div style={{ display:"flex", justifyContent:"flex-end", padding:"2px 0", borderTop:`0.5px solid ${T.c.bg4}` }}>
      <span style={{ ...st.mono(9, T.c.t5), marginRight:8 }}>{label}</span>
      <span style={{ ...st.mono(11, T.c.t3), width:40, textAlign:"right", fontVariantNumeric:"tabular-nums", fontWeight:500 }}>{m(Math.round(total*10)/10)}</span>
    </div>
  );
}

function CapBar({ year }) {
  return (
    <div style={{ marginTop:8, paddingTop:6, borderTop:`0.5px solid ${T.c.bg4}` }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
        <span style={st.mono(9, T.c.t6)}>CAP</span>
        <span style={st.mono(11, T.c.t1, { fontWeight:500 })}>{m(year.cap)}</span>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
        <span style={st.mono(9, T.c.t6)}>COMMITTED</span>
        <span style={st.mono(11, "#378ADD", { fontWeight:500 })}>{m(year.committed)}</span>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
        <span style={st.mono(9, T.c.t6)}>ESTIMATED</span>
        <span style={st.mono(11, "#9B7FD4", { fontWeight:500 })}>{m(year.estimated)}</span>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
        <span style={st.mono(9, year.dead > 0 ? "#b85c5c" : T.c.success)}>DEAD</span>
        <span style={st.mono(11, year.dead > 0 ? "#b85c5c" : T.c.success, { fontWeight:500 })}>{m(year.dead)}</span>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", paddingTop:3, borderTop:`0.5px solid ${T.c.bg4}` }}>
        <span style={st.mono(9, T.c.success)}>SPACE</span>
        <span style={st.mono(11, year.space > 10 ? T.c.success : "#EF9F27", { fontWeight:500 })}>{m(year.space)}</span>
      </div>
    </div>
  );
}

function DeadCapCell({ items }) {
  if (!items || items.length === 0) {
    return <div style={st.mono(11, T.c.success)}>Clean</div>;
  }
  return (
    <div>
      {items.map((d, i) => (
        <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"2px 0" }}>
          <span style={{ ...st.mono(10.5, "#b85c5c") }}>{d.name} <span style={{ color:"#7a4444", fontSize:9 }}>{d.reason}</span></span>
          <span style={{ ...st.mono(11, "#b85c5c"), fontVariantNumeric:"tabular-nums", width:40, textAlign:"right" }}>{m(d.cost)}</span>
        </div>
      ))}
    </div>
  );
}

const FWD_KEYS = ["L1","L2","L3","L4"];
const DEF_KEYS = ["D1","D2","D3"];
const G_KEYS   = ["G"];

export default function Timeline() {
  const colW = 220;
  const labelW = 36;
  const cellBorder = `0.5px solid ${T.c.bg4}`;
  const cellPad = "6px 8px";

  const stickyBase = {
    position:"sticky", left:0, zIndex:3, background:T.c.bg1,
    borderRight:`0.5px solid ${T.c.t8}`,
    width:labelW, minWidth:labelW, maxWidth:labelW,
    textAlign:"center", verticalAlign:"top", padding:"6px 4px",
  };
  const yearBase = {
    width:colW, minWidth:colW, maxWidth:colW,
    verticalAlign:"top", padding:cellPad, borderBottom:cellBorder,
  };

  return (
    <div style={{ padding:"16px 0" }}>
      <div style={{ display:"flex", gap:14, padding:"0 16px 12px", flexWrap:"wrap", alignItems:"center" }}>
        {Object.entries(STATUS).map(([k,v]) => (
          <div key={k} style={{ display:"flex", alignItems:"center", gap:4 }}>
            <Dot status={k} /><span style={st.mono(10, T.c.t5)}>{v.label}</span>
          </div>
        ))}
        <span style={st.mono(10, T.c.t6)}>All costs in $M</span>
      </div>

      <div style={{ overflowX:"auto", overflowY:"visible", WebkitOverflowScrolling:"touch", paddingBottom:8 }}>
        <table style={{ borderCollapse:"collapse", minWidth:labelW + colW * YEARS.length }}>
          <thead><tr>
            <th style={{ ...stickyBase, zIndex:4, borderBottom:cellBorder }} />
            {YEARS.map((yr) => (
              <th key={yr.id} style={{ ...yearBase, borderBottom:`2px solid ${yr.phaseColor}`, verticalAlign:"bottom" }}>
                <div style={{ ...st.sans(16, T.c.t0), fontWeight:500 }}>{yr.id}</div>
                <div style={{ ...st.mono(10, yr.phaseColor), fontWeight:500, textTransform:"uppercase", letterSpacing:"0.04em", marginTop:2 }}>{yr.phase}</div>
                <CapBar year={yr} />
              </th>
            ))}
          </tr></thead>
          <tbody>
            {LINE_ORDER.map((lineKey) => {
              const sectionLabel = SECTION_BREAKS[lineKey];
              const isEnd = SECTION_ENDS[lineKey];
              let subtotalKeys, subtotalLabel;
              if (lineKey === "L4") { subtotalKeys = FWD_KEYS; subtotalLabel = "FWD"; }
              if (lineKey === "D3") { subtotalKeys = DEF_KEYS; subtotalLabel = "DEF"; }
              if (lineKey === "G")  { subtotalKeys = G_KEYS;   subtotalLabel = "G"; }

              return [
                sectionLabel && (
                  <tr key={`sep-${lineKey}`}>
                    <td style={{ ...stickyBase, borderBottom:cellBorder, padding:"4px" }} />
                    {YEARS.map((yr) => (
                      <td key={yr.id} style={{ ...yearBase, background:T.c.bg2, padding:"4px 8px" }}>
                        <span style={{ ...st.mono(9, T.c.t5), fontWeight:500, textTransform:"uppercase", letterSpacing:"0.06em" }}>{sectionLabel}</span>
                      </td>
                    ))}
                  </tr>
                ),
                <tr key={lineKey}>
                  <td style={{ ...stickyBase, borderBottom:cellBorder }}>
                    <span style={st.mono(11, T.c.t4, { fontWeight:500 })}>{lineKey}</span>
                  </td>
                  {YEARS.map((yr) => {
                    const players = yr.lines[lineKey] || [];
                    return (
                      <td key={yr.id} style={yearBase}>
                        {players.map((pl, i) => (
                          <div key={i} style={{ borderTop: i > 0 ? `0.5px dotted ${T.c.bg5}` : "none" }}>
                            <PlayerRow player={pl} />
                          </div>
                        ))}
                        {isEnd && subtotalKeys && <SectionTotal label={subtotalLabel} year={yr} lineKeys={subtotalKeys} />}
                      </td>
                    );
                  })}
                </tr>,
              ];
            })}

            {/* Extras */}
            {YEARS.some((yr) => yr.extras.length > 0) && (
              <tr>
                <td style={{ ...stickyBase, borderBottom:cellBorder }}>
                  <span style={st.mono(9, T.c.t6)}>+</span>
                </td>
                {YEARS.map((yr) => (
                  <td key={yr.id} style={{ ...yearBase, opacity:0.7 }}>
                    {yr.extras.map((pl, i) => (
                      <div key={i} style={{ borderTop: i > 0 ? `0.5px dotted ${T.c.bg5}` : "none" }}>
                        <PlayerRow player={pl} />
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            )}

            {/* Dead cap */}
            <tr>
              <td style={{ ...stickyBase, borderBottom:cellBorder }}>
                <span style={st.mono(9, "#b85c5c", { fontWeight:500 })}>DEAD</span>
              </td>
              {YEARS.map((yr) => (
                <td key={yr.id} style={{ ...yearBase, background:"rgba(184,92,92,0.03)" }}>
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
