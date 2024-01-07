export interface Lagergegenstand {
  id: number,
  name: string,
  beschreibung: string,
  mengenbezeichner: string,
  lagerort: string,
  lagerzeitpunktcode: string,
  lagerortmengencode: string,
  lagerortId: number,
  menge: number,
  lagerzeitpunkt: Date
}
