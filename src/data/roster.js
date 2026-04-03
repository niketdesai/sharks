/**
 * Sharks Personnel Model — Roster Data
 * P071 · v0.1.0-260403
 *
 * Status codes:
 *   e = ELC (entry level)
 *   x = signed deal
 *   l = expiring (last year)
 *   r = projected extension / RFA deal
 *   f = TBD / FA slot
 */

export const STATUS = {
  e: { label: "ELC", color: "#008C96" },
  x: { label: "Signed", color: "#378ADD" },
  l: { label: "Expiring", color: "#EF9F27" },
  r: { label: "Projected", color: "#9B7FD4" },
  f: { label: "TBD", color: "#555" },
};

// cost in millions
const p = (name, pos, age, cost, status, tags = []) => ({
  name, pos, age, cost, status, tags,
});
const tbd = (note) => ({ name: note, pos: "", age: null, cost: null, status: "f", tags: [], isTbd: true });

export const YEARS = [
  {
    id: "25-26",
    phase: "Emergence",
    detail: "Ahead of schedule. Goal was bottom-half exit; fighting for a playoff spot.",
    cap: 95.5,
    spend: 74.8,
    dead: 30.1,
    space: 20.7,
    lines: {
      L1: [
        p("Chernyshov", "W", 20, 0.934, "e"),
        p("Celebrini", "C", 19, 0.975, "e", ["PP1", "GOAT"]),
        p("Smith", "W", 21, 0.95, "e", ["PP1"]),
      ],
      L2: [
        p("Eklund", "W", 23, 0.863, "e", ["PP2"]),
        p("Wennberg", "C", 31, 5.0, "x", ["PK"]),
        p("Sherwood", "W", 31, 1.5, "x"),
      ],
      L3: [
        p("Toffoli", "W", 33, 6.0, "x", ["PP1"]),
        p("Misa", "C", 19, 0.975, "e", ["PP2"]),
        p("Dellandrea", "C", 25, 1.3, "x"),
      ],
      L4: [
        p("Goodrow", "W", 33, 3.64, "x", ["PK"]),
        p("Ostapchuk", "C", 22, 0.825, "e"),
        p("Gaudette", "W", 29, 2.0, "x"),
      ],
      D1: [
        p("Orlov", "D", 34, 6.5, "x"),
        p("Desharnais", "D", 29, 2.0, "x"),
      ],
      D2: [
        p("Ferraro", "D", 27, 3.25, "l"),
        p("Mukhamadullin", "D", 24, 1.0, "l"),
      ],
      D3: [
        p("Dickinson", "D", 19, 0.942, "e"),
        p("Leddy", "D", 35, 4.0, "l"),
      ],
      G: [
        p("Askarov", "G", 23, 2.0, "x"),
        p("Nedeljkovic", "G", 30, 2.5, "x"),
      ],
    },
    extras: [
      p("Graf", "W", 23, 0.942, "e"),
      p("Reaves", "W", 39, 1.35, "x"),
    ],
    deadItems: [
      { name: "Price", reason: "LTIR", cost: 10.5 },
      { name: "Couture", reason: "IR / captain", cost: 8.0 },
      { name: "Vlasic", reason: "Buyout yr 1", cost: 4.67 },
      { name: "Klingberg", reason: "Roster dead weight", cost: 4.0 },
      { name: "Karlsson", reason: "Retained", cost: 1.5 },
      { name: "Hertl", reason: "Retained", cost: 1.39 },
    ],
  },
  {
    id: "26-27",
    phase: "Playoff push",
    detail: "WC1/WC2 target. $46M in space, defense rebuilt, dead cap cleared.",
    cap: 104,
    spend: null, // TBD — depends on FA signings
    dead: 4.1,
    space: null,
    lines: {
      L1: [
        p("Chernyshov", "W", 21, 0.934, "e"),
        p("Celebrini", "C", 20, 0.975, "l", ["PP1", "GOAT"]),
        p("Smith", "W", 22, 0.95, "l", ["PP1"]),
      ],
      L2: [
        tbd("W — via Eklund trade / FA"),
        p("Misa", "C", 20, 0.975, "e", ["PP2"]),
        p("Sherwood", "W", 32, 5.75, "x"),
      ],
      L3: [
        p("Toffoli", "W", 34, 6.0, "x", ["PP1"]),
        p("Wennberg", "C", 32, 6.0, "x", ["PK"]),
        p("Dellandrea", "C", 26, 1.625, "x"),
      ],
      L4: [
        p("Goodrow", "W", 34, 3.64, "l", ["PK"]),
        p("Ostapchuk", "C", 23, 1.2, "r"),
        p("Gaudette", "W", 30, 2.0, "l"),
      ],
      D1: [
        p("Orlov", "D", 35, 6.5, "l"),
        tbd("D — via Eklund trade"),
      ],
      D2: [
        p("Dickinson", "D", 20, 0.942, "e"),
        tbd("D — FA target"),
      ],
      D3: [
        p("Ferraro", "D", 28, 5.5, "r"),
        p("Mukhamadullin", "D", 25, 1.5, "r"),
      ],
      G: [
        p("Askarov", "G", 24, 2.0, "x"),
        p("Nedeljkovic", "G", 31, 3.0, "x"),
      ],
    },
    extras: [
      p("Reaves", "W", 40, 1.0, "r"),
      p("Graf", "W", 24, 1.5, "r"),
    ],
    deadItems: [
      { name: "Karlsson", reason: "Retained", cost: 1.5 },
      { name: "Hertl", reason: "Retained", cost: 1.39 },
      { name: "Vlasic", reason: "Buyout yr 2", cost: 1.17 },
    ],
  },
  {
    id: "27-28",
    phase: "Cup run 1",
    detail: "Window opens. Celebrini and Smith extensions kick in. Dickinson on ELC value.",
    cap: 113.5,
    spend: null,
    dead: 1.4,
    space: null,
    lines: {
      L1: [
        p("Chernyshov", "W", 22, 0.934, "l"),
        p("Celebrini", "C", 21, 12.0, "r", ["PP1", "GOAT"]),
        p("Smith", "W", 23, 9.0, "r", ["PP1"]),
      ],
      L2: [
        tbd("W — TBD"),
        p("Misa", "C", 21, 0.975, "l", ["PP2"]),
        p("Sherwood", "W", 33, 5.75, "x"),
      ],
      L3: [
        p("Toffoli", "W", 35, 6.0, "l"),
        p("Wennberg", "C", 33, 6.0, "x", ["PK"]),
        p("Dellandrea", "C", 27, 1.625, "l"),
      ],
      L4: [
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
      ],
      D1: [
        p("Dickinson", "D", 21, 0.942, "l"),
        tbd("D — partner TBD"),
      ],
      D2: [
        tbd("D — TBD"),
        p("Ferraro", "D", 29, 5.5, "r"),
      ],
      D3: [
        p("Mukhamadullin", "D", 26, 2.0, "r"),
        tbd("D — TBD"),
      ],
      G: [
        p("Askarov", "G", 25, 5.0, "r"),
        p("Nedeljkovic", "G", 32, 3.0, "l"),
      ],
    },
    extras: [],
    deadItems: [
      { name: "Hertl", reason: "Retained", cost: 1.39 },
    ],
  },
  {
    id: "28-29",
    phase: "Cup run 2",
    detail: "Peak window. All young core locked in. Misa and Dickinson extensions kick in.",
    cap: 123,
    spend: null,
    dead: 1.4,
    space: null,
    lines: {
      L1: [
        p("Chernyshov", "W", 23, 4.0, "r"),
        p("Celebrini", "C", 22, 12.0, "r", ["PP1", "GOAT"]),
        p("Smith", "W", 24, 9.0, "r", ["PP1"]),
      ],
      L2: [
        tbd("W — TBD"),
        p("Misa", "C", 22, 8.0, "r", ["PP2"]),
        p("Sherwood", "W", 34, 5.75, "x"),
      ],
      L3: [
        tbd("W — TBD"),
        p("Wennberg", "C", 34, 6.0, "l"),
        tbd("W — TBD"),
      ],
      L4: [
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
      ],
      D1: [
        p("Dickinson", "D", 22, 8.0, "r"),
        tbd("D — partner TBD"),
      ],
      D2: [
        tbd("D — TBD"),
        p("Ferraro", "D", 30, 5.5, "r"),
      ],
      D3: [
        p("Mukhamadullin", "D", 27, 3.0, "r"),
        tbd("D — TBD"),
      ],
      G: [
        p("Askarov", "G", 26, 5.0, "r"),
        tbd("G2 — Ravensbergen?"),
      ],
    },
    extras: [],
    deadItems: [
      { name: "Hertl", reason: "Retained (last yr)", cost: 1.39 },
    ],
  },
  {
    id: "29-30",
    phase: "Cup run 3 / retool",
    detail: "Sustain or retool. Core ages 19-25. Sherwood expiring. Dead cap finally clean.",
    cap: 130,
    spend: null,
    dead: 0,
    space: null,
    lines: {
      L1: [
        p("Chernyshov", "W", 24, 4.0, "r"),
        p("Celebrini", "C", 23, 12.0, "r", ["GOAT"]),
        p("Smith", "W", 25, 9.0, "r"),
      ],
      L2: [
        tbd("W — TBD"),
        p("Misa", "C", 23, 8.0, "r"),
        p("Sherwood", "W", 35, 5.75, "l"),
      ],
      L3: [
        tbd("Full line TBD"),
        tbd("Wennberg gone (age 35)"),
        tbd(""),
      ],
      L4: [
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
      ],
      D1: [
        p("Dickinson", "D", 23, 8.0, "r"),
        tbd("D — partner TBD"),
      ],
      D2: [
        tbd("D — TBD"),
        p("Ferraro", "D", 31, 5.5, "l"),
      ],
      D3: [
        tbd("D — TBD"),
        tbd("D — TBD"),
      ],
      G: [
        p("Askarov", "G", 27, 5.0, "r"),
        tbd("G2 — TBD"),
      ],
    },
    extras: [],
    deadItems: [],
  },
  {
    id: "30-31",
    phase: "Reload",
    detail: "Post-window retool if needed. Core still young enough to reload, not rebuild.",
    cap: 135,
    spend: null,
    dead: 0,
    space: null,
    lines: {
      L1: [
        p("Chernyshov", "W", 25, 4.0, "r"),
        p("Celebrini", "C", 24, 12.0, "r", ["GOAT"]),
        p("Smith", "W", 26, 9.0, "r"),
      ],
      L2: [
        tbd("W — TBD"),
        p("Misa", "C", 24, 8.0, "r"),
        tbd("Sherwood gone (age 36)"),
      ],
      L3: [
        tbd("Full line TBD"),
        tbd(""),
        tbd(""),
      ],
      L4: [
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
        tbd("Depth — TBD"),
      ],
      D1: [
        p("Dickinson", "D", 24, 8.0, "r"),
        tbd("D — partner TBD"),
      ],
      D2: [
        tbd("D — TBD"),
        tbd("Ferraro gone (age 33)"),
      ],
      D3: [
        tbd("D — TBD"),
        tbd("D — TBD"),
      ],
      G: [
        p("Askarov", "G", 28, 5.0, "r"),
        tbd("G2 — TBD"),
      ],
    },
    extras: [],
    deadItems: [],
  },
];

export const LINE_ORDER = ["L1", "L2", "L3", "L4", "D1", "D2", "D3", "G"];
export const LINE_LABELS = {
  L1: "L1", L2: "L2", L3: "L3", L4: "L4",
  D1: "D1", D2: "D2", D3: "D3", G: "G",
};
export const SECTION_BREAKS = { D1: "Defense", G: "Goalies" };

export const CAP_PROJECTIONS = {
  "25-26": { ceiling: 95.5, floor: 70.6 },
  "26-27": { ceiling: 104, floor: 76.9 },
  "27-28": { ceiling: 113.5, floor: 83.9 },
  "28-29": { ceiling: 123, floor: 91 },
  "29-30": { ceiling: 130, floor: 96 },
  "30-31": { ceiling: 135, floor: 100 },
};
