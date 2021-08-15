import { jobOpeningsAdapter } from "./jobOpeningsAdapter";

const jobWithNoAddress = {
  vagas: [
    {
      cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
      ativa: true,
      link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior"
    }
  ]
};

const jobWithAddress = {
  vagas: [
    {
      cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
      ativa: true,
      link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
      localizacao: {
        bairro: "Vila Olímpia",
        cidade: "São Paulo",
        pais: "Brasil"
      }
    }
  ]
};

describe("job openings adapter", () => {
  test("says the job opening is remote when there is no location", () => {
    expect(jobOpeningsAdapter(jobWithNoAddress)).toEqual([
      {
        cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
        ativa: true,
        link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
        localizacao: null,
        remoto: true
      }
    ]);
  });

  test("says the job opening is not remote when there is location", () => {
    expect(jobOpeningsAdapter(jobWithAddress)).toEqual([
      {
        cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
        ativa: true,
        link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
        localizacao: {
          bairro: "Vila Olímpia",
          cidade: "São Paulo",
          pais: "Brasil"
        },
        remoto: false
      }
    ]);
  });
});
