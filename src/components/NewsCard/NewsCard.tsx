import * as React from "react";
import { Article } from "../../types";
import { List, Date, Source, Title } from "./styled";
import { Props } from ".";

const NewsCard = ({ data, numberOfitemsShown }: Props): React.ReactElement => (
  <>
    {data.slice(0, numberOfitemsShown).map((news: Article) => (
      <List key={news.title}>
        <Title>{news.title}</Title>
        <div>
          <Date>{news.publishedAt.substring(0, 10)}</Date>
          <Source>{news.source.name}</Source>
        </div>
      </List>
    ))}
  </>
);

export default NewsCard;
