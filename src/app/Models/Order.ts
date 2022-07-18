export interface Order {
  id: number;
  totaal_prijs: number;
  betaald: boolean;
  status: string;
  opmerking: string;
}
