import React from "react";

import { HiperlinkProps } from "./Hiperlink.types";
import styles from "./Hiperlink.module.scss";

export const Hiperlink = ({
  label,
  url,
  arrow = false,
  separator = false
}: HiperlinkProps) => {
  return (
    <div className={styles.hiperlink}>
      {separator && (
        <div className={styles.separator} data-testid="separator"></div>
      )}
      <a href={url}>
        {label} {arrow && <span data-testid="arrow">»</span>}
      </a>
    </div>
  );
};
