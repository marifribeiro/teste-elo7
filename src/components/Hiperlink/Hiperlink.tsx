import React from "react";

import styles from "./Hiperlink.module.scss";

type Props = {
  label: string;
  url: string;
};

export const Hiperlink = ({ label, url }: Props) => {
  return (
    <div className={styles.hiperlink}>
      <span></span>
      <a href={url}>{label} »</a>
    </div>
  );
};
