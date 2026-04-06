/**
 * Sharks Personnel Model — Roster Data
 * P071 · v0.2.0-260406
 *
 * All costs in $M, rounded to 1 decimal.
 * Status: e=ELC, x=signed, l=expiring, r=projected ext, f=TBD
 */

export const STATUS = {
  e: { label: "ELC", color: "#008C96" },
  x: { label: "Signed", color: "#378ADD" },
  l: { label: "Expiring", color: "#EF9F27" },
  r: { label: "Projected", color: "#9B7FD4" },
  f: { label: "TBD", color: "#555" },
};

const p = (name, pos, age, cost, status, tags = []) => ({
  name, pos, age, cost, status, tags,
});
const tbd = (note, cost = null) => ({
  name: note, pos: "", age: null, cost, status: "f", tags: [], isTbd: true,
});

export const YEARS = [
  {
    id: "25-26", phase: "Emergence", phaseColor: "#008C96",
    detail: "Ahead of schedule. Fighting for a playoff spot.",
    cap: 95.5, dead: 30.1,
    lines: {
      L1: [ p("Chernyshov","W",20,0.9,"e"), p("Celebrini","C",19,1.0,"e",["PP1","GOAT"]), p("Smith","W",21,1.0,"e",["PP1"]) ],
      L2: [ p("Eklund","W",23,0.9,"e",["PP2"]), p("Wennberg","C",31,5.0,"x",["PK"]), p("Sherwood","W",31,1.5,"x") ],
      L3: [ p("Toffoli","W",33,6.0,"x",["PP1"]), p("Misa","C",19,1.0,"e",["PP2"]), p("Dellandrea","C",25,1.3,"x") ],
      L4: [ p("Goodrow","W",33,3.6,"x",["PK"]), p("Ostapchuk","C",22,0.8,"e"), p("Gaudette","W",29,2.0,"x") ],
      D1: [ p("Orlov","D",34,6.5,"x"), p("Desharnais","D",29,2.0,"x") ],
      D2: [ p("Ferraro","D",27,3.3,"l"), p("Mukhamadullin","D",24,1.0,"l") ],
      D3: [ p("Dickinson","D",19,0.9,"e"), p("Leddy","D",35,4.0,"l") ],
      G:  [ p("Askarov","G",23,2.0,"x"), p("Nedeljkovic","G",30,2.5,"x") ],
    },
    extras: [ p("Graf","W",23,0.9,"e"), p("Reaves","W",39,1.4,"x") ],
    deadItems: [
      { name:"Price", reason:"LTIR", cost:10.5 }, { name:"Couture", reason:"IR", cost:8.0 },
      { name:"Vlasic", reason:"Buyout", cost:4.7 }, { name:"Klingberg", reason:"Dead weight", cost:4.0 },
      { name:"Karlsson", reason:"Retained", cost:1.5 }, { name:"Hertl", reason:"Retained", cost:1.4 },
    ],
  },
  {
    id: "26-27", phase: "Playoff push", phaseColor: "#378ADD",
    detail: "WC1/WC2 target. Defense rebuilt.",
    cap: 104.0, dead: 4.1,
    lines: {
      L1: [ p("Chernyshov","W",21,0.9,"e"), p("Celebrini","C",20,1.0,"l",["PP1","GOAT"]), p("Smith","W",22,1.0,"l",["PP1"]) ],
      L2: [ tbd("W — via trade/FA",5.0), p("Misa","C",20,1.0,"e",["PP2"]), p("Sherwood","W",32,5.8,"x") ],
      L3: [ p("Toffoli","W",34,6.0,"x",["PP1"]), p("Wennberg","C",32,6.0,"x",["PK"]), p("Dellandrea","C",26,1.6,"x") ],
      L4: [ p("Goodrow","W",34,3.6,"l",["PK"]), p("Ostapchuk","C",23,1.2,"r"), p("Gaudette","W",30,2.0,"l") ],
      D1: [ p("Orlov","D",35,6.5,"l"), tbd("D — via Eklund trade",5.5) ],
      D2: [ p("Dickinson","D",20,0.9,"e"), tbd("D — FA target",5.0) ],
      D3: [ p("Ferraro","D",28,5.5,"r"), p("Mukhamadullin","D",25,1.5,"r") ],
      G:  [ p("Askarov","G",24,2.0,"x"), p("Nedeljkovic","G",31,3.0,"x") ],
    },
    extras: [ p("Reaves","W",40,1.0,"r"), p("Graf","W",24,1.5,"r") ],
    deadItems: [
      { name:"Karlsson", reason:"Retained", cost:1.5 }, { name:"Hertl", reason:"Retained", cost:1.4 },
      { name:"Vlasic", reason:"Buyout yr 2", cost:1.2 },
    ],
  },
  {
    id: "27-28", phase: "Cup run 1", phaseColor: "#9B7FD4",
    detail: "Window opens. Celebrini + Smith extensions kick in.",
    cap: 113.5, dead: 1.4,
    lines: {
      L1: [ p("Chernyshov","W",22,0.9,"l"), p("Celebrini","C",21,12.0,"r",["PP1","GOAT"]), p("Smith","W",23,9.0,"r",["PP1"]) ],
      L2: [ tbd("W — TBD",5.0), p("Misa","C",21,1.0,"l",["PP2"]), p("Sherwood","W",33,5.8,"x") ],
      L3: [ p("Toffoli","W",35,6.0,"l"), p("Wennberg","C",33,6.0,"x",["PK"]), p("Dellandrea","C",27,1.6,"l") ],
      L4: [ tbd("Depth",1.5), tbd("Depth",1.0), tbd("Depth",1.0) ],
      D1: [ p("Dickinson","D",21,0.9,"l"), tbd("D — partner",6.0) ],
      D2: [ tbd("D — TBD",5.0), p("Ferraro","D",29,5.5,"r") ],
      D3: [ p("Mukhamadullin","D",26,2.0,"r"), tbd("D — TBD",3.0) ],
      G:  [ p("Askarov","G",25,5.0,"r"), p("Nedeljkovic","G",32,3.0,"l") ],
    },
    extras: [],
    deadItems: [ { name:"Hertl", reason:"Retained", cost:1.4 } ],
  },
  {
    id: "28-29", phase: "Cup run 2", phaseColor: "#9B7FD4",
    detail: "Peak window. Misa + Dickinson extensions kick in.",
    cap: 123.0, dead: 1.4,
    lines: {
      L1: [ p("Chernyshov","W",23,4.0,"r"), p("Celebrini","C",22,12.0,"r",["PP1","GOAT"]), p("Smith","W",24,9.0,"r",["PP1"]) ],
      L2: [ tbd("W — TBD",5.0), p("Misa","C",22,8.0,"r",["PP2"]), p("Sherwood","W",34,5.8,"x") ],
      L3: [ tbd("W — TBD",4.0), p("Wennberg","C",34,6.0,"l"), tbd("W — TBD",2.0) ],
      L4: [ tbd("Depth",1.5), tbd("Depth",1.0), tbd("Depth",1.0) ],
      D1: [ p("Dickinson","D",22,8.0,"r"), tbd("D — partner",6.0) ],
      D2: [ tbd("D — TBD",5.0), p("Ferraro","D",30,5.5,"r") ],
      D3: [ p("Mukhamadullin","D",27,3.0,"r"), tbd("D — TBD",3.0) ],
      G:  [ p("Askarov","G",26,5.0,"r"), tbd("G2 — Ravensbergen?",1.5) ],
    },
    extras: [],
    deadItems: [ { name:"Hertl", reason:"Retained (last yr)", cost:1.4 } ],
  },
  {
    id: "29-30", phase: "Cup run 3 / retool", phaseColor: "#D85A30",
    detail: "Sustain or retool. Dead cap clean.",
    cap: 130.0, dead: 0,
    lines: {
      L1: [ p("Chernyshov","W",24,4.0,"r"), p("Celebrini","C",23,12.0,"r",["GOAT"]), p("Smith","W",25,9.0,"r") ],
      L2: [ tbd("W — TBD",5.0), p("Misa","C",23,8.0,"r"), p("Sherwood","W",35,5.8,"l") ],
      L3: [ tbd("W — TBD",4.0), tbd("C — TBD",4.0), tbd("W — TBD",2.0) ],
      L4: [ tbd("Depth",1.5), tbd("Depth",1.0), tbd("Depth",1.0) ],
      D1: [ p("Dickinson","D",23,8.0,"r"), tbd("D — partner",6.0) ],
      D2: [ tbd("D — TBD",5.0), p("Ferraro","D",31,5.5,"l") ],
      D3: [ tbd("D — TBD",3.0), tbd("D — TBD",3.0) ],
      G:  [ p("Askarov","G",27,5.0,"r"), tbd("G2 — TBD",1.5) ],
    },
    extras: [],
    deadItems: [],
  },
  {
    id: "30-31", phase: "Reload", phaseColor: "#D85A30",
    detail: "Post-window. Core still young enough to reload.",
    cap: 135.0, dead: 0,
    lines: {
      L1: [ p("Chernyshov","W",25,4.0,"r"), p("Celebrini","C",24,12.0,"r",["GOAT"]), p("Smith","W",26,9.0,"r") ],
      L2: [ tbd("W — TBD",5.0), p("Misa","C",24,8.0,"r"), tbd("W — TBD",5.0) ],
      L3: [ tbd("W — TBD",4.0), tbd("C — TBD",4.0), tbd("W — TBD",2.0) ],
      L4: [ tbd("Depth",1.5), tbd("Depth",1.0), tbd("Depth",1.0) ],
      D1: [ p("Dickinson","D",24,8.0,"r"), tbd("D — partner",6.0) ],
      D2: [ tbd("D — TBD",5.0), tbd("D — TBD",4.0) ],
      D3: [ tbd("D — TBD",3.0), tbd("D — TBD",3.0) ],
      G:  [ p("Askarov","G",28,5.0,"r"), tbd("G2 — TBD",1.5) ],
    },
    extras: [],
    deadItems: [],
  },
];

YEARS.forEach((yr) => {
  let committed = 0, estimated = 0, tbdCount = 0;
  [...Object.values(yr.lines).flat(), ...yr.extras].forEach((pl) => {
    if (pl.isTbd) { tbdCount++; if (pl.cost) estimated += pl.cost; }
    else committed += pl.cost || 0;
  });
  yr.committed = Math.round(committed * 10) / 10;
  yr.estimated = Math.round(estimated * 10) / 10;
  yr.spend = Math.round((committed + estimated) * 10) / 10;
  yr.space = Math.round((yr.cap - yr.spend - yr.dead) * 10) / 10;
  yr.tbdCount = tbdCount;
});

export const LINE_ORDER = ["L1","L2","L3","L4","D1","D2","D3","G"];
export const SECTION_BREAKS = { L1:"Forwards", D1:"Defense", G:"Goalies" };
export const SECTION_ENDS = { L4:true, D3:true, G:true };
