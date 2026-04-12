/**
 * Sharks Personnel Model — Roster Data
 * P071 · v0.4.0-260407
 *
 * All costs in $M, rounded to 1 decimal.
 *
 * Status: e=ELC, x=signed, lr=expiring RFA, lu=expiring UFA, r=projected, f=TBD
 */

export const STATUS = {
  e:  { label: "ELC",         color: "#008C96" },
  x:  { label: "Signed",      color: "#378ADD" },
  lr: { label: "Expiring RFA", color: "#EF9F27" },
  lu: { label: "Expiring UFA", color: "#D85A30" },
  r:  { label: "Projected",   color: "#9B7FD4" },
  f:  { label: "TBD",         color: "#555" },
};

const p = (name, pos, age, cost, status, tags = []) => ({
  name, pos, age, cost, status, tags,
});
const tbd = (note, cost = null) => ({
  name: note, pos: "", age: null, cost, status: "f", tags: [], isTbd: true,
});

export const YEARS = [
  // ────────────────────────── 25-26 ──────────────────────────
  {
    id: "25-26", phase: "Emergence", phaseColor: "#008C96",
    detail: "Ahead of schedule. Fighting for a playoff spot.",
    cap: 95.5, dead: 30.1,
    lines: {
      L1: [ p("Graf","W",23,0.9,"lr",["PK"]),               // ELC last yr; RFA. Re-signing.
            p("Celebrini","C",19,1.0,"e",["PP1","GOAT"]),    // ELC yr2/3 thru 26-27
            p("Smith","W",21,1.0,"e",["PP1"]) ],              // ELC yr2/3 thru 26-27
      L2: [ p("Eklund","W",23,0.9,"lr",["PP2"]),             // ELC last yr; RFA. Trading before bridge.
            p("Wennberg","C",31,5.0,"x",["PK"]),              // $5M yr1/2; ext $6M kicks in 26-27
            p("Sherwood","W",31,1.5,"x") ],                    // $1.5M; ext $5.75M kicks in 26-27
      L3: [ p("Toffoli","W",33,6.0,"x",["PP1"]),             // $6M yr1/3 thru 27-28
            p("Misa","C",19,1.0,"e",["PP2"]),                  // ELC yr1/3 thru 27-28
            p("Chernyshov","W",20,0.9,"e") ],                  // ELC yr2/3 thru 27-28
      L4: [ p("Goodrow","W",33,3.6,"x",["PK"]),              // $3.6M yr1/2 thru 26-27
            p("Ostapchuk","C",22,0.8,"lr"),                    // ELC last yr; RFA
            p("Gaudette","W",29,2.0,"x") ],                    // $2M yr1/2 thru 26-27
      D1: [ p("Orlov","D",34,6.5,"x"),                       // $6.5M yr1/2 thru 26-27
            p("Desharnais","D",29,2.0,"lu") ],                 // $2M last yr; UFA
      D2: [ p("Dickinson","D",19,0.9,"e"),                    // ELC yr1/3 thru 27-28
            p("Ferraro","D",27,3.3,"lu") ],                    // $3.3M last yr; UFA
      D3: [ p("Mukhamadullin","D",24,1.0,"lr"),               // $1M last yr; RFA
            p("Leddy","D",35,4.0,"lu") ],                      // $4M last yr; UFA
      G:  [ p("Askarov","G",23,2.0,"x"),                      // $2M yr1/2 thru 26-27
            p("Nedeljkovic","G",30,2.5,"x") ],                 // $2.5M; ext kicks in 26-27
    },
    extras: [
      p("Dellandrea","C",25,1.3,"x"),  // Depth. Likely gone after this yr.
      p("Reaves","W",39,1.4,"lu"),     // $1.4M last yr; UFA
    ],
    deadItems: [
      { name:"Price", reason:"LTIR", cost:10.5 },
      { name:"Couture", reason:"IR", cost:8.0 },
      { name:"Vlasic", reason:"Buyout", cost:4.7 },
      { name:"Klingberg", reason:"Dead weight", cost:4.0 },
      { name:"Karlsson", reason:"Retained", cost:1.5 },
      { name:"Hertl", reason:"Retained", cost:1.4 },
    ],
  },
  // ────────────────────────── 26-27 ──────────────────────────
  {
    id: "26-27", phase: "Playoff push", phaseColor: "#378ADD",
    detail: "WC1/WC2 target. Defense rebuilt.",
    cap: 104.0, dead: 4.1,
    lines: {
      L1: [ p("Chernyshov","W",21,0.9,"e"),
            p("Celebrini","C",20,1.0,"lr",["C","PP1","GOAT"]),
            p("Smith","W",22,1.0,"lr",["PP1"]) ],
      L2: [ p("Eklund","W",23,5.6,"x",["PP2"]),
            p("Misa","C",20,1.0,"e",["PP2"]),
            p("Graf","W",24,2.5,"x",["PK"]) ],
      L3: [ p("Sherwood","W",32,5.8,"x"),
            p("Wennberg","C",32,6.0,"x",["A","PK"]),
            p("Toffoli","W",34,6.0,"x",["A","PP1"]) ],
      L4: [ p("Goodrow","W",34,3.6,"lu",["A","PK"]),
            p("Ostapchuk","C",23,1.2,"r"),
            p("Gaudette","W",30,2.0,"lu") ],
      D1: [ p("Orlov","D",35,6.5,"lu"),
            tbd("RD — FA target",5.5) ],
      D2: [ p("Dickinson","D",20,0.9,"e",["PP2"]),
            p("Mukhamadullin","D",25,1.5,"r",["PK2"]) ],
      D3: [ p("Ferraro","D",28,5.5,"r",["PK1"]),
            tbd("RD — depth",2.0) ],
      G:  [ p("Askarov","G",24,2.0,"lr"),
            p("Nedeljkovic","G",31,3.0,"x") ],
    },
    extras: [
      p("Reaves","W",40,1.0,"r"),
    ],
    deadItems: [
      { name:"Karlsson", reason:"Retained", cost:1.5 },
      { name:"Hertl", reason:"Retained", cost:1.4 },
      { name:"Vlasic", reason:"Buyout yr 2", cost:1.2 },
    ],
  },
  // ────────────────────────── 27-28 ──────────────────────────
  {
    id: "27-28", phase: "Cup run 1", phaseColor: "#9B7FD4",
    detail: "Window opens. Celebrini + Smith extensions kick in. Pohlkamp arrives.",
    cap: 113.5, dead: 1.4,
    lines: {
      L1: [ p("Chernyshov","W",22,0.9,"lr"),
            p("Celebrini","C",21,12.0,"r",["C","PP1","GOAT"]),
            p("Smith","W",23,9.0,"r",["PP1"]) ],
      L2: [ tbd("LW — TBD",5.0),
            p("Misa","C",21,1.0,"lr",["PP2"]),
            p("Graf","W",25,2.5,"x",["PK"]) ],
      L3: [ p("Sherwood","W",33,5.8,"x"),
            p("Wennberg","C",33,6.0,"x",["A","PK"]),
            p("Toffoli","W",35,6.0,"lu",["A","PP1"]) ],
      L4: [ tbd("LW — depth",1.5),
            p("Ostapchuk","C",24,1.5,"x"),
            tbd("RW — depth",1.0) ],
      D1: [ tbd("LD — top pair",6.5),
            tbd("RD — top pair",6.0) ],
      D2: [ p("Dickinson","D",21,0.9,"lr",["PP2"]),
            p("Pohlkamp","D",23,1.0,"e") ],
      D3: [ p("Ferraro","D",29,5.5,"r",["PK1"]),
            p("Mukhamadullin","D",26,2.0,"r",["PK2"]) ],
      G:  [ p("Askarov","G",25,5.0,"r"),
            p("Nedeljkovic","G",32,3.0,"lu") ],
    },
    extras: [
      p("Reaves","W",41,1.0,"lu"),
    ],
    deadItems: [ { name:"Hertl", reason:"Retained", cost:1.4 } ],
  },
  // ────────────────────────── 28-29 ──────────────────────────
  {
    id: "28-29", phase: "Cup run 2", phaseColor: "#9B7FD4",
    detail: "Peak window. Dickinson D1. Misa + Chernyshov extensions kick in.",
    cap: 123.0, dead: 1.4,
    lines: {
      L1: [ p("Chernyshov","W",23,4.0,"r"),                  // Ext yr1. Graduates to L1.
            p("Celebrini","C",22,12.0,"r",["PP1","GOAT"]),
            p("Smith","W",24,9.0,"r",["PP1"]) ],
      L2: [ p("Graf","W",26,2.5,"lu",["PK"]),                // Re-signed last yr; UFA after
            p("Misa","C",22,8.0,"r",["PP2"]),                  // Ext yr1
            p("Sherwood","W",34,5.8,"x") ],                    // Ext yr3/5
      L3: [ tbd("W — TBD",4.0),
            p("Wennberg","C",34,6.0,"lu",["PK"]),                     // Ext last yr; UFA
            tbd("W — TBD",2.0) ],
      L4: [ tbd("Depth",1.5), tbd("Depth",1.0), tbd("Depth",1.0) ],
      D1: [ p("Dickinson","D",22,8.0,"r",["PP2"]),                   // Ext yr1. Elevated to D1.
            tbd("D — partner",6.0) ],
      D2: [ tbd("D — TBD",5.0),
            p("Ferraro","D",30,5.5,"r") ],
      D3: [ p("Mukhamadullin","D",27,3.0,"r"),
            tbd("D — TBD",3.0) ],
      G:  [ p("Askarov","G",26,5.0,"r"),
            tbd("G2 — Ravensbergen?",1.5) ],
    },
    extras: [],
    deadItems: [ { name:"Hertl", reason:"Retained (last yr)", cost:1.4 } ],
  },
  // ────────────────────────── 29-30 ──────────────────────────
  {
    id: "29-30", phase: "Cup run 3 / retool", phaseColor: "#D85A30",
    detail: "Sustain or retool. Dead cap clean.",
    cap: 130.0, dead: 0,
    lines: {
      L1: [ p("Chernyshov","W",24,4.0,"r"),
            p("Celebrini","C",23,12.0,"r",["PP1","GOAT"]),
            p("Smith","W",25,9.0,"r",["PP1"]) ],
      L2: [ p("Graf","W",27,4.0,"r",["PK"]),                 // Re-signed again (proj)
            p("Misa","C",23,8.0,"r",["PP2"]),
            p("Sherwood","W",35,5.8,"x") ],                    // Ext yr4/5
      L3: [ tbd("W — TBD",4.0), tbd("C — TBD",4.0), tbd("W — TBD",2.0) ],
      L4: [ tbd("Depth",1.5), tbd("Depth",1.0), tbd("Depth",1.0) ],
      D1: [ p("Dickinson","D",23,8.0,"r",["PP2"]),
            tbd("D — partner",6.0) ],
      D2: [ tbd("D — TBD",5.0),
            p("Ferraro","D",31,5.5,"lu") ],                    // Re-signed last yr
      D3: [ tbd("D — TBD",3.0), tbd("D — TBD",3.0) ],
      G:  [ p("Askarov","G",27,5.0,"r"),
            tbd("G2 — TBD",1.5) ],
    },
    extras: [],
    deadItems: [],
  },
  // ────────────────────────── 30-31 ──────────────────────────
  {
    id: "30-31", phase: "Reload", phaseColor: "#D85A30",
    detail: "Post-window. Core still young enough to reload.",
    cap: 135.0, dead: 0,
    lines: {
      L1: [ p("Chernyshov","W",25,4.0,"r"),
            p("Celebrini","C",24,12.0,"r",["PP1","GOAT"]),
            p("Smith","W",26,9.0,"r",["PP1"]) ],
      L2: [ p("Graf","W",28,4.0,"r",["PK"]),                 // Re-signed (proj)
            p("Misa","C",24,8.0,"r",["PP2"]),
            p("Sherwood","W",36,5.8,"lu") ],                   // Ext yr5/5 last yr; UFA
      L3: [ tbd("W — TBD",4.0), tbd("C — TBD",4.0), tbd("W — TBD",2.0) ],
      L4: [ tbd("Depth",1.5), tbd("Depth",1.0), tbd("Depth",1.0) ],
      D1: [ p("Dickinson","D",24,8.0,"r",["PP2"]),
            tbd("D — partner",6.0) ],
      D2: [ tbd("D — TBD",5.0), tbd("D — TBD",4.0) ],
      D3: [ tbd("D — TBD",3.0), tbd("D — TBD",3.0) ],
      G:  [ p("Askarov","G",28,5.0,"r"),
            tbd("G2 — TBD",1.5) ],
    },
    extras: [],
    deadItems: [],
  },
];

// Compute spend totals
YEARS.forEach((yr) => {
  let committed = 0, estimated = 0;
  [...Object.values(yr.lines).flat(), ...yr.extras].forEach((pl) => {
    if (pl.isTbd) { if (pl.cost) estimated += pl.cost; }
    else committed += pl.cost || 0;
  });
  yr.committed = Math.round(committed * 10) / 10;
  yr.estimated = Math.round(estimated * 10) / 10;
  yr.spend = Math.round((committed + estimated) * 10) / 10;
  yr.space = Math.round((yr.cap - yr.spend - yr.dead) * 10) / 10;
});

export const LINE_ORDER = ["L1","L2","L3","L4","D1","D2","D3","G"];
export const SECTION_BREAKS = { L1:"Forwards", D1:"Defense", G:"Goalies" };
export const SECTION_ENDS = { L4:true, D3:true, G:true };
