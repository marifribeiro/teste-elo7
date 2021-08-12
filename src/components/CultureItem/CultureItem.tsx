import React from "react";

import { CultureItemProps } from "./CultureItem.types";
import styles from "./CultureItem.module.scss";

export const CultureItem = ({
  imageSrc,
  imageAlt,
  title,
  description
}: CultureItemProps) => {
  return (
    <div className={styles.cultureItem}>
      <img src={imageSrc} alt={imageAlt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
