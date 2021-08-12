import React from "react";

import { Hiperlink } from "components/Hiperlink";
import { CultureItem, CultureItemProps } from "components/CultureItem";

import { CultureListProps } from "./CultureList.types";
import styles from "./CultureList.module.scss";

export const CultureList = ({ cultureItems }: CultureListProps) => {
  return (
    <>
      <section className={styles.cultureList}>
        {cultureItems.map((item: CultureItemProps, index: number) => (
          <CultureItem
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      <Hiperlink label="saiba mais" url="#" />
    </>
  );
};
