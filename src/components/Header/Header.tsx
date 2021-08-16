import React from "react";

import { Hiperlink } from "components/Hiperlink";

import fotoHeader from "assets/foto-header.png";
import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.banner}>
      <img
        src={fotoHeader}
        alt="Foto dos funcionários do elo7 sorrindo com as mãos para o alto"
      />
      <div className={styles.textPosition}>
        <h1>Trabalhe no Elo7</h1>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      sagittis, nisi et convallis sollicitudin, sapien elit commodo est, in
      dictum urna turpis at mi. Proin imperdiet ipsum lorem, ut sollicitudin
      risus interdum quis.
    </p>
    <Hiperlink label="VAGAS EM ABERTO" url="#vagas" separator arrow />
  </header>
);
