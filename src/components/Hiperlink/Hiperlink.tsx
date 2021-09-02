import React from "react";

import { HiperlinkProps } from "./Hiperlink.types";
import styles from "./Hiperlink.module.scss";

export const Hiperlink = ({ label, url }: HiperlinkProps) => {
  return (
    <div className={styles.hiperlink}>
      <div className={styles.separator} data-testid="separator"></div>
      <a href={url}>{label}</a>
    </div>
  );
};
