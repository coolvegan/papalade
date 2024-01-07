import { Lagergegenstand } from "./Lagergegenstand";

export const Zeugs: Lagergegenstand[] = [
{
    id : 1,
    name : "Melonen Marmelade",
    beschreibung: "Frische Fruchtmarmelade",
    mengenbezeichner:"Gramm",
    lagerort: "A1",
    lagerzeitpunktcode: "12.23",
    lagerortmengencode: "500 A1",
    lagerortId: 1,
    menge: 500,
    lagerzeitpunkt: new Date()
  },
  {
    id : 2,
    name : "Quitten Marmelade",
    beschreibung: "Leicht verderblich",
    mengenbezeichner:"Gramm",
    lagerort: "A1",
    lagerzeitpunktcode: "12.23",
    lagerortmengencode: "750 A1",
    lagerortId: 1,
    menge: 750,
    lagerzeitpunkt: new Date("2021/02/01")
  },

  {
    id : 3,
    name : "Ananas Fruchtstücke",
    beschreibung: "",
    mengenbezeichner: "Gramm",
    lagerort: "A3",
    lagerzeitpunktcode: "12.23",
    lagerortmengencode: "1000 A3",
    lagerortId: 1,
    menge: 1000,
    lagerzeitpunkt: new Date("2021/02/01")
  },

]
