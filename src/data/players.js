/**
 * Player Reference — P071 Source of Truth
 *
 * This is the authoritative reference for every player appearing in the
 * Sharks Personnel Model. Before making edits to roster.js, cross-check
 * against this file. If roster.js contradicts this file, roster.js is wrong.
 *
 * Format:
 *   key: {
 *     name, born (YYYY-MM), shoots (L/R), pos,
 *     contract: { current, through, aav, notes },
 *     role: { line, specialUnits, leadership, ceiling, floor },
 *     facts: [ ... ],
 *     notes: "..."
 *   }
 *
 * "Age at start of season X" = year X starts in October.
 * Example: Celebrini born 2006-06 → age 19 at start of 25-26, 20 at 26-27.
 *
 * Last audited: 2026-04-12
 */

export const PLAYERS = {
  // ═══════════════════════════════════════════════════════════
  // CORE FORWARDS — the window
  // ═══════════════════════════════════════════════════════════
  celebrini: {
    name: "Macklin Celebrini", born: "2006-06", shoots: "L", pos: "C",
    contract: { current: "ELC", through: "26-27", aav: 1.0, notes: "Ext eligible Jul 1, 2026. Projected $12M." },
    role: { line: "L1C", units: ["PP1"], leadership: "C", ceiling: "Franchise C", floor: "Star C" },
    tags: ["C", "PP1", "GOAT"],
    notes: "Captain. #1 pick 2024. The franchise. PP1 in every year of the model."
  },
  smith: {
    name: "Will Smith", born: "2005-03", shoots: "R", pos: "C/W",
    contract: { current: "ELC", through: "26-27", aav: 1.0, notes: "Ext eligible Jul 1, 2026. Projected $9M." },
    role: { line: "L1RW", units: ["PP1"], ceiling: "Star W", floor: "Top-6 W" },
    tags: ["PP1"],
    notes: "Plays wing alongside Celebrini. PP1 in every year."
  },
  misa: {
    name: "Michael Misa", born: "2007-02", shoots: "L", pos: "C",
    contract: { current: "ELC", through: "27-28", aav: 1.0, notes: "Projected $8M ext starting 28-29." },
    role: { line: "L3C→L2C", units: ["PP2"], ceiling: "Star C", floor: "2C" },
    tags: ["PP2"],
    notes: "#2 pick 2025. Develops L3C thru 27-28, elevates L2C at 28-29."
  },
  chernyshov: {
    name: "Igor Chernyshov", born: "2005-04", shoots: "L", pos: "LW",
    contract: { current: "ELC", through: "27-28", aav: 0.9, notes: "Projected $4M ext at 28-29." },
    role: { line: "L1LW", units: ["PP1"], ceiling: "Top-6 scoring W", floor: "Middle-6 W" },
    tags: ["PP1"],
    notes: "6'3 power forward. NOT on PK. PP1 once he hits his extension in 28-29."
  },
  eklund: {
    name: "William Eklund", born: "2002-10", shoots: "L", pos: "LW",
    contract: { current: "Bridge", through: "28-29", aav: 5.6, notes: "3yr bridge signed 2026." },
    role: { line: "L2LW", units: ["PP2"], ceiling: "2LW", floor: "Middle-6 W" },
    tags: ["PP2"],
    notes: "Stays through 26-27 on L2 LW. Gone after (assume walks or traded)."
  },
  graf: {
    name: "Collin Graf", born: "2002-09", shoots: "R", pos: "RW",
    contract: { current: "ELC last yr (25-26)", through: "25-26", aav: 0.9, notes: "Re-signing 3yr/$2.5M projected for 26-27 thru 28-29." },
    role: { line: "L1RW→L2", units: ["PK1"], ceiling: "Top-6 two-way W", floor: "3W" },
    tags: ["PK1"],
    notes: "L1 in 25-26, drops to L2 from 26-27 onward. PK1. Re-signs again 29-30+."
  },

  // ═══════════════════════════════════════════════════════════
  // VETERANS — the acquired layer
  // ═══════════════════════════════════════════════════════════
  wennberg: {
    name: "Alex Wennberg", born: "1994-09", shoots: "L", pos: "C",
    contract: { current: "Signed", through: "25-26", aav: 5.0, notes: "Ext signed Jan 2026, 3yr/$6M through 28-29." },
    role: { line: "L2C→L3C", units: ["PK1"], leadership: "A", ceiling: "2C", floor: "3C" },
    tags: ["A", "PK1"],
    notes: "Assistant captain. PK1. L2C in 26-27, L3C thereafter. Gone after 28-29 (UFA)."
  },
  sherwood: {
    name: "Kiefer Sherwood", born: "1995-03", shoots: "R", pos: "LW",
    contract: { current: "Signed", through: "25-26", aav: 1.5, notes: "Ext signed Mar 2026, 5yr/$5.75M through 30-31." },
    role: { line: "L3LW", units: ["PK2"], ceiling: "3LW", floor: "4LW" },
    tags: ["PK2"],
    notes: "Ages 30/31/32/33/34/35 across the 6 years. L3 from 28-29 onward."
  },
  toffoli: {
    name: "Tyler Toffoli", born: "1992-04", shoots: "R", pos: "RW",
    contract: { current: "Signed", through: "27-28", aav: 6.0, notes: "3yr deal. UFA after 27-28." },
    role: { line: "L3RW", units: ["PP1"], leadership: "A", ceiling: "2RW", floor: "3RW" },
    tags: ["A", "PP1"],
    notes: "Veteran scorer. PP1 for Toffoli only while on roster. Gone after 27-28."
  },
  goodrow: {
    name: "Barclay Goodrow", born: "1993-05", shoots: "L", pos: "W",
    contract: { current: "Signed", through: "26-27", aav: 3.6, notes: "2yr deal. UFA after 26-27." },
    role: { line: "L4LW", units: ["PK2"], leadership: "A", ceiling: "3W", floor: "4W" },
    tags: ["A", "PK2"],
    notes: "Cup-experienced vet. A. Gone after 26-27."
  },
  ostapchuk: {
    name: "Kasper Ostapchuk", born: "2003-09", shoots: "L", pos: "C",
    contract: { current: "ELC last yr (25-26)", through: "25-26", aav: 0.8, notes: "RFA after 25-26. Projected $1.2M-$1.5M bridge." },
    role: { line: "L4C", units: ["PK2"], ceiling: "3C", floor: "4C" },
    tags: ["PK2"],
    notes: "Young bottom-6 C. PK2 from 27-28 onward."
  },
  gaudette: {
    name: "Adam Gaudette", born: "1996-10", shoots: "R", pos: "C/W",
    contract: { current: "Signed", through: "26-27", aav: 2.0, notes: "2yr deal. UFA after 26-27." },
    role: { line: "L4RW", ceiling: "4W", floor: "depth" },
    notes: "Bottom-6 depth. Gone after 26-27."
  },
  reaves: {
    name: "Ryan Reaves", born: "1987-01", shoots: "R", pos: "RW",
    contract: { current: "Signed", through: "25-26", aav: 1.4, notes: "UFA after 25-26. Projected 1yr re-sign at $1M for 26-27." },
    role: { line: "Extra", ceiling: "4W", floor: "Press box" },
    notes: "Team-level morale support. 25-26 + 26-27 only. Gone after."
  },

  // ═══════════════════════════════════════════════════════════
  // DEFENSE
  // ═══════════════════════════════════════════════════════════
  dickinson: {
    name: "Sam Dickinson", born: "2005-06", shoots: "L", pos: "LD",
    contract: { current: "ELC", through: "27-28", aav: 0.9, notes: "Projected $8M ext at 28-29." },
    role: { line: "D2LD→D1LD", units: ["PP1"], ceiling: "Franchise D", floor: "Top-pair D" },
    tags: ["PP1"],
    notes: "D2 in 25-26, 26-27. Elevates to D1 at 27-28. PP1 from 27-28 onward (PP2 in 25-26, 26-27). 2024 CHL Defenseman of the Year."
  },
  orlov: {
    name: "Dmitry Orlov", born: "1991-07", shoots: "L", pos: "LD",
    contract: { current: "Signed", through: "26-27", aav: 6.5, notes: "2yr deal. UFA after 26-27." },
    role: { line: "D1LD", units: ["PP1"], ceiling: "Top-pair D", floor: "2LD" },
    tags: ["PP1"],
    notes: "Vet top-pair LD. Gone after 26-27. PP1 quarterback."
  },
  ferraro: {
    name: "Mario Ferraro", born: "1998-09", shoots: "L", pos: "LD",
    contract: { current: "Signed", through: "25-26", aav: 3.3, notes: "UFA after 25-26. Projected $5.5M re-sign for 26-27." },
    role: { line: "D2LD", units: ["PK1"], ceiling: "2LD", floor: "3LD" },
    tags: ["PK1"],
    notes: "Re-sign projected. PK1 anchor. D2 in 26-27+."
  },
  mukhamadullin: {
    name: "Shakir Mukhamadullin", born: "2002-01", shoots: "L", pos: "LD",
    contract: { current: "ELC last yr (25-26)", through: "25-26", aav: 1.0, notes: "RFA after 25-26. Projected bridge $1.5M." },
    role: { line: "D3LD", units: ["PK2"], ceiling: "2D", floor: "3D" },
    tags: ["PK2"],
    notes: "6'4 LD. Mentored by Vinny in 26-27. PK2."
  },
  desharnais: {
    name: "Vincent Desharnais", born: "1996-06", shoots: "R", pos: "RD",
    contract: { current: "Signed", through: "25-26", aav: 2.0, notes: "UFA after 25-26. Projected 2yr re-sign for 26-27 + 27-28 at $2M." },
    role: { line: "D3RD", ceiling: "3RD", floor: "depth" },
    notes: "Re-sign 2yr. D3 in 26-27 with Muk, stays D3 in 27-28. Gone after 27-28."
  },
  pohlkamp: {
    name: "Eric Pohlkamp", born: "2005-03", shoots: "R", pos: "RD",
    contract: { current: "NCAA (Denver)", through: "N/A", aav: null, notes: "Signs ELC after 26-27 season. Arrives 27-28 on 3yr ELC." },
    role: { line: "D2RD", units: ["PP2"], ceiling: "2D top-4", floor: "3D" },
    tags: ["PP2"],
    notes: "Right-shot RHD — rare in pool. 'Baby Orlov' comp. Arrives 27-28."
  },

  // ═══════════════════════════════════════════════════════════
  // GOALIES
  // ═══════════════════════════════════════════════════════════
  askarov: {
    name: "Yaroslav Askarov", born: "2002-07", shoots: "L", pos: "G",
    contract: { current: "Signed", through: "26-27", aav: 2.0, notes: "RFA after 26-27. Projected $5M ext." },
    role: { line: "G1", ceiling: "Franchise G", floor: "Starter" },
    notes: "Future #1. Top G prospect in game per McKeen's."
  },
  nedeljkovic: {
    name: "Alex Nedeljkovic", born: "1996-01", shoots: "L", pos: "G",
    contract: { current: "Signed", through: "25-26", aav: 2.5, notes: "Ext Mar 2026, 2yr/$3M through 27-28." },
    role: { line: "G2", ceiling: "2G", floor: "Backup" },
    notes: "Ages 29/30/31 across his years. Gone after 27-28."
  },
  ravensbergen: {
    name: "Joshua Ravensbergen", born: "2006-07", shoots: "L", pos: "G",
    contract: { current: "Unsigned (prospect)", through: "N/A", aav: null, notes: "2025 1st rd (30th). Signs ELC circa 27-28. Arrives 28-29." },
    role: { line: "G2→G1?", ceiling: "Starter", floor: "Platoon" },
    notes: "Arrives 28-29 as ELC backup. Future starter tandem with Askarov."
  },

  // ═══════════════════════════════════════════════════════════
  // GRADUATING PROSPECTS
  // ═══════════════════════════════════════════════════════════
  musty: {
    name: "Quentin Musty", born: "2005-07", shoots: "L", pos: "LW/RW",
    contract: { current: "ELC (in system)", through: "AHL dev", aav: 0.9, notes: "Arrives NHL ~28-29. Proj $3.5M post-ELC." },
    role: { line: "L3RW→L2RW", ceiling: "Top-6 scoring W", floor: "3W" },
    notes: "2023 1st rd. Lost year 24-25. AHL dev in 25-26, 26-27, 27-28. Graduates L3 RW in 28-29, elevates L2 RW in 29-30."
  },
};

export default PLAYERS;
