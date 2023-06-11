import React, { FC } from "react";
import { GridItem } from "@chakra-ui/react";

import TopBanner from "./card-banner";
import ContentBottom from "./card-bottom";
import { CardContent } from "../../types/content.types";

export interface CardLoadSkeleton {
  content: CardContent;
}

const ContentCard: FC<CardLoadSkeleton> = ({ content }) => {
  const { image } = content || {};

  return (
    <GridItem>
      <article>
        <TopBanner imageUrl={image?.uri} />
        <ContentBottom content={content} />
      </article>
    </GridItem>
  );
};

export default ContentCard;
