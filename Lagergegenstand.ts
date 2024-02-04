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

export interface LagergegenstandCreate{
  name: string,
  beschreibung: string,
  mengenbezeichner: string,
  lagerortId: number,
  menge: number,
  lagerzeitpunkt: Date
}

export interface Lagerort{
  id: number,
  name: string,
  beschreibung: string
}

export interface LoginData{
  username : string,
  password : string
}
