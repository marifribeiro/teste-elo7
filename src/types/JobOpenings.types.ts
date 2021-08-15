export interface JobOpeningsApiReturn {
  vagas: JobOpening[];
}

export interface JobOpening {
  cargo: string;
  ativa: boolean;
  link: string;
  localizacao?: Location;
}

export interface Location {
  bairro: string;
  cidade: string;
  pais: string;
}

export class JobOpeningTreated {
  cargo: string;
  ativa: boolean | null;
  link: string;
  localizacao?: Location;
  remoto: boolean;

  constructor(jobOpening: JobOpening) {
    this.cargo = jobOpening?.cargo || "";
    this.ativa = jobOpening?.ativa || null;
    this.link = jobOpening?.link || "";
    this.localizacao = jobOpening?.localizacao;
    this.remoto = !jobOpening.localizacao;
  }
}
