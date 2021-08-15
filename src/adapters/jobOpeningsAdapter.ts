import {
  JobOpening,
  JobOpeningsApiReturn,
  JobOpeningTreated
} from "types/JobOpenings.types";

export const jobOpeningsAdapter = (
  apiReturn: JobOpeningsApiReturn
): JobOpeningTreated[] => {
  return apiReturn.vagas
    .filter((vaga: JobOpening) => vaga.ativa)
    .map((vaga: JobOpening) => new JobOpeningTreated(vaga));
};
